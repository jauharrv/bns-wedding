import React, { useEffect, useState } from 'react';
import Shape1 from './Shape1';
import Text from './Text';

const Section10 = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [is_attend, setIsAttended] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [messageList, setMessageList] = useState([]);

  const fetchMessage = async () => {
    const response = await fetch('/api/get-message', {
      method: 'GET',
    });

    const json = await response.json();

    setMessageList(json?.response?.data || []);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!submitting) {
      setSubmitting(true);
      const data = { name, message, is_attend };

      await fetch('/api/send-message', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      await fetchMessage();
      setSuccess(true);
      setSubmitting(false);
      setName('');
      setMessage('');
    }
  };

  const disabled = !name.trim() || !message.trim() || is_attend === null;

  useEffect(() => {
    fetchMessage();
  }, []);

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 5000);
    }
  }, [success]);

  return (
    <section
      className="bg-red-800 px-6 py-8 text-amber-500 relative overflow-hidden z-20 "
      id="ucapan"
    >
      <div className="text-center" data-aos="fade-down">
        <Text className="text-2xl ">Kartu Ucapan</Text>
      </div>
      <div className="text-center mt-8 relative z-10" data-aos="fade-up">
        <div className="bg-white rounded-lg p-4">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col text-left text-xs">
              <label htmlFor="name">Nama</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="text-xs rounded md appearance-none border border-[#f59e0b] mt-2"
              />
            </div>
            <div className="flex flex-col text-left text-xs mt-4">
              <label htmlFor="name">Pesan Singkat</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                className="rounded text-xs md appearance-none border border-[#f59e0b] mt-2"
              />
            </div>

            <div className="text-left mt-4">
              <span htmlFor="is_attend" className="text-xs text-left mt-4">
                Kehadiran
              </span>

              <div className="flex items-center space-x-4">
                <div className="flex text-left items-center text-xs mt-2 space-x-2">
                  <input
                    onChange={(e) => setIsAttended(e.target.checked)}
                    type="radio"
                    name="is_attend"
                    id="is_attend_1"
                    className="rounded md appearance-none border border-[#f59e0b] "
                  />
                  <label htmlFor="is_attend_1">Hadir</label>
                </div>

                <div className="flex text-left items-center text-xs mt-2 space-x-2">
                  <input
                    onChange={(e) => setIsAttended(!e.target.checked)}
                    type="radio"
                    name="is_attend"
                    id="is_attend_2"
                    className="rounded md appearance-none border border-[#f59e0b]"
                  />
                  <label htmlFor="is_attend_2">Tidak Hadir</label>
                </div>
              </div>
            </div>

            <div className="px-12 mt-4 flex flex-col justify-center relative z-10">
              <button
                disabled={disabled || submitting}
                type="submit"
                className={
                  'bg-[#b692ca] rounded-full text-sm px-4 py-2 text-white mx-auto mt-4 hover:scale-95 duration-100 ' +
                  (disabled ? 'grayscale opacity-90' : '')
                }
              >
                {submitting ? 'Sedang Mengirim' : 'Kirim Ucapan'}
              </button>
            </div>

            {success && (
              <div className="mt-4 text-sm text-green-600">
                <p>Berhasil Kirim Ucapan !!</p>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="text-center mt-12 relative z-10 " data-aos="fade-down">
        <Text className="text-2xl ">Ucapan Terbaru</Text>
      </div>

      <div
        className="px-4 bg-[#cdb4db] mt-6 rounded-lg max-h-[400px] overflow-y-scroll relative z-10 scrollbar-none"
        data-aos="fade-up"
      >
        {messageList.map((msg, index) => (
          <div className="bg-white p-4 rounded-lg my-4" key={String(index)}>
            <div className="flex space-x-2">
              <div className="h-10 w-10 rounded-full bg-[#f59e0b] flex items-center justify-center">
                <Text className="text-xs font-bold">{msg.name?.charAt(0)?.toUpperCase()}</Text>
              </div>

              <div className="flex-1 text-xs text-black">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold mb-2 flex-1">{msg.name}</h4>
                  {msg.is_attend ? (
                    <div className="text-xs px-2 py-1 bg-green-500 rounded-full">
                      <span>Hadir</span>
                    </div>
                  ) : (
                    <div className="text-xs px-2 py-1 bg-red-500 rounded-full">
                      <span>Tidak Hadir</span>
                    </div>
                  )}
                </div>
                <p>{msg.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <Shape1
        className="absolute top-[108px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill="#e8dbf1"
      />
      <Shape1
        className="absolute bottom-[109px] left-[-105px] rotate-180 z-0"
        height="300"
        fill="#e8dbf1"
      /> */}
    </section>
  );
};

export default Section10;
