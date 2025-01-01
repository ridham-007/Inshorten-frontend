"use client";
import { useRef } from "react";

export default function PrivacyPolicy({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  const sectionRefs: any = {
    "1": useRef(null),
    "2": useRef(null),
    "3": useRef(null),
    "4": useRef(null),
    "5": useRef(null),
    "6": useRef(null),
    "7": useRef(null),
    "8": useRef(null),
    "9": useRef(null),
    "10": useRef(null),
  };

  // Scroll to section
  const scrollToSection = (section: any) => {
    sectionRefs[section]?.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex w-full flex-col flex-wrap h-auto gap-2 bg-white px-5 md:px-10">
      <h1 className="flex w-full flex-col text-white text-xl lg:text-3xl font-semibold items-center px-8 py-4 md:py-6 lg:py-12 bg-[#000] my-5">
        Privacy Policy for Sarveshwar Foods Recipe
      </h1>
      <div>Last updated: 31 December 2024.</div>
      <h1 className="text-[16px]">SARVESHWAR FOODS LIMITED built the Sarveshwar Foods Recipe as a free app. This SERVICE is provided by SARVESHWAR FOODS LIMITED at no cost and is intended for use as is. The privacy policy for this app is given below.</h1>

      <h1 className="text-[24px] font-bold">TABLE OF CONTENTS</h1>
      <div className="cursor-pointer" onClick={() => scrollToSection("1")}>
        <h2 className="text-[18px] font-bold">
          1. WHAT INFORMATION DO WE COLLECT?
        </h2>
      </div>
      <div className="cursor-pointer" onClick={() => scrollToSection("2")}>
        <h2 className="text-[18px] font-bold">
          2. HOW DO WE PROCESS YOUR INFORMATION?
        </h2>
      </div>
      <div className="cursor-pointer" onClick={() => scrollToSection("3")}>
        <h2 className="text-[18px] font-bold">
          3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </h2>
      </div>
      <div className="cursor-pointer" onClick={() => scrollToSection("4")}>
        <h2 className="text-[18px] font-bold">
          4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </h2>
      </div>
      <div className="cursor-pointer" onClick={() => scrollToSection("5")}>
        <h2 className="text-[18px] font-bold">
          5. HOW LONG DO WE KEEP YOUR INFORMATION?
        </h2>
      </div>
      <div className="cursor-pointer" onClick={() => scrollToSection("6")}>
        <h2 className="text-[18px] font-bold">
          6. WHAT ARE YOUR PRIVACY RIGHTS?
        </h2>
      </div>
      <div className="cursor-pointer" onClick={() => scrollToSection("7")}>
        <h2 className="text-[18px] font-bold">
          7. DO WE MAKE UPDATES TO THIS NOTICE?
        </h2>
      </div>
      <div className="cursor-pointer" onClick={() => scrollToSection("8")}>
        <h2 className="text-[18px] font-bold">
          8. DO WE COLLECT INFORMATION FROM MINORS?
        </h2>
      </div>
      <div className="cursor-pointer" onClick={() => scrollToSection("9")}>
        <h2 className="text-[18px] font-bold">
          9. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </h2>
      </div>
      <div className="cursor-pointer" onClick={() => scrollToSection("10")}>
        <h2 className="text-[18px] font-bold">
          10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </h2>
      </div>

      <h1 className="font-semibold">SUMMARY OF KEY POINTS</h1>
      <p>
      This summary provides key points from our privacy notice. You can find out more details about any of these topics by clicking the link following each key point or by using the table of contents above.
      </p>
      <div className="text-[18px] lg:text-xl font-semibold">
        What personal information do we process?
      </div>
      <p>
        We may process personal information depending on your interaction with us and the Services.
      </p>
      <div className="text-[18px] lg:text-xl font-semibold">
        Do we process any sensitive personal information?
      </div>
      <p>No, we do not process sensitive personal information.</p>

      <div className="text-[18px] lg:text-xl font-semibold">
        How do we process your information?
      </div>
      <p>
        To provide, improve, and secure our Services, and to comply with legal obligations.
      </p>

      <div className="text-[18px] lg:text-xl font-semibold">
        In what situations and with which parties do we share personal
        information?
      </div>
      <p>
        We do not share information in specific situations and with specific
        third parties.
      </p>

      <div className="text-[18px] lg:text-xl font-semibold">
        What are your rights?
      </div>
      <p>
        You may have rights under privacy laws depending on your geographic location.
      </p>

      <div ref={sectionRefs["1"]} className="mt-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          1. WHAT INFORMATION DO WE COLLECT?
        </div>
        <p><strong>In Short:</strong> We collect personal information that you voluntarily provide and some information automatically.</p>
        <p><strong>Personal Information:</strong> Provided when you register, contact us, or participate in app activities.</p>
        <p><strong>Automatic Information:</strong> IP address, browser details, and device characteristics.</p>
        <p><strong>Sensitive Information:</strong> We do not collect sensitive personal data.</p>
        <br />
      </div>

      <div ref={sectionRefs["2"]} className="mt-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          2. HOW DO WE PROCESS YOUR INFORMATION?
        </div>
        <p><strong>In Short:</strong> We process information to operate, improve, and secure our services, and to comply with legal obligations.</p>
        <p>Processing activities may include communication, analytics, and fraud prevention.</p>
      </div>

      <div ref={sectionRefs["3"]} className="mt-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </div>
        <p>In Short: We don’t share information the third parties.</p>
      </div>

      <div ref={sectionRefs["4"]} className="mt-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </div>
        <p><strong>In Short:</strong> Yes, we may use cookies and similar technologies for analytics and app functionality.</p>
      </div>

      <div ref={sectionRefs["5"]} className="mt-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          5. HOW LONG DO WE KEEP YOUR INFORMATION?{" "}
        </div>
        <p>We keep your information only as long as necessary to fulfill purposes described in this notice or as required by law.</p>
      </div>

      <div ref={sectionRefs["6"]} className="mt-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          6. WHAT ARE YOUR PRIVACY RIGHTS?
        </div>
        <p>You may review, update, or delete your personal information at any time by contacting us.</p>
        <p><strong>Withdrawing consent:</strong> You can withdraw consent at any time by contacting us.</p>
        <p><strong>Opting out of marketing:</strong> Unsubscribe using provided links or by contacting us.</p>
        <br />
      </div>

      <div className="text-[16px] lg:text-xl">Account Information</div>

      <div ref={sectionRefs["7"]} className="mt-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          7. DO WE MAKE UPDATES TO THIS NOTICE?
        </div>
        <p><strong>In Short:</strong> Yes, we will update this notice as needed to comply with laws or changes in our practices.</p>
      </div>

      <div ref={sectionRefs["8"]} className="mt-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          8. DO WE COLLECT INFORMATION FROM MINORS?
        </div>
        <p>We do not knowingly collect data from individuals under 13. If we discover such data, we will delete it immediately.</p>
      </div>

      <div ref={sectionRefs["9"]} className="mt-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          9. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </div>
        <p>You can manage your information through account settings or by contacting us.</p>
        <p>Email us at <a href="mailto:sarveshwar.foods.limited16@gmail.com">sarveshwar.foods.limited16@gmail.com</a>.</p>
      </div>

      <div ref={sectionRefs["10"]} className="mt-8 mb-8">
        <div className="text-[18px] lg:text-xl font-semibold">
          10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </div>
        <p>SARVESHWAR FOODS LIMITED,<br />
           Sarveshwar House, Below Gumat,<br />
           Jammu, Jammu and Kashmir 180001<br />
           +917048110824</p>
      </div>
    </main>
  );
}
