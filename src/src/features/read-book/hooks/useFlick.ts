import { useMemo, useRef } from "react"
import { joinSplitedArrayByPageRowLength } from "@/features/read-book/utils/join-splited-array-by-page-row-length";
import { splitContentIntoALine } from "@/features/read-book/utils/split-content-into-a-line";
import { splitContentStringByNewLineAndMark } from "@/features/read-book/utils/split-content-string-by-newline-and-mark";
import { v4 as uuidv4 } from "uuid"
import { convertTo2DArray } from "@/features/read-book/utils/convert-to-2d-array";

const generateKey = () => {
  return uuidv4();
}

export const useFlick = (content: string) => {
  const flick = useRef<boolean>(false);
  const pageCount = useRef<number>(0);
  const pageRef = useRef<HTMLDivElement>(null);

  const refs = useRef<{
    [key in number]: HTMLDivElement;
  }>({});

  const contents = convertTo2DArray(joinSplitedArrayByPageRowLength(splitContentIntoALine(splitContentStringByNewLineAndMark(content))));

  const contentsData = useMemo(() => {
    return contents.map((content, index: number) => ({
      id: generateKey(),
      content: content,
      refCallbackFunction: (node: HTMLDivElement | null) => {
        if (node !== null && refs.current[index] === undefined) {
          refs.current[index] = node;
          refs.current[index].id = `page`;

          refs.current[index].style.zIndex = (
            contents.length - index
          ).toString();
        } else {
          delete refs.current[index];
        }
      },
    }))
  }, [contents]);
  
  const onFlickPage = (index: number) => {
    const target = refs.current[index];

    if (flick.current) return;

    flick.current = true;

    if (target.classList.contains("flip-active-right")) {
      target.style.zIndex = (contents.length - index).toString();

      target.classList.add("flip-deactive-right");
      target.classList.remove("flip-active-right");

      flick.current = false;

      pageCount.current = index;
    } else {
      target.style.zIndex = (index + 1).toString();

      target.classList.add("flip-active-right");
      target.classList.remove("flip-deactive-right");

      flick.current = false;

      pageCount.current = index + 1;
    }
  };

  return {
    pageCount,
    contents,
    pageRef,
    contentsData,
    onFlickPage,
  }
}