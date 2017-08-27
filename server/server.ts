import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as Path from 'path';

const app = Express();
app.use(BodyParser.json());
var port = parseInt(process.env.PORT) || 3000;

app.use(Express.static(Path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Server listening on port', port);
});