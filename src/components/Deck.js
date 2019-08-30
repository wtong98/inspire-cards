/**
 * Deck holds a stack of cards, and manages logic of displaying next card.
 *
 * author: William Tong (williamtong105@gmail.com)
 * date: 8/29/2019
 */

import React from 'react';

import Card from './Card';

/**
 * Props:
 *  cards: list of cards to render, given as strings
 */
export default function Deck(props) {
    let topCard = null;

    if (props.cards.length > 0) {
        const topCardText = _pick(props.cards);
        topCard = <Card text={topCardText} />
    }

    return topCard;
}

function _pick(cards) {
    const randIndex = _randInt(0, cards.length);
    return cards[randIndex]
}

function _randInt(lower, upper) {
    const randFloat =  Math.random() * upper + lower;
    return Math.floor(randFloat);
}
