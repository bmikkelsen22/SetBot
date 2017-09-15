import * as React from 'react';
import { Card } from "../card/model";
import { Game } from "./game";
import { Bot } from "./bot";
import { CardGroup } from "../card/card-group";

interface Props {
    cards: Card[];
}

export class Sets extends React.Component<Props, undefined> {
    game: Game;
    bot: Bot;

    constructor() {
        super();
        this.game = new Game([]);
        this.bot = new Bot(this.game);
    }

    render() {
        this.game.cards = this.props.cards;
        const sets = this.bot.findSets();
        const distinct = this.bot.distinctSets(sets);
        const setsJsx = distinct.map((cardSet, index) => 
            <CardGroup title={'Set ' + (index + 1)} cards={cardSet} key={index}/>
        );
        return (
            <div className='sets-container'>
                {setsJsx}
            </div>
        );
    }
}