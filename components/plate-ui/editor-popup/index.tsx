import { useEffect, useState } from "react";

export default function PopUp({
  children,
  openPopup,
  setOpenPopup,
  setSelectionText,
}: {
  openPopup: boolean;
  setOpenPopup: (open: boolean) => void;
  children: React.ReactNode;
  setSelectionText: (text: string) => void;
}) {
  // useEffect(() => {
  //   console.log("selectedText", selectedText);
  // }, [selectedText]);

  // append popup as child into tag with plate-editor class
  useEffect(() => {
    const editor = document.querySelector(".plate-editor");
    const popup = document.getElementById("popup");
    if (editor && popup) {
      editor.appendChild(popup);
    }
  }, []);

  return (
    <>
      <div
        id="popup"
        className={`w-full max-w-[450px] h-fit absolute top-[50%] bottom-[50%] transform translate-x-[100px] -translate-y-1/2
         z-50 rounded-xl bg-[#FCFCFD] p-3 shadow-cust ${
           openPopup ? "visible opacity-1" : "invisible opacity-0"
         } duration-300`}
      >
        {children}
      </div>
    </>
  );
}
