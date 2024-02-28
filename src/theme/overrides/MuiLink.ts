import palette from "../palette";

const custom = {
   root: {
      // color: `${palette.primary.main} !important`,
      "&:not([href])": {
         color: `${palette.primary.main}`,
         "&:hover": {
            textDecoration: "underline",
            color: `${palette.primary.main}`,
         },
      },
   },
};

export default custom;
