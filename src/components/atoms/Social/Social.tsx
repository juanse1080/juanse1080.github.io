// import const
import socials from "const/socials";

// import styles
import useStyles from "./Social.styles";

export default function Social({
  theme,
  hiddenEmail,
  mailAction,
  ...others
}: any) {
  const classes = useStyles();
  const items = hiddenEmail
    ? socials({ mailAction }).filter(({ name }) => name !== "Gmail")
    : socials({ mailAction });

  return (
    <div {...others}>
      {items.map(
        ({
          icon: Icon,
          children: { component: Component = null, ...propsChildren },
          name,
          props,
        }) => (
          <Component key={name} {...propsChildren}>
            <Icon {...props} fontSize="inherit" className={classes.icon} />
          </Component>
        )
      )}
    </div>
  );
}
