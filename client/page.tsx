import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AddCard } from './add/add';
import { Card } from "./card/model";
import { CardGroupSet } from "./card/card-group-set";
import { Sets } from "./bot/sets";
import { CardGroupAll } from "./card/card-group-all";

const element = document.getElementById('main-element');

interface State {
    cards: Card[];
}

export class Page extends React.Component<undefined, State> {

    constructor() {
        super();
        this.state = {
            cards: []
        };
    }

    addCard = (card: Card) => {
        this.setState({
            cards: [...this.state.cards, card]
        });
    }

    removeCard = (card: Card) => {
        const newCards = this.state.cards.slice();
        const removeIndex = newCards.indexOf(card);
        newCards.splice(removeIndex, 1);
        this.setState({
            cards: newCards
        });
    }

    render() {
        return (
            <div id='main-page' className='flex-wrap-container'>
                <AddCard onAddCard={this.addCard}/>
                <CardGroupAll cards={this.state.cards} cardClicked={this.removeCard} />
                <Sets cards={this.state.cards} />
            </div>
        );
    }
}

//TODO: move this
ReactDOM.render(<Page/>, element);
