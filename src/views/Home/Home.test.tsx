import React from 'react';
import {render, waitFor} from '@testing-library/react';
import Home from './Home';

const getProjectResponse = {
    "has_more": true,
    "data": [
        {
            "id": "ljmkOq7vXd239gAEmALWQ8ZGVD5ExNzr",
            "name": "Larimar Wind",
        },
        {
            "id": "gMbvJoOaX54V1wpNwA8dWDGQ7m239Bx0",
            "name": "Southern Cardamom",
        },
        {
            "id": "va1BER4JZqnzPkYxZALg0GeQDoXlWO5x",
            "name": "Kootznoowoo",
        },
        {
            "id": "BmWxrvXo29eGqzA1eANL5PwnkgaO8R31",
            "name": "Alligator River",
        },
        {
            "id": "MXJvWdBbNaDVokYzayP9lZG6zwj7K1R2",
            "name": "Hudson Farm",
        }
    ]
}

jest.mock(`endpoints/api`, () => ({
    getProjects: () => Promise.resolve({
        data: getProjectResponse
    })
}))

test('Renders expected projects list', async () => {
    const comp = render(<Home/>);
    for (const p of getProjectResponse.data) {
        await waitFor(() => expect(comp.getByText(p.name)).toBeInTheDocument())
    }
});

test('Renders expected projects before and after pressing Load More button', async () => {
    // Implement this
});
