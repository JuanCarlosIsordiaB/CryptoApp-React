

import React from 'react';

const List = ({ cryptos }) => {
  return (
    <div className='mt-14'>
        <h2 className='font-bold text-2xl text-white mb-4 '>Top CryptoCurrencies by <span className='text-indigo-700'>Market Cap</span>. </h2>
      {
        cryptos.map((crypto, index) => (
            <div key={index} className='flex justify-between border p-2 border-indigo-700'>
                <div className='flex'>
                    <p className='font-semibold text-white mr-3 p-1 text-sm'>{index+1}</p>
                    <p className='font-bold text-white text-xl'>{crypto.CoinInfo.FullName}</p>
                    <img src='crypto.coinInfo.ImageURL 'alt="" />
                </div>
                <div className='flex'>
                   <p className='font-semibold text-indigo-800 text-md mr-2'>${crypto.RAW.USD.PRICE.toFixed(3)}</p> 
                   <button className='bg-indigo-700 px-3 rounded-md text-white font-bold uppercase hover:bg-indigo-950'>Buy</button>
                </div>
                
                
            </div>   
        ))
      }
    </div>
  );
};

export default List;
