import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AddCard } from './add/add';
import { Card } from "./card/model";
import { CardGroup } from "./card/card-group";
import { Sets } from "./bot/sets";

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

    render() {
        return (
            <div id='main-page' className='flex-wrap-container'>
                <AddCard onAddCard={this.addCard}/>
                <CardGroup title="All Cards" cards={this.state.cards} />
                <Sets cards={this.state.cards} />
            </div>
        );
    }
}

//TODO: move this
ReactDOM.render(<Page/>, element);
