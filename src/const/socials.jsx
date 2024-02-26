import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const socials = ({ mailAction }) => {
  return [
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      children: {
        component: ({ children, ...props }) => <a {...props}>{children}</a>,
        target: "_blank",
        href: "https://www.linkedin.com/in/juanmarcon/",
        rel: "noreferrer",
        style: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
    {
      name: "GitHub",
      icon: GitHubIcon,
      children: {
        component: ({ children, ...props }) => <a {...props}>{children}</a>,
        target: "_blank",
        href: "https://github.com/juanse1080",
        rel: "noreferrer",
        style: {
          textDecoration: "none",
          color: "inherit",
        },
      },
      props: {
        style: {
          transform: "scale(0.81)",
        },
      },
    },
    {
      name: "Gmail",
      icon: MailIcon,
      children: {
        component: ({ children, ...props }) => (
          <span {...props}>{children}</span>
        ),
        onClick: mailAction,
      },
    },
  ];
};

export default socials;
