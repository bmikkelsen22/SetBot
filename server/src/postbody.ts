import { Card } from './card';

export interface PostBody {
    all: boolean;
    cards: Card[];
}