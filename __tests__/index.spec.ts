import download from '../src';

describe('api.basic', () => {

  beforeAll(() => {
    // clear test.jpg file
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, 'test.jpg');
    fs.unlinkSync(filePath);
  });

  test('01/download jpg', async () => {
    await download({
      filename: 'test.jpg',
      cwd: '__tests__',
      url: 'https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
    });

    //   read 'test.jpg' file
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, 'test.jpg');

    // test exists
    expect(fs.existsSync(filePath)).toBe(true);
  });
});
