import './App.css';
import { Listing } from './components/Listing';
import data from './data/etsy.json';

function App() {
  const processedItems = data.map(item => ({
    listing_id: item.listing_id || "N/A",
    url: item.url || "#",
    MainImage: item.MainImage ? item.MainImage.url_570xN : 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg',
    title: item.title || "No description",
    currency_code: item.currency_code || "-",
    price: item.price || "-",
    quantity: item.quantity || 0,
  }));
  return (
    <Listing items={processedItems}></Listing>
  );
}

export default App
