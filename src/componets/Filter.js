import React, { useState } from 'react'

const Filter = () => {
    const [selectedItem,setSelectedItem]=useState(1);
  return (
    <section className='m-10 py-3 w:3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around'><button onClick={() => setSelectedItem(1)} 
    className={`btnStyle ${selectedItem === 1 ? 'bg-yellow-400 text-black' : 'text-slate-500'}`}>Latest</button>
 <button onClick={() => setSelectedItem(2)} className={`btnStyle ${selectedItem === 2 ? 'bg-yellow-400 text-black' : 'text-slate-500'}`}>Best Seller</button>
 <button onClick={() => setSelectedItem(3)} className={`btnStyle ${selectedItem === 3 ? 'bg-yellow-400 text-black' : 'text-slate-500'}`}>Special</button>
    
    </section>
  )
}

export default Filter
