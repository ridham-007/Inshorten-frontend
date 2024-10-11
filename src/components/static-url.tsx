'use client';
import React, { useState } from 'react';
import CustomButton from './ui/custom-buttom';
import { useRouter } from 'next/navigation';

const StaticUrl = () => {
  const router = useRouter();

  const [inputUrl, setInputUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');

  const handleShortenUrl = () => {
    if (inputUrl) {
      const randomString = Math.random().toString(36).substring(2, 8);
      const baseUrl = 'https://short.url/';
      const newShortUrl = `${baseUrl}${randomString}`;
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
      <div className="flex flex-col w-full sm:max-w-[1100px] mx-auto justify-center gap-20  my-24">
        <div className="flex flex-col border border-gray-500 rounded-md bg-white gap-5 py-8 px-3 sm:px-6">
          <div className="flex flex-col justify-center items-center  ">
            <div className="text-[30px] sm:text-[40px] text-center font-bold font-serif">
              Static URL Shortner
            </div>
            <div className="text-[15px] sm:text-[17px] text-center font-normal text-gray-500">
              Create short & memorable links in seconds.
            </div>

            <div className="flex flex-col sm:flex-row w-full mt-[80px] gap-3 justify-center">
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Enter link here..."
                className="px-2 border-[1px] border-[#000] h-[50px] sm:w-[400px] bg-white rounded-md outline-black"
              />
              <CustomButton
                label={'Shorten URL'}
                className="bg-black px-2 text-[14px] sm:text-[16px] w-[140px]"
                onClick={handleShortenUrl}
              />
            </div>
            {shortUrl && (
              <div className="text-[16px] text-gray-600 mt-4 flex items-center">
                Shortened URL:{' '}
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
              By clicking Static url Shorten, you agree to our
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
        <div className="flex flex-col w-full max-w-[1100px] mx-auto rounded-md bg-[#196091] text-white p-10 gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-[22px] sm:text-[25px] font-bold font-serif">
              A fast and simple URL shortener
            </div>
            <div className="text-[14px] sm:text-[15px] w-full sm:max-w-[700px]">
              ShortURL allows to shorten long links from Instagram, Facebook,
              YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.
              Enter long URL and click on Shorten URL button. The next will
              contain the shortened URL that will be click and redirect the page.
            </div>
          </div>
          <div className="flex justify-center items-center rounded-sm w-[150px] border border-white p-2">
            InShorten
          </div>
        </div>
      </div>
    </>
  );
};
export default StaticUrl;
