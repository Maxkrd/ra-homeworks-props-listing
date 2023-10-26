import { Offer } from '../Offer';

export const Listing = (props) => {
    const { items } = props;
    const processedItems = items.map(item => {
        const title = item.title && item.title.length > 50 ? item.title.substring(0, 50) + "…" : item.title;
        return {
            ...item,
            title,
        };
    });

    return (
        <div className='item-list'>
            {processedItems.map(item => <Offer key={item.listing_id} item={item}/>)}
        </div>
    )
}
