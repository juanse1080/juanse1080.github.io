import palette from "../palette";

const custom = {
  root: {
    // color: `${palette.primary.main} !important`,
    "&:not([href])": {
      color: `${(palette.primary as any)?.main}`,
      "&:hover": {
        textDecoration: "underline",
        color: `${(palette.primary as any)?.main}`,
      },
    },
  },
};

export default custom;
