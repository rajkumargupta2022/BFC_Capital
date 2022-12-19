const { log } = require("winston");
const nodemailer = require("nodemailer");
const response = require('../utils/response');
const { auth } = require('../utils/index');
const MailCredientail = require("../credentials/mail");

const ForContactUs = require("../Models/ContactUsModel");



module.exports = {
    async ContactUs(req, res) {
        // const allProducts = await ForContactUs.findOne({ 'Email': req.body.Email })
        // console.log("allProducts   ", allProducts);
        // if (allProducts != null) return res.status(400).json({ msg: "Email Allready Registered !" })
        console.log("MailCredientail.MAIL_USERNAME",MailCredientail.MAIL_USERNAME);
        try {
            console.log("raj ", req.body);

            var myData = new ForContactUs(req.body);
            myData.save()
                .then(item => {
                    res.send("item saved to database");
                    {/* Mail Start for User */ }
                    var emailcontent = ` <p>Hi <strong> ${req.body.FullName}</strong>,</p>
                        <p>Thank you for reaching out to us. Your request has been received and acknowledged at our end. One of our team members will get in touch with you shortly.</p>
                        
                        <br><br>
                        <p>This is an auto-generated mail. Please do not reply. If you have a query, you can reach us at customersupport@bfccapital.com.</a></p>
                            <br><br>
                        <p><strong>Thanks & Regards</strong></p>
                        <p><strong>Team BFC Capital</strong></p>
                        `;
                    const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'rajkumarbfcsofttech@gmail.com',
                            pass: 'dmpycgstaxmxdbif',
                        },
                    });
                    // var transporter = nodemailer.createTransport({
                    //     host: MailCredientail.MAIL_HOST,
                    //     port: MailCredientail.MAIL_PORT,
                    //     secureConnection: false,
                    //     service: 'gmail',

                    //     auth: {
                    //       user: MailCredientail.MAIL_USERNAME,
                    //       pass: MailCredientail.MAIL_PASSWORD
                    //     }
                    //   });

                    transporter.sendMail({
                        from: "BFC Capital <"+MailCredientail.MAIL_FROM_ADDRESS+">", // sender address
                        to: req.body.Email, // list of receivers
                        subject: "Welcome to BFC Capital", // Subject line
                        text: req.body.Subject, // plain text body
                        html: emailcontent, // html body
                    }).then(info => {
                        console.log({ info });
                    }).catch(console.error);

                    // mail sending for Admin *****************
                    var emailcontent = ` <p>Hi,</p>
            
            
            <p>Mr./Mrs. ${req.body.FullName} wants to reach out to us for some investment purpose.</p>
            <p>( need a investment query )</p>
            <p>Listed below are his/her contact details.</p>
            <p><b>Email Id:- </b>${req.body.Email}</p>
            <p><b>Contact No:-</b> ${req.body.MobileNumber}</p>
       
            
            <br><br>
            <p><strong>Thanks & Regards</strong></p>
            <p><strong>Team BFC Capital</strong></p>
           
             `;
                    const transporterAdmin = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'rajkumarbfcsofttech@gmail.com',
                            pass: 'dmpycgstaxmxdbif',
                        },
                    });


                    transporterAdmin.sendMail({
                        from:  "BFC Capital <"+MailCredientail.MAIL_FROM_ADDRESS+">", // sender address
                        to: "customersupport@bfccapital.com", // list of receivers
                        subject: "BFC Capital ", // Subject line
                        text: req.body.Subject, // plain text body
                        html: emailcontent, // html body
                    }).then(info => {
                        console.log({ info });
                    }).catch(console.error);

                })


        } catch (error) {
            console.log("error", error);
            return response.error(res, 500, error);
        }
    }
}