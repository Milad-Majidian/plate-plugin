"use client";
import { createPlugins, Plate } from "@udecode/plate-common";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { CommentsProvider } from "@udecode/plate-comments";
import { useEffect, useState } from "react";
import PopUp from "../plate-ui/editor-popup";
import MagicDropdownInsertPopup from "../plate-ui/magic-dropdown-insert-popup";

const plugins = createPlugins([], {
  components: {},
});

const initialValue = [
  {
    id: 1,
    type: "p",
    children: [
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
];

export function PlateEditor() {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedText, setSelectionText] = useState<string>("");

  useEffect(() => {
    let text = "";
    document.addEventListener("selectionchange", () => {
      const activeSelection = document.getSelection();
      const boundingClientRect = activeSelection
        ?.getRangeAt(0)
        .getBoundingClientRect();
      const range = activeSelection?.getRangeAt(0);
      text = activeSelection?.toString() || "";
      if (!text) return;
      // setSelectionText(text);
      const selectedTextArea = document.getElementById("seletedTextArea");
      if (selectedTextArea) {
        setTimeout(() => {
          selectedTextArea.innerHTML = text;
        }, 500);
      }
    });
  }, []);

  return (
    // <Plate plugins={plugins} initialValue={initialValue}>
    //   <Editor placeholder="Type your message here." />
    // </Plate>
    <DndProvider backend={HTML5Backend}>
      <CommentsProvider users={{}} myUserId="1">
        <Plate plugins={plugins} initialValue={initialValue}>
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>
          <Editor />
          {openPopup && (
            <PopUp
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              setSelectionText={setSelectionText}
            >
              <MagicDropdownInsertPopup />
            </PopUp>
          )}
          <FloatingToolbar>
            <FloatingToolbarButtons
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            />
          </FloatingToolbar>
          {/* <MentionCombobox items={[]} /> */}
          {/* <CommentsPopover /> */}
        </Plate>
      </CommentsProvider>
    </DndProvider>
  );
}
