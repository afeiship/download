import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';
import path from 'path';

// https://stackoverflow.com/questions/37614649/how-can-i-download-and-save-a-file-using-the-fetch-api-node-js

interface DownloadOptions extends RequestInit {
  url: string;
  filename?: string;
  cwd?: string;
}

const mkdirpSync = (dir: string) => {
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch (_) {
  }
};

const defaults = {
  cwd: '.',
};

const download = async (inOptions: DownloadOptions) => {
  const { url, filename, cwd, ...options } = { ...defaults, ...inOptions };
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`unexpected response ${res.statusText}`);

  const _url = url.split('?')[0];
  const _filename = filename || _url.split('/').pop();
  if (!_filename) throw new Error('No filename provided');
  const destination = path.resolve(cwd, _filename);
  mkdirpSync(path.dirname(destination));

  if (fs.existsSync(destination)) throw new Error('File already exists');

  const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
  await finished(Readable.fromWeb(res.body as any).pipe(fileStream));
};

export default download;
