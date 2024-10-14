"use client";
import React, { useState } from "react";
import CustomButton from "./ui/custom-buttom";
import { useRouter } from "next/navigation";
import { getShortenUrl } from "@/app/actions";

const StaticUrl = () => {
  const router = useRouter();

  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShortUrl = async () => {
    if (inputUrl) {
      setLoading(true);
      try {
        const response = await getShortenUrl(inputUrl);
        if (response?.success === true) {
          const baseUrl = "https://Inshorten.com/";
          const newShortUrl = `${baseUrl}${response?.data?.code}`;
          setShortUrl(newShortUrl);
          setOriginalUrl(inputUrl);
          setErrorMessage("");
          setLoading(false);
        } else {
          setLoading(false);
          setErrorMessage("Failed to shorten URL");
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

  const handleRedirect = () => {
    if (originalUrl) {
      window.open(originalUrl, "_blank");
    }
  };

  const handleTerm = () => {
    router.push("/terms-conditions");
  };
  const handlePrivacy = () => {
    router.push("/privacy-policy");
  };

  return (
    <>
      <div className="flex flex-col w-full sm:max-w-[1100px] mx-auto justify-center my-24 border border-gray-500 rounded-md bg-white gap-5 py-8 px-3 sm:px-6">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[30px] sm:text-[40px] text-center font-bold">
            Static URL Shortener
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
              label={loading ? "Loading..." : "Shorten URL"}
              className={`bg-black px-2 text-[14px] sm:text-[16px] w-[140px] ${
                loading ? "opacity-50 bg-black" : ""
              }`}
              onClick={handleShortUrl}
              isDisabled={loading}
            />
          </div>

          {shortUrl && (
            <div className="text-[16px] text-gray-600 mt-4 flex items-center ">
              Shortened URL:{" "}
              <a
                className="text-blue-600 underline mx-2 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleRedirect}
              >
                {shortUrl}
              </a>
            </div>
          )}
          {errorMessage && (
            <div className="text-red-600 mt-4">{errorMessage}</div>
          )}
          <div className="flex flex-wrap justify-center text-[14px] sm:text-[15px] text-gray-600 mt-12 sm:gap-1 whitespace-nowrap">
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
      </div>
    </>
  );
};

export default StaticUrl;
