import { RiPencilLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { MdTextIncrease } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsArrowsExpandVertical } from "react-icons/bs";
import { PiDnaDuotone } from "react-icons/pi";
import { PiBrainLight } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import "../../plate-editor/plate-editor.css";

const Options = [
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
    children: [
      {
        id: 11,
        label: "Formal",
        icon: <PiDnaDuotone size={15} />,
      },
      {
        id: 22,
        label: "Informal",
        icon: <PiDnaDuotone size={15} />,
      },
      {
        id: 33,
        label: "Professional",
        icon: <PiDnaDuotone size={15} />,
      },
      {
        id: 44,
        label: "Casual",
        icon: <PiDnaDuotone size={15} />,
      },
      {
        id: 55,
        label: "Friendly",
        icon: <PiDnaDuotone size={15} />,
      },
      // {
      //   id: 66,
      //   label: "Humorous",
      //   icon: <PiDnaDuotone size={15} />,
      // },
      // {
      //   id: 77,
      //   label: "Sarcastic",
      //   icon: <PiDnaDuotone size={15} />,
      // },
      // {
      //   id: 88,
      //   label: "Serious",
      //   icon: <PiDnaDuotone size={15} />,
      // },
      // {
      //   id: 9,
      //   label: "Optimistic",
      //   icon: <PiDnaDuotone size={15} />,
      // },
      // {
      //   id: 10,
      //   label: "Pessimistic",
      //   icon: <PiDnaDuotone size={15} />,
      // },
      // {
      //   id: 11,
      //   label: "Neutral",
      //   icon: <PiDnaDuotone size={15} />,
      // },
    ],
  },
  {
    id: 11,
    label: "Create with AI",
    icon: <PiBrainLight size={15} />,
  },
];

export default function MagicDropdownMenu({
  open,
  setOpen,
  openPopup,
  setOpenPopup,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  openPopup: boolean;
  setOpenPopup: (open: boolean) => void;
}) {
  return (
    <>
      <div
        className={`w-[220px] absolute top-12 z-50 rounded-xl bg-white shadow-custlight ${
          open ? "visible opacity-1" : "invisible opacity-0"
        } duration-300`}
      >
        <ul
          id="floating-toolbar-dropdown-menu"
          className="w-full max-h-[250px] overflow-y-auto px-2 py-3 magic-dropdown-menu"
        >
          {Options.map((option) => (
            <li
              key={option.id}
              className={`flex items-center justify-between gap-2 p-2 text-primary text-[12px] font-semibold rounded-md cursor-pointer
              hover:bg-[#F8F8F8] active:bg-background-light transition-all duration-200 dropdown-submenu`}
              onClick={() => {
                setOpen(false);
                if (option.label === "Explain") {
                  setOpenPopup(true);
                }
              }}
            >
              <span className="flex justify-start items-center gap-3">
                {option.icon}
                <span>{option.label}</span>
              </span>
              {option.label === "Create with AI" && <FaAngleRight />}
              {option.label === "Change tone" && <FaAngleRight />}
              {option.children && (
                <ul
                  className="dropdown-menu invisible opacity-0 w-[180px] max-h-[216px] absolute bg-white overflow-y-auto
                shadow-custlight top-0 right-[224px] lg:-right-[180px] px-2 py-3 rounded-md transition-all duration-200 magic-dropdown-menu"
                >
                  {option.children.map((child) => (
                    <li
                      key={child.id}
                      className="flex items-center gap-2 p-2 text-primary text-[12px] font-semibold rounded-md cursor-pointer
                    hover:bg-[#F8F8F8] active:bg-background-light transition-all duration-200"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {child.icon}
                      <span>{child.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
