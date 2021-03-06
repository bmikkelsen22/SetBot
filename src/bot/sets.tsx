import * as React from 'react';
import { Card } from "../card/model";
import { Game } from "./game";
import { Bot } from "./bot";
import { CardGroupSet } from "../card/card-group-set";

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
        const setsJsx = sets.map((cardSet, index) => 
            <CardGroupSet title={'Set ' + (index + 1)} cards={cardSet} key={index}/>
        );
        return (
            <div className='sets-container'>
                {setsJsx}
            </div>
        );
    }
}