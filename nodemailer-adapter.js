module.exports = function (RED) {
    "use strict";
    var nodemailer = require("nodemailer");

    function MailerNode(n) {
        RED.nodes.createNode(this, n);
        var node = this;

        var transport;
        try {
            transport = nodemailer.createTransport(JSON.parse(n.transport));
        } catch (error) {
            node.error(error);
            node.status({fill: "red", shape: "ring", text: "disconnect"});
        }

        this.on("input", function (msg) {
            node.status({fill: "yellow", shape: "ring", text: "sending..."});
            if (!transport) {
                node.error("No transport.");
                node.status({fill: "red", shape: "ring", text: "fail"});
                return;
            }
            if (!msg.payload) {
                node.error("Empty msg.payload.");
                node.status({fill: "red", shape: "ring", text: "fail"});
                return;
            }

            transport.sendMail(msg.payload, function (error, info) {
                if (error) {
                    node.error(error, msg);
                    node.status({fill: "red", shape: "ring", text: "fail"});
                } else {
                    node.status({fill: "green", shape: "ring", text: "ok"});
                }
            });
        });
    }

    RED.nodes.registerType("mailer", MailerNode);
};