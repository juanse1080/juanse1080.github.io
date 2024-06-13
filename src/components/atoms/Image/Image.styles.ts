import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  media: (props: any) => ({
    height: 0,
    width: "100%",
    display: "block",
    paddingTop: "100%",
    backgroundImage: `url(${props.photo})`,
    filter: props.eye ? "brightness(0.8)" : "brightness(1)",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "50%",
    position: "relative",
  }),
  viewPreview: {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: `calc(100vh - 69px)`,
  },
  rootDialog: {
    lineHeight: 0,
  },
  icon: {
    display: "flex",
    position: "absolute",
    right: "calc(15% - 13px)",
    borderRadius: "50%",
    zIndex: 1,
    bottom: "calc(15% - 13px)",
  },
  paperScrollBody: {
    overflowY: "hidden",
  },
}));

export default useStyles;
