import React, { useEffect, useState } from 'react'
import { Formulario } from './components/Formulario';
import List from './components/List';


const App = () => {

  const [cryptos, setCryptos] = useState([]);

  const consultarApi = async() => {
    try {
      const req = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
      const res = await req.json();
      
      setCryptos(res.Data);
                 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    consultarApi();
  },[]);


  return (
    <div className='flex items-center justify-center h-screen mx-3 md:mx-0'>
      <div className='bg-indigo-400 p-8 rounded-lg'>

        <h1 className='font-bold text-4xl text-white'>Start checking your <span className='text-indigo-700'>cryptos</span>.</h1>

        <Formulario />
        <List cryptos={cryptos} />

      </div>
    </div>
  )
}


export default App;
