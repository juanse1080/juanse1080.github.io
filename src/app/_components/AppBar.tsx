"use client";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Button, ButtonGroup } from "components/atoms";
import { useState } from "react";

const AppBar = () => {
  const [value, setValue] = useState("es");

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className="h-min flex items-stretch gap-3 justify-end backdrop-blur fixed z-50 container m-x-auto -left-3 -right-3 p-3">
      <ButtonGroup size="small" value={value} onChange={onChange}>
        <Button variant="text" value="es">
          es
        </Button>
        <Button variant="text" value="en">
          en
        </Button>
      </ButtonGroup>

      <a
        href="https://www.linkedin.com/in/juanmarcon"
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a
        href="https://github.com/juanse1080"
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        <GitHubIcon
          fontSize="large"
          style={{
            transform: "scale(0.81)",
          }}
        />
      </a>
    </div>
  );
};

export default AppBar;
