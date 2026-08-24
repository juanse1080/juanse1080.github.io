import { Button, Trans, Typography } from "components/atoms";
import { LinkedInIcon, OpenInNewIcon } from "components/icons";
import { ContactField, Section } from "components/molecules";
import { getResumePath, linkedInProfileUrl, publicEmail } from "const/profile";
import { getCurrentLocale, getScopedI18n } from "locales/server";

const About = async () => {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("home.about");
  const tCommon = await getScopedI18n("common");

  const cvLink = getResumePath(locale);

  return (
    <Section
      id="about"
      title={t("title")}
      ariaLabel={tCommon("goTo", { label: t("title") })}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="md:row-span-2">
          <Typography variant="h6" component="h3">
            <Trans
              text={t("subtitle")}
              tags={{ span: { className: "text-gradient" } }}
            />
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
            6+
          </Typography>
          <Typography component="span">{t("experience")}</Typography>
        </div>
        <div id="contact" className="md:col-start-2 md:row-start-1 scroll-mt-[52px] sm:scroll-mt-[60px]">
          <Typography variant="h6" component="h3">
            {t("query.title")}
          </Typography>
          <Typography>{t("query.availability")}</Typography>
          <div className="flex flex-col gap-3">
            <ContactField
              type="email"
              value={publicEmail}
              copyLabel={tCommon("copy")}
              sendLabel={tCommon("sendEmail")}
            />
            <Button
              component="a"
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              className="self-start gap-2"
              href={linkedInProfileUrl}
              endAdornment={<LinkedInIcon height={20} width={20} />}
            >
              {t("query.linkedin")}
            </Button>
          </div>
        </div>
        <div className="md:col-start-2 md:row-start-2">
          <Typography variant="h6" component="h3">
            <Trans
              text={t("cv.title")}
              tags={{ span: { className: "text-gradient" } }}
            />
          </Typography>
          <Button
            component="a"
            target="_blank"
            href={cvLink}
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
