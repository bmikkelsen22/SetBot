import * as React from 'react';
import { Card } from "./model";
import { Container } from "../container";
import { CardComponent } from "./card";

interface Props {
    cards: Card[];
    title: string;
}

export class CardGroup extends React.Component<Props, undefined> {
    render() {
        const cardsJsx = this.props.cards.map(card => 
            <CardComponent card={card} height={70} width={75}/>
        );

        return (
            <Container header={this.props.title}>
                {cardsJsx}
            </Container>
        );
    }
}