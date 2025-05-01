import { Button, Trans, Typography } from "components/atoms";
import { OpenInNewIcon } from "components/icons";
import { ContactField, Section } from "components/molecules";
import { getScopedI18n } from "locales/server";

const About = async () => {
  const t = await getScopedI18n("about");
  const tCommon = await getScopedI18n("common");

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
            <Trans
              text={t("cv.title")}
              tags={{ span: { className: "text-gradient" } }}
            />
          </Typography>
          <Button
            component="a"
            target="_blank"
            href="/docs/CV/JuanMarcon.pdf"
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
