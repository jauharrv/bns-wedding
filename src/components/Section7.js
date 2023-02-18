/* eslint-disable @next/next/no-img-element */
import Text from './Text';

const Section7 = () => {
  return (
    <section className="bg-purple-50 px-6 py-8 text-purple-900 relative overflow-hidden z-20 ">
      <div className="text-center" data-aos="fade-down">
        <Text className="text-2xl">Amplop Digital</Text>
      </div>
      <div className="text-center mt-8 relative z-10">
        <div className="flex items-center space-x-2">
          <div
            data-aos="fade-right"
            className="rounded-lg bg-[#cdb4db] p-4 text-sm flex-1 flex flex-col justify-between min-h-[250px]"
          >
            <div className="border-b-2 border-b-purple-800 pb-4 text-center">
              <img src="/images/bri-bank.png" alt="Bri Logo" className="h-4 object-cover mx-auto" />
            </div>

            <div className="py-7">
              <p className="font-semibold text-xs mt-2">a.n IRMA NUR ARIYANTI</p>
              <p>3395-01-059765-53-2</p>
            </div>

            <div className="flex flex-col justify-center relative z-10">
              <button
                onClick={async () => {
                  await navigator?.clipboard.writeText('339501059765532');
                  alert('Success Copy');
                }}
                className="bg-purple-600 rounded-full text-xs px-4 py-2 text-white mx-auto mt-4 hover:scale-95  "
              >
                Copy Rekening
              </button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-lg bg-[#cdb4db] p-4 text-sm flex-1 flex flex-col justify-between min-h-[250px]"
          >
            <div className="border-b-2 border-b-purple-800 pb-4 text-center">
              <img src="/images/dana.png" alt="Mandiri Logo" className="h-4 object-cover mx-auto" />
            </div>

            <div className="mt-2 ">
              {/* <img
                src="/images/qr-angga.jpeg"
                alt="Mandiri Logo"
                className="h-16 object-cover mx-auto"
              /> */}
              <p className="font-semibold text-xs mt-2">a.n IRMA NUR ARIYANTI</p>
              <p>+6282307660030</p>
            </div>

            <div className="flex flex-col justify-center relative z-10">
              <button
                onClick={async () => {
                  await navigator?.clipboard.writeText('+6282307660030');
                  alert('Success Copy');
                }}
                className="bg-purple-600 rounded-full text-xs px-4 py-2 text-white mx-auto mt-4 hover:scale-95  "
              >
                Copy E-Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
