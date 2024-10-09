"use client";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineContentCopy } from "react-icons/md";
import CustomButton from "./ui/custom-buttom";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useFormState } from "react-dom";
import { generateParaphrase } from "@/app/actions";
import { ActionResponse } from "@/type-identifier";
import { useDictionary } from "@/context/dictionary-provider";
import ReCAPTCHA from "react-google-recaptcha";

export interface EditorProps {
  locale: string;
}
const EditorForm = (props: EditorProps) => {
  const router = useRouter();
  const dictionary = useDictionary();
  const [wordEntered, setWordEntered] = useState(0);
  const contentRef = React.useRef<HTMLTextAreaElement>(null);
  const responseRef = React.useRef<HTMLDivElement>(null);
  const reCaptchaRef = React.createRef<ReCAPTCHA>();
  const [processedContent, setProcessedContent] = useState("");
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const [showCaptchaError, setShowCaptchaError] = React.useState(true);
  const [showWorldLimitError, setShowWorldLimitError] = React.useState(true);
  const [state, formAction] = useFormState<ActionResponse<string>, FormData>(
    generateParaphrase,
    null
  );
  const countWord = () => {
    const word = contentRef.current?.value?.trim()?.split(/\s+/);
    setWordEntered(word?.length ?? 0);
    setShowWorldLimitError(((word?.length ?? 0) < 50 || (word?.length ?? 0) > 100))
  };

  const clearContent = () => {
    if (contentRef.current) {
      contentRef.current.value = "";
      countWord(); // Update word count after clearing content
    }
  };

  const handleOnCaptchaChange = (value: string | null) => {
    if(value?.length ?? 0 > 0){
      setShowCaptchaError(false);
    } else {
      setShowCaptchaError(true);
    }
  };

  useEffect(() => {
    // check for valid state
    if (!state) {
      return;
    }

    // handle errors if any, and show as a toast
    if (!state.success && Object.keys(state.errors ?? {}).length) {
      const errors = Object.values({ ...state.errors }).flatMap(
        (errorArray) => errorArray
      );
      errors.map((error) => {
        console.log(error);
      });
    }
    if (state.success) {
      state.data && setProcessedContent(state.data);
      setTimeout(()=>{
        responseRef.current?.scrollIntoView({behavior:'smooth',inline:"center"});
      }, 500);
      router.refresh();
    }
  }, [state]);

  // hotfix need to figure out how can we reset for response when need in client
  const wordLimitMessage = wordEntered < 50 ? dictionary.minimum_total_words : dictionary.max_limit_error;

  return (
    <form
      action={formAction}
      className="flex flex-col w-full max-w-[950px] h-auto self-center items-center justify-center px-2"
    >
      <div className="flex flex-col w-full h-auto rounded-md bg-gradient-to-tr from-[#e6eef699] to-[#d5dfea99]">
        <input type="hidden" value={props.locale} name="locale" />
        <textarea
          name="content"
          ref={contentRef}
          onChange={countWord}
          placeholder={dictionary.content_placeholder}
          className="w-full h-[300px] bg-transparent p-4 overflow-auto focus-visible:outline-none"
        ></textarea>
        <div className="flex justify-between items-center px-4 py-1">
          <div className="flex">
            <span
              className={`contents ${state?.errors?.wordLimit && showWorldLimitError ? 'text-red-500' : 'text-[#008000]'}`}
            >{`${dictionary.total_words}: ${wordEntered} `}</span>
            {state?.errors?.wordLimit && showWorldLimitError && <span className="text-red-500 error-container">&nbsp; {` | ${wordLimitMessage}`}</span>}
          </div>
          <div
            className="bg-white p-2 rounded-md cursor-pointer"
            onClick={() => clearContent()}
          >
            <RiDeleteBin5Line size={20} />
          </div>
        </div>
      </div>
      <ReCAPTCHA
        onChange={handleOnCaptchaChange}
        ref={reCaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY!}
        className="my-[24px] h-[50px] w-[300px] lg:mt-8"
      />
      {state?.errors?.captcha && showCaptchaError && (
        <div className="text-red-400">{state?.errors?.captcha}</div>
      )}
      <div className="flex flex-col md:flex-row mt-[52px] gap-4">
      <CustomButton
        type="submit"
        label={dictionary.humanize_text_button_label}
        className="py-2 text-lg w-[250px] h-[50px] !bg-[#0B80E0]"
      ></CustomButton>
      <div
        onClick={() => {
          location.reload()
        }}
        className="py-2 text-lg w-[250px] h-[50px] bg-white text-[#0B80E0] !border-[#0B80E0] border rounded-lg text-center cursor-pointer"
      >
        {dictionary.use_again}
      </div>
      </div>
      {processedContent && (
        <div
          ref={responseRef}
          className="relative w-full my-10 h-[300px] bg-transparent p-4 overflow-auto focus-visible:outline-none whitespace-pre-wrap rounded-md bg-gradient-to-tr from-[#e6eef699] to-[#d5dfea99]"
        >
          {processedContent}
          <div
            className="bg-white p-2 rounded-md cursor-pointer absolute bottom-2 right-2"
            onClick={() => {navigator.clipboard.writeText(processedContent).then(() => {
              setTooltipOpen(true);
              setTimeout(() => {
                  setTooltipOpen(false);
              }, 1000); 
          })}}
          >
            {!tooltipOpen ? 
            <MdOutlineContentCopy size={20}/> : <div className="text-[#008000]">Copied</div> }
          </div>
        </div>
      )}
    </form>
  );
};

export default EditorForm;
