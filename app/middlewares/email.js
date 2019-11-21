const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport');
const sendEmail=(user,token)=>{
    const transporter = nodemailer.createTransport(
        sendgridTransport({
          auth: {
            api_key:
              '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'
          }
        })
      );
  transporter.sendMail({
        to: user.email,
        from: 'ravimaddi18@gmail.com',
        subject: 'Password reset',
        html: `
          <p>You requested a password reset</p>
          <p>Click this <a href="http://localhost:3015/reset/${token}">link</a> to set a new password.</p>
        `
      })
    
}

module.exports=sendEmail