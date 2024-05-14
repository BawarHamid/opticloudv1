import { getItems } from '@/lib/items';

export default async function Items() {
    const items = await getItems();

    return (
        <main>
            {!items ? <h1>No items</h1>
                : <div className='scrollable py-8'>
                    {items?.map(item => {
                        return (
                            <div key={item.id} className='py-2'>
                                <p>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            }
        </main>
    );
}
