import React from 'react';
import Graphic1 from '~icons/Graphic1';
import Shape1 from './Shape1';
import Text from './Text';

const Section4 = () => {
  return (
    <section className="relative bg-red-900 -mt-20 px-6 overflow-hidden" id="event">
      <div className="pt-24 bg-red-800">
        <div className="flex justify-center" data-aos="zoom-in-up">
          <Graphic1 />
        </div>

        <div className="text-sm text-[#f59e0b] text-center relative z-20" data-aos="zoom-in-up">
          <p className="mt-8">
            Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan suatu kebahagiaan dan kehormatan
            bagi kami.
          </p>
          <p className="font-semibold text-amber-500 mt-2">{`Wassalamu'alaikum Warrahmatullahi Wabarrakatuh`}</p>
        </div>

        <div className="text-center font-semibold text-[#f59e0b] mt-8 relative z-10">
          <p data-aos="fade-down">Minggu</p>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <p className="font-bold text-5xl" data-aos="fade-right">
              9
            </p>
            <div className="text-left" data-aos="fade-left">
              <p>Juli</p>
              <p>2023</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-amber-500 relative z-10" data-aos="fade-right">
          <Text className="text-2xl ">Akad Nikah</Text>
          <div className="mt-4 text-lg">
            <p>08.00 WIB</p>
            </div>
        </div>
        <div className="mt-8 text-center text-amber-500 relative z-10" data-aos="fade-left">
          <Text className="text-2xl ">Resepsi</Text>
          <div className="mt-4 text-lg">
            <p>10.00 WIB</p>
            </div>
        </div>
      </div>

      <Shape1
        className="absolute top-[108px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill="#991b1b"
      />
      <Shape1
        className="absolute bottom-[109px] left-[-105px] rotate-180 z-0"
        height="300"
        fill="#991b1b"
      />
    </section>
  );
};

export default Section4;
