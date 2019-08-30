import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react'

import Deck from './Deck';

it('displays a deck with one card', () => {
    const message = 'World, be greeted'
    const cards = [message]
    const { getByText } = render(<Deck cards={cards} />);

    const textNode = getByText(message);
    expect(textNode).toBeDefined();
});

it('displays an empty deck', () => {
    const cards = [];
    const { queryByText } = render(<Deck cards={cards} />);

    const textNode = queryByText(word => word.length > 0);
    expect(textNode).toBeFalsy();
});
