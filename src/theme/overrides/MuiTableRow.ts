import palette from "../palette";

const custom = {
  root: {
    "&$selected": {
      backgroundColor: palette.background?.default,
    },
    "&$hover": {
      "&:hover": {
        backgroundColor: palette.background?.default,
      },
    },
  },
};

export default custom;
