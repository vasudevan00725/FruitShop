import './App.css';
import Appbar from './componets/Appbar';
import Filter from './componets/Filter';
import Item from './componets/Item';
import SeasonSpecials from './componets/SeasonSpecials';
import Footer from './componets/Footer';


function App() {
  return (
    <div>
    {/* //   <span className='text-5xl font-bold text-green-500'>Fruit</span> <span className='text-stone-500 text-4xl'>Shop</span>
    //   <div>
    //     <span className='text-stone-500 text-4xl font-display'>Session Specials</span>
    //   </div>
    //   <div>
    //     <span className='text-stone-500 text-4xl font-display'>Findus on</span>
    //   </div> */}
      <Appbar/>
      <Filter/>
      <Item/>
      <SeasonSpecials/>
      <Footer/>
    </div>
  );
}

export default App;
