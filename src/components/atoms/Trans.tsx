import { Fragment } from "react";
import { extractContentWithinTags } from "utils/string";

export type TagType = {
  [name: string]: Record<string, string>;
};

export type TransProps = {
  text: string;
  tags: TagType;
};

const Trans = ({ text, tags }: Readonly<TransProps>) => {
  return (
    <>
      {extractContentWithinTags(text).map(
        ({ tag: Component, content }, idx) => {
          const key = `${idx}-${content.slice(0, 10)}`;

          if (!Component) return <Fragment key={key}>{content}</Fragment>;

          const props = {
            children: content,
            ...(Component in tags && { ...tags[Component] }),
          };

          return (
            <Fragment key={key}>
              <Component {...(props as any)} />
            </Fragment>
          );
        }
      )}
    </>
  );
};

export default Trans;
