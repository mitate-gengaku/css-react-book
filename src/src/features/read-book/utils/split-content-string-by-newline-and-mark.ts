import { ContentData } from "@/features/read-book/types/type";
import { generateType } from "@/features/read-book/utils/generate-type";
import { removeMarkdownMark } from "@/features/read-book/utils/remove-markdown-mark";

export const splitContentStringByNewLineAndMark = (contentString: string) => {
  if((/\n/g).test(contentString)) {
    const splited: ContentData[] = contentString
    .replaceAll(/「/g, "replaced_here「")
    .replaceAll(/」/g, "」replaced_here")
    .split(/\n|replaced_here/g)
    .filter((v) => v)
    .map((splitedValue: string) => {
      return {
        isNeedIndent: true,
        isNeedLineBreak: true,
        type: generateType(splitedValue),
        content: removeMarkdownMark(splitedValue),
      }
    });

    return splited;
  }

  const splited: ContentData[] = contentString
    .split(/\n|replaced_here/g)
    .filter((v) => v)
    .map((splitedValue: string) => {
      return {
        isNeedIndent: true,
        isNeedLineBreak: true,
        type: generateType(splitedValue),
        content: removeMarkdownMark(splitedValue),
      }
    });

  return splited;
}