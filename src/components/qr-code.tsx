"use client";
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { RiNumber1, RiNumber2 } from "react-icons/ri";
import CustomButton from "./ui/custom-buttom";
import { useRouter } from "next/navigation";
import { getShortenUrl } from "@/app/actions";
import Spinner from "./loader";
interface InputData {
  data: string;
}
const QrCode = () => {
  const router = useRouter();

  const [inputData, setInputData] = useState<InputData>({
    data: "",
  });
  const [shortUrl, setShortUrl] = useState("");
  const [size, setSize] = useState(220);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerateQRCode = async () => {
    if (inputData.data.trim()) {
      setLoading(true);
      try {
        const response = await getShortenUrl(inputData.data);

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
        setErrorMessage("An error occurred while convert QR Code.");
      }
    } else {
      setLoading(false);
      setErrorMessage("Enter the Data");
    }
  };

  const handleDownloadQRCode = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx?.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "qr-code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    img.src = url;
  };

  const handleTerm = () => {
    router.push("/terms-conditions");
  };

  const handlePrivacy = () => {
    router.push("/privacy-policy");
  };

  return (
    <div className="flex flex-col w-full sm:max-w-[1100px] mx-auto items-center justify-center border border-gray-500 rounded-md bg-white py-8 px-5 sm:px-10">
      <h1 className="text-[28px] sm:text-[32px] text-center font-bold">
        QR Code generator
      </h1>
      <h4 className="flex text-[15px] sm:text-[16px] max-w-[768px] text-center font-normal text-gray-500">
        Creating QR codes should be quick, easy, and straightforward. Our tool
        allows you to generate QR code for your business or personal needs.
      </h4>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex w-full my-5 justify-center">
          <div className="flex flex-col px-5 py-5 w-full max-w-[400px] gap-12 items-center">
            <div className="flex flex-col w-full gap-5">
              <div className="flex items-center gap-2">
                <RiNumber1 className="bg-black text-white rounded-full text-[25px] sm:text-[30px] font-extrabold p-1 sm:p-2" />
                <div className="font-medium">Enter QR URL</div>
              </div>
              <input
                type="text"
                name="data"
                value={inputData.data}
                onChange={handleInputChange}
                placeholder="Enter URL, Text, or Mobile number here..."
                className="px-2 border border-gray-300 h-[40px] w-auto sm:w-full sm:max-w-[300px] bg-white text-[14px] outline-black"
              />
            </div>
            <div className="flex flex-col w-full gap-5">
              <div className="flex items-center gap-2">
                <RiNumber2 className="bg-black text-white rounded-full text-[25px] sm:text-[30px] font-extrabold p-1 sm:p-2" />
                <div className=" font-medium">
                  Generate QR Code and Download
                </div>
              </div>
              <div className="flex gap-5">
                <CustomButton
                  label={loading ? <Spinner /> : "QR Code"}
                  className={`bg-black px-2 w-[140px] sm:w-[160px] text-[14px] sm:text-[16px]`}
                  onClick={handleGenerateQRCode}
                  isDisabled={loading}
                />
                <CustomButton
                  label={"Download"}
                  className="bg-black px-2 w-[140px] sm:w-[160px] text-[14px] sm:text-[16px]"
                  onClick={handleDownloadQRCode}
                />
              </div>
            </div>
          </div>
        </div>
        {/* QR Code Display */}
        {shortUrl && (
          <div className="flex justify-center w-full my-5">
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 sm:p-5 rounded-md">
              <QRCodeSVG
                id="qr-code"
                value={shortUrl}
                size={size}
                level="Q"
                includeMargin={true}
                className="bg-white text-black"
              />
            </div>
          </div>
        )}
      </div>
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}
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

export default QrCode;
