import { Section, Typography, UISIcon, Trans } from "components";
import { getScopedI18n } from "locales/server";

export type EducationProps = {};

const Education = async ({}: Readonly<EducationProps>) => {
  const t = await getScopedI18n("education");

  return (
    <Section id="education" title={t("title")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:row-span-2">
          <Typography variant="h6" component="h3">
            <Trans
              text={t("subtitle")}
              tags={{ span: { className: "text-gradient" } }}
            />
          </Typography>
          <Typography className="hidden md:block">
            {t("description")}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="h3">
            <Trans
              text={t("courses.title")}
              tags={{ span: { className: "text-gradient" } }}
            />
          </Typography>
          <Typography>
            <Trans
              text={t("courses.description")}
              tags={{ span: { className: "text-gradient" } }}
            />
          </Typography>
        </div>
        <Typography variant="h6" component="h3">
          <Trans
            text={t("courses.current.title")}
            tags={{ span: { className: "text-gradient" } }}
          />
        </Typography>
      </div>
      <div className="py-12 md:py-20 lg:py-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        <div className="flex items-center justify-center">
          <UISIcon />
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/img/Education/udemy.webp"
            alt="Udemy logo"
            width="150"
            height="52"
            className="lg:w-32 xl:w-40"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/img/Education/coursera.webp"
            alt="Coursera logo"
            width="150"
            height="52"
            className="lg:w-32 xl:w-40"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/img/Education/aws.webp"
            alt="AWS logo"
            width="100"
            height="52"
            className="lg:w-24 xl:w-30"
          />
        </div>
      </div>
    </Section>
  );
};

export default Education;
