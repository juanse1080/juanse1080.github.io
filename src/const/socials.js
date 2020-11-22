import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const socials = [
   {
      name: "LinkedIn",
      icon: LinkedInIcon,
      propsLink: {
         target: "_blank",
         href: "https://www.linkedin.com/in/juanse1080/",
      },
   },
   {
      name: "GitHub",
      icon: GitHubIcon,
      propsLink: {
         target: "_blank",
         href: "https://github.com/juanse1080",
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
      propsLink: {
         target: "_blank",
         href:
            "mailto:juanmarcon1080@gmail.com?Subject=Github%20page:%20&body=Prueba",
      },
   },
];

export default socials;
