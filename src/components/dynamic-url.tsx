"use client";
import React, { useState } from "react";
import CustomButton from "./ui/custom-buttom";
import { useRouter } from "next/navigation";
import { getCustomShortenUrl } from "@/app/actions";
import Link from "next/link";
import Spinner from "./loader";

const DynamicUrl = () => {
  const router = useRouter();

  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [customWord, setCustomWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCustomUrl = async () => {
    if (inputUrl) {
      setLoading(true);

      try {
        const response = await getCustomShortenUrl({
          url: inputUrl,
          code: customWord,
        });

        if (response?.success === true) {
          const newShortUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${response?.data?.code}`;
          setShortUrl(newShortUrl);
          setErrorMessage("");
          setLoading(false);
        } else {
          setLoading(false);
          setErrorMessage(response?.message || "Use a different word.");
        }
      } catch (error) {
        setLoading(false);
        console.error("Error:", error);
        setErrorMessage("An error occurred while shortening the URL.");
      }
    } else {
      setLoading(false);
      setErrorMessage("Please enter a URL.");
    }
  };

  const handleTerm = () => {
    router.push("/terms-conditions");
  };

  const handlePrivacy = () => {
    router.push("/privacy-policy");
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9_-]*$/;
    if (regex.test(value)) {
      setCustomWord(value);
      setErrorMessage("");
    } else {
      setErrorMessage("Only alphanumeric characters and (-,_) are allowed.");
    }
  };

  return (
    <div className="flex flex-col w-full sm:max-w-[1100px] mx-auto justify-center border border-gray-500 rounded-md bg-white py-8 px-5 sm:px-10">
      <div className="text-[28px] sm:text-[32px] text-center font-bold">
        Dynamic URL Shortener
      </div>
      <div className="text-[15px] sm:text-[16px] text-center font-normal text-gray-500">
        Create short & memorable links in seconds.
      </div>

      <div className="flex flex-col md:flex-row w-full my-10 gap-3 justify-center items-center">
        <div className="flex flex-col gap-2 w-full md:max-w-[40%]">
          <label className="font-semibold text-gray-700">Enter url:</label>
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Enter link here..."
            className="text-[15px] px-2 border-[1px] border-[#000] h-[50px] w-full bg-white rounded-md outline-black"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:max-w-[30%]">
          <label className="font-semibold text-gray-700">
            Enter custom word:
          </label>

          <input
            type="text"
            value={customWord}
            onChange={handleChange}
            placeholder="Enter custom word..."
            className="text-[15px] px-2 border-[1px] border-[#000] h-[50px] w-full bg-white rounded-md outline-black"
          />
        </div>

        <CustomButton
          label={loading ? <Spinner /> : "Shorten URL"}
          className={`bg-black px-2 text-[16px] h-[50px] w-[140px] md:max-w-[15%] flex sm:self-end text-nowrap justify-center items-center`}
          onClick={handleCustomUrl}
          isDisabled={loading}
        />
      </div>

      {shortUrl && (
        <div className="flex flex-col sm:flex-row text-[16px] my-4 text-gray-600 items-center ">
          Shortened URL:{" "}
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
      {errorMessage && <div className="text-red-600 ">{errorMessage}</div>}

      <div className="flex flex-wrap justify-center text-[14px] sm:text-[15px] text-gray-600 sm:gap-1 whitespace-nowrap">
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

export default DynamicUrl;
