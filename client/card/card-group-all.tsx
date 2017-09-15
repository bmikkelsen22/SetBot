import * as React from 'react';
import { Card } from "./model";
import { Container } from "../container";
import { CardComponent } from "./card";

interface Props {
    cards: Card[];
    cardClicked: (card: Card) => void;
}

export class CardGroupAll extends React.Component<Props, undefined> {
    render() {
        const cardsJsx = this.props.cards.map((card, idx) => 
            <CardComponent key={idx} card={card} height={105} width={67.5} 
                onClick={this.props.cardClicked}/>
        );

        return (
            <Container header="All Cards">
                {cardsJsx}
            </Container>
        );
    }
}