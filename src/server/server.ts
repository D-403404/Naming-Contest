import express from 'express';
import config from './config.ts';

const server = express();

server.set('view engine', 'ejs');

server.use(express.static('dist'));

server.use('/', (req, res) => {
    res.render('index', {
        initialContent: 'Loading...'
    })
})

server.listen(parseInt(config.PORT), config.HOST, () => {
    console.info(`Server running on ${config.SERVER_URL}`);
})