import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkSharp, IoSearchOutline } from "react-icons/io5";
import "./select.css";

type Option = {
  id: number;
  label: string;
  icon: JSX.Element;
};

export default function Select({
  methods,
  setSelectedMethod,
  checkedIcon,
  firstMethod,
  removeLabel = false,
}: {
  methods: Option[];
  setSelectedMethod?: (value: string) => void;
  checkedIcon?: boolean;
  firstMethod: string;
  removeLabel?: boolean;
}) {
  const [data, setData] = useState<Option[]>();
  const [selected, setSelected] = useState<string>(firstMethod);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData(methods);
  }, [methods]);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target.closest(".select")) {
        const selectOpens = document.querySelectorAll(".select--active");
        if (selectOpens.length > 1) {
          selectOpens.forEach((selectOpen) => {
            if (selectOpen.closest(".select") !== e.target.closest(".select")) {
              setOpen(false);
            }
          });
        }
      }
      if (e.target.closest(".select") === null) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="relative w-full">
      <div
        className={`w-full relative bg-[#F8F8F8] flex justify-between items-center rounded-md cursor-pointer select ${
          open ? " select--active" : ""
        }`}
      >
        <span
          className="w-full h-[36px] px-4 py-2 flex justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          <span className="text-[16px] font-semibold">{selected}</span>

          <IoIosArrowDown
            className={`duration-300 text-primary ${
              open ? "transform rotate-180" : ""
            }`}
          />
        </span>
        <div
          className={`w-full absolute top-11 left-0 z-50 rounded-xl bg-white shadow-custlight ${
            open ? "visible opacity-1" : "invisible opacity-0"
          } duration-200`}
        >
          <ul
            className="w-full max-h-[250px] flex flex-col justify-start items-start gap-1 overflow-y-auto 
          py-[12px] pr-[7px] pl-[10px] magic-dropdown-menu"
          >
            {data?.map((option: Option) => (
              <li
                key={option.id}
                className={`w-full flex justify-between items-center rounded-md text-primary text-[13px] hover:bg-[#F8F8F8] 
                transition-all duration-200 cursor-pointer p-[7px]
                ${selected === option.label ? "bg-primary-light" : ""} `}
                onClick={() => {
                  setSelected(option.label);
                  if (setSelectedMethod) setSelectedMethod(option.label);
                  setOpen(false);
                }}
              >
                <span className="w-full flex justify-start items-center gap-2">
                  <span>{option.icon && option.icon}</span>
                  <span>{option.label}</span>
                </span>
                {checkedIcon && (
                  <> {selected === option.label && <IoCheckmarkSharp />} </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
