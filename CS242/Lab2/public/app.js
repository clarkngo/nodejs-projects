"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var address_controllers_1 = __importDefault(require("./controllers/address-controllers"));
var timestamp_1 = __importDefault(require("./middlewares/timestamp"));
var app = express_1.default();
// The router
app.use(timestamp_1.default);
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) { return res.end('This is your Express server.'); });
app.get('/address', address_controllers_1.default);
app.listen(4000, function () { return console.log('The server is running on http://localhost:4000'); });
