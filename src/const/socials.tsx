import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const socials = ({ mailAction }: any) => {
  return [
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      children: {
        component: ({ children, ...props }: any) => (
          <a {...props}>{children}</a>
        ),
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
        component: ({ children, ...props }: any) => (
          <a {...props}>{children}</a>
        ),
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
        component: ({ children, ...props }: any) => (
          <span {...props}>{children}</span>
        ),
        onClick: mailAction,
      },
    },
  ];
};

export default socials;
