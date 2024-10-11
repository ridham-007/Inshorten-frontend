"use client";
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { RiNumber1, RiNumber2 } from "react-icons/ri";
import CustomButton from "./ui/custom-buttom";
import { useRouter } from "next/navigation";

const QrCode = () => {
  const router = useRouter();

  const [inputData, setInputData] = useState({
    data: "",
  });
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const [color, setColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [size, setSize] = useState(220);

  const handleInputChange = (e: any) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerateQRCode = () => {
    if (inputData.data.trim()) {
      setQrCodeGenerated(true);
    } else {
      setQrCodeGenerated(false);
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
    <div className="flex flex-col w-full sm:max-w-[1100px] mx-auto justify-center gap-20  my-24">
      <div className="flex flex-col w-full sm:max-w-[1100px] mx-auto border border-gray-500 rounded-md bg-white gap-5 py-8 px-3 sm:px-6">
        <div className="flex flex-col justify-center">
          <div className="text-[32px] sm:text-[40px] text-center font-bold font-serif">
            Static QR Code
          </div>
          <div className="flex text-[13px] self-center w-full max-w-[950px] justify-center sm:text-[15px] text-center font-normal text-gray-500">
            Creating QR codes should be quick, easy, and straightforward. Our
            tool allows you to generate custom QR codes for your business or
            personal needs.
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-col w-full md:max-w-[50%] justify-center items-center md:items-end">
            <div className="flex flex-col mt-[80px] gap-14 justify-center">
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-2">
                  <RiNumber1 className="bg-black text-white rounded-full text-[25px] sm:text-[30px] font-extrabold p-1 sm:p-2" />
                  <div className="font-medium">Enter QR Data</div>
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="data"
                    value={inputData.data}
                    onChange={handleInputChange}
                    placeholder="Enter URL, Text, or Mobile number here..."
                    className="px-2 border border-gray-300 h-[40px] w-auto sm:w-full sm:max-w-[300px] bg-white text-[14px] outline-black"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-2">
                  <RiNumber2 className="bg-black text-white rounded-full text-[25px] sm:text-[30px] font-extrabold p-1 sm:p-2" />
                  <div className=" font-medium">
                    Generate QR Code and Download
                  </div>
                </div>
                <div className="flex gap-5">
                  <CustomButton
                    label={"QR Code"}
                    className="bg-black px-2 w-[140px] sm:w-[160px] text-[14px] sm:text-[16px]"
                    onClick={handleGenerateQRCode}
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
          <div className="flex justify-center w-full md:max-w-[50%]">
            {qrCodeGenerated && inputData.data.trim() && (
              <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 sm:p-5 rounded-md">
                <QRCodeSVG
                  id="qr-code"
                  value={inputData.data}
                  size={size}
                  bgColor={backgroundColor}
                  fgColor={color}
                  level="Q"
                  includeMargin={true}
                />
              </div>
            )}
          </div>
        </div>
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

      <div className="flex flex-col w-full max-w-[1100px] mx-auto rounded-md bg-[#196091] text-white p-10 gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-[22px] sm:text-[25px] font-bold font-serif">
            Create a free QR Code
          </div>
          <div className="text-[14px] sm:text-[15px] w-full sm:max-w-[700px]">
            QR Code Generator and Shortner url to create one Connections
            Platform Nurture seamless audience connections through branded
            links, customizable QR codes, and Landing Pages We make every link
            and scan an accelerant for connections.
          </div>
        </div>
        <div className="flex justify-center items-center rounded-sm w-[150px] border border-white p-2">
          Inshorten
        </div>
      </div>
    </div>
  );
};

export default QrCode;
