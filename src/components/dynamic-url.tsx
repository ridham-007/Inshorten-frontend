'use client';
import React, { useState } from 'react';
import CustomButton from './ui/custom-buttom';
import { useRouter } from 'next/navigation';

const DynamicUrl = () => {
  const router = useRouter();

  const [inputUrl, setInputUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [customWord, setCustomWord] = useState('');

  const handleShortenUrl = () => {
    if (inputUrl) {
      const baseUrl = 'https://';
      const newShortUrl = `${baseUrl}${customWord || 'short.url'}`;
      setShortUrl(newShortUrl);
      setOriginalUrl(inputUrl);
    }
  };

  const handleRedirect = () => {
    if (originalUrl) {
      window.open(originalUrl, '_blank');
    }
  };

  const handleTerm = () => {
    router.push('/terms-conditions');
  };

  const handlePrivacy = () => {
    router.push('/privacy-policy');
  };

  return (
    <>
      <div className="flex flex-col w-full  gap-20 my-24">
        <div className="flex flex-col w-full sm:max-w-[1100px] mx-auto justify-center border border-gray-500 rounded-md bg-white px-3 sm:px-6 py-8">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[30px] sm:text-[40px] text-center font-bold font-serif">
              Dynamic URL Shortener
            </div>
            <div className="text-[15px] sm:text-[18px] text-center font-normal text-gray-500">
              Create short & memorable links in seconds.
            </div>

            <div className="flex flex-col md:flex-row w-full mt-[80px] gap-3 justify-center">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700">
                  Enter url:
                </label>
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="Enter link here..."
                  className="text-[15px] px-2 border-[1px] border-[#000] h-[50px] md:w-[350px] bg-white rounded-md outline-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700">
                  Enter custom word:
                </label>

                <input
                  type="text"
                  value={customWord}
                  onChange={(e) => setCustomWord(e.target.value)}
                  placeholder="Enter custom word... "
                  className="text-[15px] px-2 border-[1px] border-[#000] h-[50px] md:w-[200px] bg-white rounded-md outline-black"
                />
              </div>

              <CustomButton
                label={'Shorten URL'}
                className="bg-black px-2 text-[14px] sm:text-[16px] h-[45px] w-[140px] flex self-end"
                onClick={handleShortenUrl}
              />
            </div>
            {shortUrl && (
              <div className="text-[14px] sm:text-[16px] text-gray-600 mt-4 flex items-center">
                Shortened URL:
                <a
                  href="#"
                  onClick={handleRedirect}
                  className="text-blue-600 underline mx-2"
                  target="_blank"
                >
                  {shortUrl}
                </a>
              </div>
            )}
            <div className="flex flex-wrap justify-center text-[14px] sm:text-[15px] text-gray-600 mt-12 sm:gap-1 whitespace-nowrap">
              By clicking Static QR Code, you agree to our
              <span
                className="text-blue-500 hover:underline hover:cursor-pointer ml-1 mr-1"
                onClick={handleTerm}
              >
                Terms of Use
              </span>
              and
              <span
                className="text-blue-500 hover:underline hover:cursor-pointer ml-1"
                onClick={handlePrivacy}
              >
                Privacy Policy.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[1100px] mx-auto rounded-md bg-[#196091] text-white p-10 gap-8 ">
          <div className="flex flex-col gap-2">
            <div className="text-[22px] sm:text-[25px] font-bold font-serif">
              A fast and simple URL shortener
            </div>
            <div className="text-[14px] sm:text-[15px] w-full sm:max-w-[700px]">
              Long links in social networks look awful, additionally, the system
              can "cut off" and transmit to the user in a half-finished form. A
              short link like Shortner url looks very nice, very easy for
              copying, and even easuliar to remember. Statistics of each click
              you will also receive - regardless of where you place the link -
              in Facebook, Telegram or Twitter. Wrap in your short link.
            </div>
          </div>
          <div className="flex justify-center items-center rounded-sm w-[150px] border border-white p-2">
            Shortner Link
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicUrl;
