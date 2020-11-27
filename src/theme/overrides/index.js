import MuiButton from "./MuiButton";
import MuiIconButton from "./MuiIconButton";
import MuiPaper from "./MuiPaper";
import MuiTableCell from "./MuiTableCell";
import MuiTableHead from "./MuiTableHead";
import MuiTypography from "./MuiTypography";
import MuiLink from "./MuiLink";
import MuiAlert from "./MuiAlert";

const custom = {
   MuiLink,
   MuiButton,
   MuiIconButton,
   MuiPaper,
   MuiTableCell,
   MuiTableHead,
   MuiTypography,
   MuiAlert,
   MuiIcon: {
      root: {
         minWidth: "1rem",
         width: "auto",
      },
   },
   MuiAppBar: {},
   MuiToolbar: {
      regular: {
         maxHeight: "46px !important",
         minHeight: "46px !important",
      },
   },
};

export default custom;
