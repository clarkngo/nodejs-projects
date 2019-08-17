"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) { return res.render('address', {
    title: 'This is the Address Page',
    content: 'This is the content of the Address Page'
}); };
exports.default = handler;
