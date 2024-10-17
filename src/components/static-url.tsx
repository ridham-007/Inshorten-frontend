"use client";
import React, { useState } from "react";
import CustomButton from "./ui/custom-buttom";
import { useRouter } from "next/navigation";
import { getShortenUrl } from "@/app/actions";
import Link from "next/link";
import Spinner from "./loader";

const StaticUrl = () => {
  const router = useRouter();

  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShortUrl = async () => {
    if (inputUrl) {
      setLoading(true);
      try {
        const response = await getShortenUrl(inputUrl);
        if (response?.success === true) {
          const newShortUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${response?.data?.code}`;
          setShortUrl(newShortUrl);
          setErrorMessage("");
          setLoading(false);
        } else {
          setLoading(false);
          setErrorMessage(response?.message);
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("An error occurred while shortening the URL.");
      }
    } else {
      setLoading(false);
      setErrorMessage("Please enter a URL.");
    }
  };

  const handleCopyUrl = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl).then(() => {
        setCopied(true);
      });
    }
  };

  const handleTerm = () => {
    router.push("/terms-conditions");
  };
  const handlePrivacy = () => {
    router.push("/privacy-policy");
  };

  return (
    <div className="flex flex-col w-full sm:max-w-[1100px] mx-auto justify-center border border-gray-500 rounded-md bg-white py-8 px-5 sm:px-10">
      <div className="text-[28px] sm:text-[32px] text-center font-bold">
        Static URL Shortener
      </div>
      <div className="text-[15px] sm:text-[16px] text-center font-normal text-gray-500">
        Create short & memorable links in seconds.
      </div>

      <div className="flex flex-col md:flex-row w-full my-10 gap-3 justify-center items-center">
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Enter link here..."
          className="px-2 border-[1px] border-[#000] h-[50px] w-full sm:w-[400px] bg-white rounded-md outline-black"
        />
        <CustomButton
          label={loading ? <Spinner /> : "Shorten URL"}
          className={`bg-black px-2 text-[16px] h-[45px] w-[140px]`}
          onClick={handleShortUrl}
          isDisabled={loading}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-center">
        {shortUrl && (
          <div className="flex flex-col sm:flex-row text-[16px] md:my-4 text-gray-600 items-center text-nowrap">
            Shortened URL:
            <Link
              className="text-blue-600 underline mx-2 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href={shortUrl}
            >
              {shortUrl}
            </Link>
          </div>
        )}
        {shortUrl && (
          <div
            className="flex items-center gap-1 text-[15px]   bg-black text-white py-1 px-3 rounded-md cursor-pointer text-nowrap"
            title={copied ? "copied" : "copy url"}
            onClick={handleCopyUrl}
          >
            {copied ? "Copied!" : "Copy url"}
          </div>
        )}
      </div>

      {errorMessage && <div className="text-red-600 my-4">{errorMessage}</div>}
      <div className="flex flex-wrap justify-center text-[14px] sm:text-[15px] text-gray-600 sm:gap-1 whitespace-nowrap mt-10">
        By clicking Static URL Shorten, you agree to our
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
  );
};

export default StaticUrl;
