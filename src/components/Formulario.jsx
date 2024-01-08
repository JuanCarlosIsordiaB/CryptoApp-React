
import React, { useEffect, useState } from 'react'
import { IndividualCrypto } from './IndividualCrypto';


export const Formulario = () => {

    const [individualCrypto, setIndividualCrypto] = useState('');
    const [cryptoRes, setCryptoRes] = useState('');

    const cryptoAbbreviations = {
        'bitcoin': 'BTC',
        'ethereum': 'ETH',
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Se buscara: ${individualCrypto}`);
        findeIndivualCrypto(individualCrypto);
        
        
    }

    const findeIndivualCrypto = async(crypto) => {
        try {
            // Verifica si la entrada es una abreviatura conocida
            const cryptoAbbreviation = cryptoAbbreviations[crypto.toLowerCase()];
            const fsyms = cryptoAbbreviation || crypto;

            const req = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=USD`);
            const res = await req.json();
            setCryptoRes(res.DISPLAY);
            
        } catch (error) {
            console.log(error);
        }
    }
    console.log(cryptoRes.BTC.USD.PRICE);

  return (
    <div>

       

        <form 
            action=""
            className='text-center mt-10'
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                className='w-full py-3 rounded-md px-3 '
                onChange={(e) => setIndividualCrypto(e.target.value.toLowerCase())}
            />
            <button
                className='font-bold bg-indigo-700 rounded-md px-5 py-3 text-white uppercase w-full shadow-md mt-5 hover:bg-indigo-900 transition-all'
                type='submit'
            >
                Search
            </button>
        </form>
    </div>
  )
}
