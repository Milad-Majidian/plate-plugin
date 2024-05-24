import React, { use, useEffect, useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";

import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";

import { Icons } from "@/components/icons";

import { MarkToolbarButton } from "./mark-toolbar-button";
import { MoreDropdownMenu } from "./more-dropdown-menu";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";
import { IoMdAdd } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import MagicDropdownMenu from "./magic-dropdown-menu";

export function FloatingToolbarButtons({
  openPopup,
  setOpenPopup,
}: {
  openPopup: boolean;
  setOpenPopup: (open: boolean) => void;
}) {
  const readOnly = useEditorReadOnly();

  const [openMagicDropdownMenu, setOpenMagicDropdownMenu] = useState(false);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (
        !e.target.closest("#floating-toolbar-dropdown-menu") &&
        !e.target.closest("#floating-toolbar-dropdown-button")
      ) {
        setOpenMagicDropdownMenu(false);
      }
    };
    document.addEventListener("click", handleClick);
  });

  return (
    <>
      <div className="flex justify-center items-center gap-[10px]">
        {!readOnly && (
          <>
            <MarkToolbarButton nodeType={MARK_BOLD} tooltip="Bold (⌘+B)">
              <Icons.bold />
            </MarkToolbarButton>
            <MarkToolbarButton nodeType={MARK_ITALIC} tooltip="Italic (⌘+I)">
              <Icons.italic />
            </MarkToolbarButton>
            <MarkToolbarButton
              nodeType={MARK_UNDERLINE}
              tooltip="Underline (⌘+U)"
            >
              <Icons.underline />
            </MarkToolbarButton>
            <MarkToolbarButton
              nodeType={MARK_STRIKETHROUGH}
              tooltip="Strikethrough (⌘+⇧+M)"
            >
              <Icons.strikethrough />
            </MarkToolbarButton>
            <MarkToolbarButton nodeType={MARK_CODE} tooltip="Code (⌘+E)">
              <Icons.code />
            </MarkToolbarButton>
          </>
        )}
        <button className="text-[#B9BAC0] p-2 rounded-md transition-all duration-200">
          <FiMessageSquare size={16} />
        </button>
        <div className="relative">
          <button
            id="floating-toolbar-dropdown-button"
            className="bg-[#F8F8F8] text-primary p-2 rounded-md hover:bg-[#F2EEFD] transition-all duration-200
           magic-dropdown-button"
            onClick={() => setOpenMagicDropdownMenu(!openMagicDropdownMenu)}
          >
            <FaWandMagicSparkles size={16} />
          </button>
          <MagicDropdownMenu
            open={openMagicDropdownMenu}
            setOpen={setOpenMagicDropdownMenu}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          />
        </div>
        <button className="bg-[#F8F8F8] text-primary p-[7px] rounded-md hover:bg-[#F2EEFD] transition-all duration-200">
          <IoMdAdd size={18} />
        </button>

        <TurnIntoDropdownMenu />

        <MoreDropdownMenu />
      </div>
    </>
  );
}
