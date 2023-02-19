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

  const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.641043219727!2d110.9192686!3d-7.827763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a2e3db45758db%3A0x42f869c9ea7e7cd3!2sGedung%20Giri%20Wahana!5e0!3m2!1sid!2sid!4v1676790181131!5m2!1sid!2sid'

  const mapSrcRedirect = 'https://www.google.com/maps/place/Gedung+Giri+Wahana/@-7.827763,110.9170799,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a2e3db45758db:0x42f869c9ea7e7cd3!8m2!3d-7.827763!4d110.9192686!16s%2Fg%2F11c20smz25';

  // const calendarSrc = `https://calendar.google.com/event?action=TEMPLATE&tmeid=MGNhcGZmZHRjNHFrYnRsbDZ0cjdwNW1hb2MgZXJsYW5nZ2FhbmdnYTA5MkBt&tmsrc=erlanggaangga092%40gmail.com`;
  
  return (
    <section className="bg-purple-50 px-6 text-purple-900 relative overflow-hidden" id="peta">
      <div className="text-center mt-16" data-aos="fade-right">
        <p className="text-sm font-semibold">Gedung Giri Wahana</p>
        <p className="text-sm mt-2">
          Jl. Jend. Sudirman No. 2, Donoharjo, Wuryorejo, Wonogiri
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
          9 Juli 2023
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

      { /*<div className="px-12 mt-4 flex flex-col justify-center relative z-10" data-aos="fade-up">
        <button
          onClick={() => {
            window?.open(calendarSrc, '_blank');
          }}
          className="bg-[#b692ca] rounded-full text-sm px-4 py-2 text-white mx-auto mt-4 hover:scale-95  "
        >
          Tambah ke Kalender
        </button>
        </div> */}

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
