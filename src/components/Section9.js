import React from 'react';
import Distance from '~icons/Distance';
import Tempreature from '~icons/Tempreature';
import WashHand from '~icons/WashHand';
import WearMask from '~icons/WearMask';
import Shape1 from './Shape1';
import Text from './Text';

const Section9 = () => {
  return (
    <section className="bg-purple-50 px-6 py-8 text-purple-900 relative overflow-hidden z-20 ">
      <div className="text-center" data-aos="fade-down">
        <Text className="text-2xl ">Informasi</Text>
      </div>
      <div className="text-center mt-8 relative z-10">
        <div className="text-xs" data-aos="fade-up">
          <p>Sebelumnya Mohon maaf kepada Bapak, Ibu, Saudara/i,</p>
          <p className="mt-4">
            Terkait dengan kondisi pandemi Covid-19 yang terjadi saat ini, tanpa mengurangi rasa
            hormat kami, mohon untuk melakukan prosedur kesehatan sesuai dengan protokol kesehatan
            yang berlaku
          </p>
        </div>

        <div className="grid grid-cols-2 mt-6">
          <div className="text-center text-xs flex justify-center flex-col mb-6" data-aos="zoom-in">
            <Distance />
            <p className="mt-2">Jaga Jarak</p>
          </div>
          <div className="text-center text-xs flex justify-center flex-col mb-6" data-aos="zoom-in">
            <WearMask />
            <p className="mt-2">Gunakan Masker</p>
          </div>
          <div className="text-center text-xs flex justify-center flex-col mb-6" data-aos="zoom-in">
            <WashHand />
            <p className="mt-2">Mencuci Tangan</p>
          </div>
          <div className="text-center text-xs flex justify-center flex-col mb-6" data-aos="zoom-in">
            <Tempreature />
            <p className="mt-2">Suhu Maksimal 37.2 C</p>
          </div>
        </div>
      </div>

      <Shape1
        className="absolute top-[108px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill="#e8dbf1"
      />
      <Shape1
        className="absolute bottom-[109px] left-[-105px] rotate-180 z-0"
        height="300"
        fill="#e8dbf1"
      />
    </section>
  );
};

export default Section9;
