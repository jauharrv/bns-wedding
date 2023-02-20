/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Section2 = () => {
  return (
    <section
      className="text-center text-[#f59e0b] relative z-10 p-6"
      style={{
        // backgroundImage: `url(/images/bg1.png)`,
        // backgroundSize: '220%',
        // backgroundRepeat: 'round',
        // backgroundClip: 'border-box',
        // backgroundClip: 'border-box',
        backgroundColor: '#991b1b',
      }}
    >
      <div data-aos="zoom-in-up">
        {/*< img src="/images/bismillah.png" alt="Bismillah" className="h-12 mx-auto object-cover" /> */}
        <p style={{ fontFamily: 'B Davat' }} className=" mt-4 text-2xl">
          ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم
        </p>
        <p style={{ fontFamily: 'B Davat' }} className="mt-4 text-lg">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا
          وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ
          يَتَفَكَّرُونَ
        </p>
        <p className="mt-4 text-sm font-medium">
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari
          jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
          diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
        </p>
        <p className="font-semibold text-sm mt-2"> = QS. Ar-Rum 21 = </p>
      </div>
    </section>
  );
};

export default Section2;
