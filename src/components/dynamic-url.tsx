"use client";
import React, { useState } from "react";
import CustomButton from "./ui/custom-buttom";
import { useRouter } from "next/navigation";
import { getCustomShortenUrl, RedirectUrl } from "@/app/actions";

const DynamicUrl = () => {
  const router = useRouter();

  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
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
          const baseUrl = "https://Inshorten.com/";
          const newShortUrl = `${baseUrl}${customWord || response.data.code}`;
          setShortUrl(newShortUrl);
          setOriginalUrl(inputUrl);
          setErrorMessage("");
          setLoading(false);
        } else {
          setLoading(false);
          setErrorMessage("Used different word.");
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

  const handleRedirect = async () => {
    if (shortUrl) {
      const code = shortUrl.split("/").pop() as string;

      try {
        const response = await RedirectUrl(code);

        if (response?.ok === true && response.url) {
          window.open(response.url, "_blank");
        } else {
          window.location.href = "/not-found";
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("An error occurred while redirecting.");
      }
    } else {
      setErrorMessage("Please generate a short URL first.");
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
    } else {
      setErrorMessage("only text, number and (-,_) used");
    }
  };
  return (
    <>
      <div className="flex flex-col w-full my-24 sm:max-w-[1100px] mx-auto justify-center border border-gray-500 rounded-md bg-white px-3 sm:px-6 py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[30px] sm:text-[40px] text-center font-bold ">
            Dynamic URL Shortener
          </div>
          <div className="text-[15px] sm:text-[16px] text-center font-normal text-gray-500">
            Create short & memorable links in seconds.
          </div>

          <div className="flex flex-col md:flex-row w-full mt-[80px] gap-3 justify-center">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Enter url:</label>
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Enter link here..."
                className="text-[15px] px-2 border-[1px] border-[#000] h-[50px] md:w-[320px] bg-white rounded-md outline-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Enter custom word:
              </label>

              <input
                type="text"
                value={customWord}
                onChange={handleChange}
                placeholder="Enter custom word..."
                className="text-[15px] px-2 border-[1px] border-[#000] h-[50px] md:w-[200px] bg-white rounded-md outline-black"
              />
            </div>

            <CustomButton
              label={loading ? "Loading..." : "Shorten URL"}
              className={`bg-black px-2 text-[16px] h-[50px] w-[140px] flex sm:self-end text-nowrap justify-center items-center  ${
                loading ? "opacity-50 bg-black" : ""
              }`}
              onClick={handleCustomUrl}
              isDisabled={loading}
            />
          </div>
          {errorMessage && (
            <div className="text-red-600 mt-4">{errorMessage}</div>
          )}
          {shortUrl && (
            <div className="flex flex-col sm:flex-row text-[16px] text-gray-600 mt-4 items-center">
              Shortened URL:
              <a
                onClick={handleRedirect}
                className="text-blue-600 underline mx-2 cursor-pointer"
                target="_blank"
              >
                {shortUrl}
              </a>
            </div>
          )}

          <div className="flex flex-wrap justify-center text-[14px] sm:text-[15px] text-gray-600 mt-12 sm:gap-1 whitespace-nowrap">
            By clicking Dynamic QR code, you agree to our
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

export default DynamicUrl;
