/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import useInterval from '~hooks/useInterval';
import Shape1 from './Shape1';

const Time = ({ count, unit }) => {
  return (
    <div className="text-center mt-10 text-[#b692ca]">
      <p className="font-semibold text-2xl text-purple-900">{count}</p>
      <p className="text-sm">{unit}</p>
    </div>
  );
};

const Section5 = () => {
  const { dd, hh, mm, ss, isTimeOut } = useInterval('2023-02-05 10:00:00');

  // <iframe
  //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.732409061164!2d102.00198101475401!3d-1.3368050990250053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a88f61b89557e6c!2zMcKwMjAnMTIuNSJTIDEwMsKwMDAnMTUuMCJF!5e0!3m2!1sid!2sid!4v1672962876409!5m2!1sid!2sid"
  //   width="600"
  //   height="450"
  //   style="border:0;"
  //   allowfullscreen=""
  //   loading="lazy"
  //   referrerpolicy="no-referrer-when-downgrade"
  // ></iframe>;

  // const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.7506074122684!2d110.870065214777!3d-7.602096894518276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a17d9455ee427%3A0x3a4016dbc86591b5!2sGedung%20Sri%20Rahayu%20Bekonang!5e0!3m2!1sid!2sid!4v1664023868861!5m2!1sid!2sid`;

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.732409061164!2d102.00198101475401!3d-1.3368050990250053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a88f61b89557e6c!2zMcKwMjAnMTIuNSJTIDEwMsKwMDAnMTUuMCJF!5e0!3m2!1sid!2sid!4v1672962876409!5m2!1sid!2sid`;

  // const mapSrcRedirect = `https://www.google.com/maps/place/Sri+Rahayu+Wedding+and+Meeting+Hall/@-7.6020916,110.8700599,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a17d9455ee427:0x3a4016dbc86591b5!8m2!3d-7.6020969!4d110.8722539?hl=en`;

  const mapSrcRedirect = `https://www.google.com/maps/place/1%C2%B020'12.5%22S+102%C2%B000'15.0%22E/@-1.3368051,102.001981,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x9a88f61b89557e6c!8m2!3d-1.3368051!4d102.0041697?hl=id`;

  const calendarSrc = `https://calendar.google.com/event?action=TEMPLATE&tmeid=MGNhcGZmZHRjNHFrYnRsbDZ0cjdwNW1hb2MgZXJsYW5nZ2FhbmdnYTA5MkBt&tmsrc=erlanggaangga092%40gmail.com`;
  return (
    <section className="bg-purple-50 px-6 text-purple-900 relative overflow-hidden" id="peta">
      <div className="text-center mt-16" data-aos="fade-right">
        <p className="text-sm font-semibold">Kediaman Mempelai Wanita</p>
        <p className="text-sm mt-2">
          Jl. Lawu, Komplek Pasar Unit 8, Ds. Suka maju, Kec. Rimbo Ulu, Kab. Tebo
        </p>
      </div>

      <div className="px-12 mt-4 flex flex-col justify-center relative z-10" data-aos="fade-down">
        <div className="border-2 border-[#b692ca] h-64 rounded-xl flex items-center justify-center text-sm overflow-hidden p-3">
          <div className="rounded-xl w-full h-full">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <button
          data-aos="fade-left"
          onClick={() => {
            window?.open(mapSrcRedirect, '_blank');
          }}
          className="bg-[#b692ca] text-sm rounded-full px-4 py-2 text-white mx-auto mt-4 hover:scale-95  "
        >
          Arahkan Maps
        </button>
      </div>

      <div className="relative z-10" data-aos="fade-down">
        <h3 className="text-center font-semibold text-2xl text-purple-900 mt-16">
          05 Februari 2023
        </h3>
      </div>

      <div className="flex w-full justify-center mt-6 relative z-10" data-aos="zoom-in">
        <img src="/images/save-date.png" alt="Save The Date" className="h-28" />
      </div>

      {isTimeOut ? (
        <div className="flex items-center justify-center space-x-8 -mt-4" data-aos="fade-up">
          <Time count={'00'} unit="Hari" />
          <Time count={'00'} unit="Jam" />
          <Time count={'00'} unit="Menit" />
          <Time count={'00'} unit="Detik" />
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-8 -mt-4" data-aos="fade-up">
          <Time count={dd} unit="Hari" />
          <Time count={hh} unit="Jam" />
          <Time count={mm} unit="Menit" />
          <Time count={ss} unit="Detik" />
        </div>
      )}

      <div className="px-12 mt-4 flex flex-col justify-center relative z-10" data-aos="fade-up">
        <button
          onClick={() => {
            window?.open(calendarSrc, '_blank');
          }}
          className="bg-[#b692ca] rounded-full text-sm px-4 py-2 text-white mx-auto mt-4 hover:scale-95  "
        >
          Tambah ke Kalender
        </button>
      </div>

      <Shape1
        className="absolute top-[108px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill="#e8dbf1"
      />
      <Shape1
        className="absolute bottom-[109px] left-[-105px] rotate-180 z-[0]"
        height="300"
        fill="#e8dbf1"
      />
    </section>
  );
};

export default Section5;
