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
                        This tool was built to recognize sets in the game {" "}
                        <a href="https://en.wikipedia.org/wiki/Set_(game)">Set</a>.
                    </p>
                    <p>
                        Start by selecting a color, number, shape, and shade for the card,
                        then add it to the game by pressing the "Add card" button. 
                        You can remove cards by tapping on them in the all cards section.
                        Once you have added cards that form a set, the set will appear at 
                        the bottom of the page. Note that all possible sets are shown.
                    </p>
                    <a className="clickable" onClick={() => this.props.toggleShown(false)}>Close</a>
                </div>
            </Container>
        );
    }

    render() {
        if (this.props.showHelp) {
            return this.renderMessage();
        } else {
            return (
                <a className="clickable" onClick={() => this.props.toggleShown(true)}>Help</a>
            );
        }
    }
}