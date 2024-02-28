import { Overrides } from "@material-ui/core/styles/overrides";
import MuiButton from "./MuiButton";
import MuiIconButton from "./MuiIconButton";
import MuiLink from "./MuiLink";
import MuiPaper from "./MuiPaper";
import MuiTableCell from "./MuiTableCell";
import MuiTableHead from "./MuiTableHead";
import MuiTypography from "./MuiTypography";

const custom: Overrides = {
  MuiLink,
  MuiButton,
  MuiIconButton,
  MuiPaper,
  MuiTableCell,
  MuiTableHead,
  MuiTypography,
  MuiIcon: {
    root: {
      minWidth: "1rem",
      width: "auto",
    },
  },
  MuiAppBar: {},
  // MuiToolbar: {
  //    regular: {
  //       maxHeight: "46px !important",
  //       minHeight: "46px !important",
  //    },
  // },
};

export default custom;
