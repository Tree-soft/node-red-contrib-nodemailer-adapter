#node-red-contrib-nodemailer-adapter

[Node-Red][1] node contrib node to send emails [nodemailer][2].
It is simple adapter for call [nodemailer][2] functions:
- nodemailer.createTransport(transport)
- transporter.sendMail(data)

##Install

Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-nodemailer-adapter

##Usage
The mailer node's call is equivalent this JavaScript code based on [nodemailer][2]:
    
    var transporter = nodemailer.createTransport(transport)
    transporter.sendMail(data)
    
Where the transport parameter as equals node's input field transport and the data parameter equals equals msg.payload.
See [nodemailer][2] documentation for transporter and date formats. 

[1]:http://nodered.org
[2]:https://www.npmjs.com/package/nodemailer