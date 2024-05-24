import Select from "@/components/select";
import { RiPencilLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { MdMore, MdTextIncrease } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsArrowsExpandVertical } from "react-icons/bs";
import { PiDnaDuotone } from "react-icons/pi";
import { PiBrainLight } from "react-icons/pi";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoIosArrowDown, IoLogoSnapchat } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { TbReload } from "react-icons/tb";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { LuSaveAll } from "react-icons/lu";

import { useEffect, useState } from "react";
import SelectEngine from "@/components/select/engineGpt";

const TextProcessMethod = [
  { id: 1, label: "ReWrite", icon: <RiPencilLine size={15} /> },
  { id: 2, label: "Summerize", icon: <TfiWrite size={15} /> },
  { id: 4, label: "Explain", icon: <FaBook size={15} /> },
  { id: 5, label: "Improve", icon: <MdTextIncrease size={15} /> },
  { id: 6, label: "Expand", icon: <BsArrowsExpandVertical size={15} /> },
  { id: 7, label: "AI Assistant", icon: <MdTextIncrease size={15} /> },
  { id: 8, label: "Shorter", icon: <BsArrowsExpandVertical size={15} /> },
  { id: 9, label: "Longer", icon: <MdTextIncrease size={15} /> },
  {
    id: 10,
    label: "Change tone",
    icon: <PiDnaDuotone size={15} />,
  },
  {
    id: 11,
    label: "Create with AI",
    icon: <PiBrainLight size={15} />,
  },
];
const EngineMethod = [
  { id: 1, label: "GPT-3", icon: <IoLogoSnapchat size={15} /> },
  { id: 2, label: "T5", icon: <IoSettings size={15} /> },
  { id: 3, label: "GPT-4", icon: <IoSettings size={15} /> },
];
const FeedBack = [
  { id: 1, label: "Like", icon: <BiLike size={15} /> },
  { id: 2, label: "Dislike", icon: <BiDislike size={15} /> },
  { id: 3, label: "Speaker", icon: <HiOutlineSpeakerWave size={15} /> },
  { id: 4, label: "Save to Library", icon: <LuSaveAll size={15} /> },
  {
    id: 4,
    label: "Move to Chat",
    icon: <IoChatboxEllipsesOutline size={15} />,
  },
];

export default function MagicDropdownInsertPopup() {
  const [selectedTextProcessMethod, setSelectedTextProcessMethod] =
    useState<string>("");
  const [selectedEngineMethod, setSelectedEngineMethod] = useState<string>("");
  const [expandText, setExpandText] = useState<boolean>(true);
  const [openFeedBack, setOpenFeedBack] = useState<boolean>(false);

  useEffect(() => {
    console.log("selectedTestProcessMethod", selectedTextProcessMethod);
  }, [selectedTextProcessMethod]);

  useEffect(() => {
    console.log("selectedEngineMethod", selectedEngineMethod);
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="w-[180px]">
          <Select
            setSelectedMethod={(value: string) =>
              setSelectedTextProcessMethod(value)
            }
            firstMethod="ReWrite"
            methods={TextProcessMethod}
          />
        </div>
        {selectedTextProcessMethod === "AI Assistant" && (
          <div className="transition-all duration-200">
            <span className="w-full flex justify-start items-start text-primary text-[13px] px-[2px] py-2">
              Tell to AI Assistant What to do to help
            </span>
            <input
              placeholder="Type here..."
              className="w-full h-[44px] bg-[#F8F8F8] rounded-md outline-none px-3 mt-2"
              type="text"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        )}
        {selectedTextProcessMethod === "Explain" && (
          <>
            <div
              className="transition-all duration-200 bg-[#F8F8F8] w-full h-full min-h-[162px]
           max-h-[250px] overflow-y-auto px-2 pt-3 mt-2 rounded-md magic-dropdown-menu"
            >
              <div className="w-full flex justify-between bg-white px-3 py-2 rounded-md  outline-none cursor-pointer">
                <span
                  className={`${
                    expandText ? "truncate" : ""
                  } transition-all duration-300 text-[11px] text-[#747474] pr-3`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s
                </span>
                <span className="w-[20px]">
                  <IoIosArrowDown
                    className={`duration-300 ${
                      expandText ? "transform rotate-180" : ""
                    }`}
                    size={15}
                    onClick={() => setExpandText(!expandText)}
                  />
                </span>
                {/* <span id="seletedTextArea" className=""></span> */}
              </div>
              <div className="px-2 py-1">
                <span className="text-[12px]">
                  Generating text... Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s Lorem Ipsum
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s
                </span>
              </div>
              <div className="sticky bg-[#F8F8F8] flex justify-between items-center bottom-0 p-2">
                <div className="">
                  <SelectEngine
                    setSelectedMethod={(value: string) =>
                      setSelectedEngineMethod(value)
                    }
                    methods={EngineMethod}
                    firstMethod="GPT-3"
                    removeLabel={true}
                    checkedIcon={true}
                  />
                </div>
                <div className="flex justify-center items-center gap-4 text-[#B9BAC0]">
                  <span className="cursor-pointer hover:bg-primary-light hover:text-primary hover:shadow-md p-1 rounded-md transition-all duration-200">
                    <TbReload size={20} />
                  </span>
                  <span className="cursor-pointer hover:bg-primary-light hover:text-primary hover:shadow-md p-1 rounded-md transition-all duration-200">
                    <IoCopyOutline size={18} />
                  </span>
                  <div
                    className={`w-[180px] absolute -top-[175px] right-0 z-50 rounded-xl 
                    bg-white shadow-custlight transition-all duration-200 p-3 ${
                      openFeedBack
                        ? "visible block opacity-1"
                        : "invisible hidden opacity-0"
                    } `}
                  >
                    <ul className="">
                      {FeedBack.map((item) => (
                        <li
                          key={item.id}
                          className={`w-full flex justify-between items-center rounded-md text-[13px] hover:bg-[#F8F8F8] 
                          transition-all duration-200 cursor-pointer p-[6px]`}
                        >
                          <span className="w-full flex justify-start items-center gap-2">
                            {item.icon}
                            <span className=" text-primary">{item.label}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    className="cursor-pointer hover:bg-primary-light hover:text-primary hover:shadow-md p-1 rounded-md transition-all duration-200"
                    onClick={() => {
                      setOpenFeedBack(!openFeedBack);
                    }}
                  >
                    <MdMore size={18} />
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-[#F8F8F8]"></div>
        <div className="w-full static bottom-[13px] right-[16px] flex justify-end items-end gap-2 mt-4">
          <button
            className="bg-primary-light min-w-[102px] flex justify-center items-center text-primary text-[14px]  
          rounded-[6px] p-2"
          >
            Cancel
          </button>
          <button
            className="bg-primary flex justify-center items-center text-white text-[14px] 
          min-w-[80px] rounded-[6px] p-2"
          >
            {selectedTextProcessMethod === "AI Assistant" ? "Okey" : "Replace"}
          </button>
        </div>
      </div>
    </>
  );
}
