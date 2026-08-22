"use client";

import { Button } from "components/atoms";
import { ContentCopyIcon } from "components/icons";

export type CopyButtonProps = {
  value: string;
  title: string;
};

const CopyButton = ({ value, title }: Readonly<CopyButtonProps>) => {
  const onCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <Button title={title} variant="outlined" size="small" onClick={onCopy}>
      <ContentCopyIcon height={20} width={20} />
    </Button>
  );
};

export default CopyButton;
