/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Section1 = () => {
  return (
    <section className="relative min-h-screen" id="utama">
      <div className="bg-stone-700 overflow-hidden">
        <div className="absolute z-10 top-0 left-0 bottom-0 right-0 flex justify-center ">
          {/* <div className="pt-12 text-stone-700"> */}
          <div className="pt-20 text-stone-200">
            {/* <img src="/images/logo-only.png" alt="Logo" className="mx-auto h-12" /> */}
            <div className="h-12 mx-auto mt-10">
              <h1
                className="font-bold text-5xl text-stone-200 text-center"
                style={{
                  fontFamily: 'Sacramento',
                }}
              >
                Candra
              </h1>
            </div>
            <h1
              className="text-5xl text-stone-200 text-center"
              style={{
                fontFamily: 'Sacramento',
              }}
            >
              {'&'}
            </h1>
            <h1
              className="font-bold text-5xl text-stone-200 text-center"
              style={{
                fontFamily: 'Sacramento',
              }}
            >
              Irma
            </h1>
            <p
              className="text-4xl mt-10 text-center"
              style={{
                fontFamily: 'Hendycroft Signature',
              }}
            >
              Me and you, Just us Two.
            </p>
            <p className="mt-2 text-right text-xs">09.07.2023</p>
          </div>
        </div>
        <img
          src="/images/cover/cover1.jpg"
          alt="Cover"
          className="opacity-70 min-h-screen object-cover"
        />
      </div>
    </section>
  );
};

export default Section1;
