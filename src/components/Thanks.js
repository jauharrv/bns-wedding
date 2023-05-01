/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Thanks = () => {
  return (
    <section
      className="bg-orange-50 px-6 py-8 text-yellow-700 relative overflow-hidden z-20"
      data-aos="fade-down"
    >
      <div className="flex w-full justify-center mt-6 relative z-10 py-16">
        <img src="/images/thanks.png" alt="Save The Date" className="h-28 object-cover" />
      </div>
      <img
        src="/images/flower.png"
        alt=""
        className="absolute left-0 top-0 rotate-180 h-40 z-20 scale-90"
      />
      <img
        src="/images/flower.png"
        alt=""
        className="absolute right-0 bottom-0 h-40 z-20 scale-90"
      />
    </section>
  );
};

export default Thanks;
