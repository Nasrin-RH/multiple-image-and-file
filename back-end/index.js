let express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser');
// mongoose = require('mongoose'),
    //dbConfig = require('./database/db')
    

const api = require('../back-end/user.routes')

// MongoDB Configuration
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Database sucessfully connected')
// },
//     error => {
//         console.log('Database could not be connected: ' + error)
//     }
// )

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/public', express.static('public'));

app.use('/api', api)

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});










// web sites:
// 1.https://www.positronx.io/react-multiple-files-upload-with-node-express-tutorial/#:~:text=%20React%20Multiple%20Files%20Upload%20with%20Node%2FExpress%20Tutorial,bodyParser.%20Create%20the%20backend%20folder%20inside...%20More%20
// 2.https://github.com/SinghDigamber/react-multiple-files-upload
// 3.https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088#:~:text=%20How%20Does%20Multer%20Work%3F%20%201%20Project,a%20POST%20request.%20Now%20we%20need...%20More%20
// 4.https://linuxhint.com/postgresql-nodejs-tutorial/#:~:text=%20Pre-requisites%3A%20%201%20Using%20%E2%80%98node-postgres%E2%80%99%20PostgreSQL%20Node.js,again%20as%20it%20is%20out%20of...%20More%20
// 5.https://www.codeconquest.com/versus/mongodb-vs-postgres/
// 6.https://node-postgres.com/api/pool