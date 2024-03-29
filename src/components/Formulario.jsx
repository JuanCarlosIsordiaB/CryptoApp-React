import React, { useEffect, useState } from 'react';

export const Formulario = () => {
    const [individualCrypto, setIndividualCrypto] = useState('');
    const [cryptoRes, setCryptoRes] = useState({});
    const [name, setName] = useState('');
    const [cryptoNotFound, setCryptoNotFound] = useState(false);

    const cryptoAbbreviations = {
        'bitcoin': 'BTC',
        'ethereum': 'ETH',
        'bnb': 'BNB',
        'solana': 'SOL',
        'cardano': 'ADA',
        'ripple': 'XRP',
        'polkadot': 'DOT',
        'dogecoin': 'DOGE',
        'avalanche': 'AVAX',
        'chainlink': 'LINK',
        'litecoin': 'LTC',
        'stellar': 'XLM',
        'tezos': 'XTZ',
        'uniswap': 'UNI',
        'bitcoin-cash': 'BCH',
        'cosmos': 'ATOM',
        'matic-network': 'MATIC',
        'vechain': 'VET',
        'tron': 'TRX',
        'filecoin': 'FIL',
        'eos': 'EOS',
        'theta': 'THETA',
        'crypto-com-chain': 'CRO',
        'neo': 'NEO',
        'maker': 'MKR'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        if(individualCrypto.length <= 0) return ;

        const foundCrypto = await findIndividualCrypto(individualCrypto);

        if (!foundCrypto) {
            // Si no se encontró la criptomoneda, muestra el bloque indicado
            setCryptoRes({}); // Limpiar cryptoRes para asegurar que no se muestre el bloque con datos anteriores
            setName('');
            setCryptoNotFound(true);
        } else {
            // Si se encontró la criptomoneda, actualiza el nombre y resetea la bandera
            setName(individualCrypto);
            setCryptoNotFound(false);
        }
    }

    const findIndividualCrypto = async (crypto) => {
        try {
            // Verifica si la entrada es una abreviatura conocida
            const cryptoAbbreviation = cryptoAbbreviations[crypto.toLowerCase()];
            const fsyms = cryptoAbbreviation || crypto;

            const req = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=USD`);
            const res = await req.json();

            // Encuentra la clave de la moneda dinámicamente
            const currencyKey = Object.keys(res.DISPLAY || res.RAW || {})[0];

            // Asegúrate de que la clave de la moneda existe antes de acceder a las propiedades
            if (currencyKey) {
                const displayData = res.DISPLAY ? res.DISPLAY[currencyKey]?.USD : null;
                const rawData = res.RAW ? res.RAW[currencyKey]?.USD : null;

                const dataToDisplay = displayData || rawData;

                if (dataToDisplay) {
                    setCryptoRes(dataToDisplay);
                    return true; // Indica que se encontró la criptomoneda
                } else {
                    console.error("No se pudo obtener datos de la moneda.");
                }
            } else {
                console.error("No se pudo encontrar la clave de la moneda en la respuesta.");
            }

            return false; // Indica que no se encontró la criptomoneda
        } catch (error) {
            console.log(error);
            return false; // Indica que no se encontró la criptomoneda debido a un error
        }
    }

    return (
        <div>
            {cryptoNotFound && (
                <div className="bg-red-500 rounded-md p-4 mt-10">
                    <h1 className="text-white font-bold uppercase text-2xl text-center">
                        Cryptocurrency does not exist
                    </h1>
                </div>
            )}

            {
                (cryptoRes.FROMSYMBOL && Object.keys(cryptoRes).length > 0) ? (
                    <div className="bg-indigo-700 rounded-md p-4 mt-10">
                        <h1 className="text-white font-bold uppercase text-2xl text-center">
                            {name}
                        </h1>
                        <div className="flex mt-5 text justify-center mb-5">
                            <div className="ml-6 text-white">
                                <h2 className="">
                                    <span className="font-semibold">Precio: </span>{cryptoRes.PRICE}
                                </h2>
                                <div>
                                    <h3 className="">
                                        <span className="font-semibold">Alto del día: </span>{cryptoRes.HIGHDAY}
                                    </h3>
                                    <h2 className="">
                                        <span className="font-semibold">Bajo del día: </span>{cryptoRes.LOWDAY}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }

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
    );
}
