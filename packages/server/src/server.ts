import path from 'path';
import { Methods } from './Methods';
import { App } from './App';
import { upload } from './multerConfig';
import { File } from './Image';
import { envConfig } from './envConfig';

const app = new App();
const { allowedFormats, maxSize } = envConfig;
const imageFormats = ['raw', 'jpg', 'tiff', 'psd', 'bmp', 'png', 'jp2'];

app.setStatic(path.resolve(__dirname, '../../web/dist/'));
app.setRoute('/', Methods.GET, (req, res) => {
  res.sendfile(path.resolve(path.resolve(), 'static', 'index.html'));
})
app.setRoute('/*', Methods.POST, (req, res) => {
  const file = upload.single('file');
  file(req, res, (err) => {
    if (err) {
      throw err;
    }
    if (req.file) {
      const extension: string = req.file.originalname.split('.')[1].trim();
      if (!allowedFormats.includes(extension) || req.file.size > maxSize) {
        res.status(409).end();
      }
      if (imageFormats.includes(extension)) {
        const image = new File(req.file);
        image.processImage();
        res.json(image.getUrl());
        res.end();
      } else {
        const uploadedFile = new File(req.file);
        uploadedFile.processFile();
        res.json(uploadedFile.getFileUrl());
        res.end();
      }
    }
  });
});

app.run();
