import Section from "components/Section";
import Typography from "components/Typography";
import { UISIcon } from "icons";
import { getScopedI18n } from "locales/server";
import Image from "next/image";

export type EducationProps = {};

const Education = async ({}: Readonly<EducationProps>) => {
  const t = await getScopedI18n("education");

  return (
    <Section id="education" title={t("title")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:row-span-2">
          <Typography variant="h6" component="h3">
            {t("subtitle.0")}{" "}
            <span className="text-gradient">{t("subtitle.1")}</span>{" "}
            {t("subtitle.2")}{" "}
            <span className="text-gradient">{t("subtitle.3")}</span>{" "}
            {t("subtitle.4")}{" "}
            <span className="text-gradient">{t("subtitle.5")}</span>
          </Typography>
          <Typography className="hidden md:block">
            {t("description")}
          </Typography>
        </div>
        <div className="">
          <Typography variant="h6" component="h3">
            {t("courses.title.0")}{" "}
            <span className="text-gradient">{t("courses.title.1")}</span>{" "}
            {t("courses.title.2")}{" "}
            <span className="text-gradient">{t("courses.title.3")}</span>{" "}
            {t("courses.title.4")}
          </Typography>
          <Typography>
            {t("courses.description.0")}{" "}
            <span className="text-gradient">{t("courses.description.1")}</span>{" "}
            {t("courses.description.2")}
          </Typography>
        </div>
        <div className="">
          <Typography variant="h6" component="h3">
            {t("courses.current.title.0")}{" "}
            <span className="text-gradient">
              {t("courses.current.title.1")}
            </span>{" "}
            {t("courses.current.title.2")}{" "}
            <span className="text-gradient">
              {t("courses.current.title.3")}
            </span>
          </Typography>
        </div>
      </div>
      <div className="py-12 md:py-20 lg:py-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        <div className="flex items-center justify-center">
          <UISIcon />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/img/Education/udemy.png"
            alt="Udemy logo"
            width="150"
            height="52"
            className="lg:w-32 xl:w-40"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/img/Education/coursera.png"
            alt="Coursera logo"
            width="150"
            height="52"
            className="lg:w-32 xl:w-40"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/img/Education/aws.png"
            alt="AWS logo"
            width="100"
            height="52"
            className="lg:w-24 xl:w-40"
          />
        </div>
      </div>
    </Section>
  );
};

export default Education;
