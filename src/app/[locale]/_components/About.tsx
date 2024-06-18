import Button from "components/Button";
import ContactField from "components/ContactField";
import Section from "components/Section";
import TitleSection from "components/TitleSection";
import Typography from "components/Typography";
import OpenInNewIcon from "icons/OpenInNewIcon";
import { getScopedI18n } from "locales/server";

export type AboutProps = {};

const About = async ({}: Readonly<AboutProps>) => {
  const t = await getScopedI18n("about");

  return (
    <Section id="about" title={t("title")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="md:row-span-2">
          <Typography variant="h6" component="h3">
            {`${t("subtitle.0")} `}
            <span className="text-gradient">{t("subtitle.1")}</span>
          </Typography>
          <Typography>{t("description.0")}</Typography>
          <Typography>{t("description.1")}</Typography>
        </div>
        <div className="flex items-center gap-3 md:col-start-1">
          <Typography
            variant="h2"
            component="span"
            className="text-gradient mb-0"
          >
            +5
          </Typography>
          <Typography component="span">{t("experience")}</Typography>
        </div>
        <div className="md:col-start-2 md:row-start-1">
          <Typography variant="h6" component="h3">
            {t("query.title")}
          </Typography>
          <ContactField type="email" value="juanmarcon1080@gmail.com" />
        </div>
        <div className="md:col-start-2 md:row-start-2">
          <Typography variant="h6" component="h3">
            {`${t("cv.title.0")} `}
            <span className="text-gradient">{t("cv.title.1")}</span>
          </Typography>
          <Button
            component="a"
            target="_blank"
            href="docs/CV/JuanMarcon.pdf"
            endAdornment={<OpenInNewIcon height={20} width={20} />}
          >
            {t("cv.call_to_action")}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default About;
