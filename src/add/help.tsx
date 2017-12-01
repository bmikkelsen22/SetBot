import * as React from 'react';
import { Container } from '../container';

interface Props {
    showHelp: boolean;
    toggleShown: (show: boolean) => void;
}

export class Help extends React.Component<Props, undefined> {
    renderMessage() {
        return (
            <Container header="Help">
                <div className='help'>
                    <p>
                        Start by selecting a color, number, and shape for the card,
                        then add it to the game by pressing the "Add card" button. 
                        You can remove cards by tapping on them in the all cards section.
                        Once you have added cards that form a set, the set will appear at 
                        the bottom of the page. Note that all possible sets are shown.
                    </p>
                    <a onClick={() => this.props.toggleShown(false)}>Close</a>
                </div>
            </Container>
        );
    }

    render() {
        if (this.props.showHelp) {
            return this.renderMessage();
        } else {
            return (
                <a onClick={() => this.props.toggleShown(true)}>Help</a>
            );
        }
    }
}