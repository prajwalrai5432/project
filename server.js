const connectDB = require('./config/db');
const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const image2base64 = require('image-to-base64');
const vehicleModel = require('./models/Home');
const showroomModel = require('./models/Showrooms');
const path = require('path');
const app = express();
const port = 5000;

connectDB()
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.error(err);
  });

vehicleModel
  .createCollection()
  .then(() => {
    console.log('vehicle model created');
  })
  .catch((err) => console.error(err));

showroomModel
  .createCollection()
  .then(() => {
    console.log('showroom model created');
  })
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/add.html'));
});

app.get('/sh', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/addt.html'));
});

app.post('/datata', (req, res, next) => {
  const form = formidable({
    multiples: true,
  });
  form.parse(req, (err, fields, files) => {
    console.log(fields);
    if (err) {
      next(err);
      return;
    }
    showroomModel
      .create({ ...fields })
      .then(() => {
        console.log('document created');
      })
      .catch((err) => console.error(err));
    res.json({
      ...fields,
    });
  });
});

app.post('/data', (req, res, next) => {
  const form = formidable({
    multiples: true,
    uploadDir: path.join(__dirname + '/.uploads'),
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    fs.rename(
      files.file.path,
      __dirname + '/.uploads/' + files.file.name,
      (err) => {
        if (err) res.status(500).send(err);
        console.log('renaming complete');
        image2base64(__dirname + '/.uploads/' + files.file.name)
          .then((base64) => {
            console.log('base64 complete');
            fs.unlink('./.uploads/' + files.file.name, (err) => {
              if (err) console.log(err);
              else console.log('file removed');
            });
            vehicleModel
              .create({
                ...fields,
                Image: `data:${files.file.type};base64, ${base64}`,
              })
              .then(() => {
                console.log('document created');
              })
              .catch((err) => console.error(err));
            res.json({
              ...fields,
              Image: `data:${files.file.type};base64, ${base64}`,
            });
          })
          .catch((err) => res.status(500).send(err));
      }
    );
  });
});
app.listen(port, () => console.log(`listening on port:${port}`));
