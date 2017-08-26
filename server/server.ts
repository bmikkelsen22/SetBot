import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as Path from 'path';
import { Game } from './game';
import { Bot } from './bot';
import { PostBody } from './postbody';

const app = Express();
app.use(BodyParser.json());
var port = parseInt(process.env.PORT) || 3000;

app.use(Express.static(Path.join(__dirname, 'public')));

app.post('/getSets', (req, res, next) => {
    let body = req.body as PostBody;
    let game = new Game(body.cards);
    let bot = new Bot(game);
    let sets = bot.findSets();
    if (!body.all) {
        sets = bot.distinctSets(sets);
    }
    res.status(200).send(JSON.stringify(sets));
});

app.listen(port, () => {
    console.log('Server listening on port', port);
});