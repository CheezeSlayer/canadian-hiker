const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

const app = express();

app.set('views', __dirname + '/public/view');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//--Define routes
app.get('/', (req, res) => {
  res.sendfile('pages/home.html', {
  });

});

app.get('/pages/home.html', (req, res) => {
  res.sendfile('pages/home.html', {
  });

});

app.get('/pages/prints.html', (req, res) => {
  res.sendfile('pages/prints.html', {
  });

});

app.get('/pages/about.html', (req, res) => {
  res.sendfile('pages/about.html', {
  });

});

app.get('/pages/contact.html', (req, res) => {
  res.sendfile('pages/contact.html', {
  });

});

app.post('/send-email', function(req, res) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secureConnection: false,
    auth: {
        user: 'hchang1994@hotmail.com',
        pass: 'hc6045998616'
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });
  let mailOptions = {
    from: `"Canadian Hiker" <hchang1994@hotmail.com>`,
    to: 'hchang1994@hotmail.com',
    subject: `Message From: ${req.body.fname} ${req.body.lname} (${req.body.email}) --- ${req.body.subject}`,
    text: `${req.body.msg}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s send: %s', info.messageId, info.response);
    res.sendfile('pages/contact.html', {
    });
  });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
