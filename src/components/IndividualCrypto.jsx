import React from 'react';

export const IndividualCrypto = ({ crypto }) => {
    const {
        FROMSYMBOL,
        TOSYMBOL,
        IMAGEURL,
        PRICE,
        HIGHDAY,
        LOWDAY,
        VOLUME24HOUR,
        CHANGEPCT24HOUR,
        LASTUPDATE
    } = crypto;

    return (
        <div className="bg-indigo-700 rounded-md p-4 mt-10">
            <h1 className="text-white font-bold uppercase text-2xl text-center">
                {FROMSYMBOL} / {TOSYMBOL}
            </h1>
            <div className="flex mt-5 text justify-center mb-5">
                <div>
                    <h2>Imagen</h2>
                    <img src={IMAGEURL} alt={`${FROMSYMBOL} logo`} />
                </div>
                <div className="ml-6 text-white">
                    <h2 className="">
                        <span className="font-semibold">Precio: </span>${PRICE}
                    </h2>
                    <div>
                        <h3 className="">
                            <span className="font-semibold">Alto del día: </span>${HIGHDAY}
                        </h3>
                        <h2 className="">
                            <span className="font-semibold">Bajo del día: </span>${LOWDAY}
                        </h2>
                    </div>
                    <p>
                        <span className="font-semibold">Volumen últimas 24 horas: </span>
                        {VOLUME24HOUR}
                    </p>
                    <p>
                        <span className="font-semibold">Cambio porcentual últimas 24 horas: </span>
                        {CHANGEPCT24HOUR}%
                    </p>
                    <p>
                        <span className="font-semibold">Última actualización: </span>
                        {LASTUPDATE}
                    </p>
                </div>
            </div>
        </div>
    );
};
