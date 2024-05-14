import { get } from './api';

type Item = {
    id: number;
    title: string;
    date: string;
}

export async function getItems(): Promise<Item[] | undefined> {
    console.log('getItems()');

    /* Integrate with backend by inputting correct url */
    //const result: Item[] | any = await get('/items');

    /* Placeholder - Delete after backend integration */
    const result: Item[] | any = [
        {
            id: 1,
            title: 'Item 1',
            date: '2024-05-10T12:00:00.000Z'
        },
        {
            id: 2,
            title: 'Item 2',
            date: '2024-05-12T15:30:00.000Z'
        },
    ]
    /* End of placeholder */

    if (result.error) {
        return undefined;
    }

    return result;
}
