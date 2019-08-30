import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react'

import Card from './Card';

it('displays text on card', () => {
    const message = "World, be greeted";
    const { getByText } = render(<Card text={message} />);

    const textNode = getByText(message);
    expect(textNode).toBeDefined();
});
