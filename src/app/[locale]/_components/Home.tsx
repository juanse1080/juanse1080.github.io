import { ArrowForwardIcon } from "components/icons";
import { Button, Image, Trans, Typography } from "components/atoms";
import { getResumePath } from "const/profile";
import { getCurrentLocale, getScopedI18n } from "locales/server";
import { merge } from "utils/clsx";

type CompanyLogo = {
  image: string;
  name: string;
  className: string;
  width?: string;
  height?: string;
  imageClassName?: string;
};

const companies: CompanyLogo[] = [
  {
    image: "/img/Companies/main12.webp",
    name: "MAIN 12 LLC",
    width: "180",
    height: "26",
    className: "col-span-2 sm:col-span-3 lg:col-span-4 xl:col-span-4 2xl:col-span-1",
    imageClassName: "sm:w-[180px] md:w-[220px]",
  },
  {
    image: "/img/Companies/celerik.webp",
    name: "Celerik",
    className: "col-span-1 lg:col-span-3 xl:col-span-3 2xl:col-span-1",
  },
  {
    image: "/img/Companies/melonn.webp",
    name: "Melonn",
    className: "col-span-1 lg:col-span-3 xl:col-span-3 2xl:col-span-1",
  },
  {
    image: "/img/Companies/bitnovo.webp",
    name: "Bitnovo",
    className: "col-span-1 lg:col-span-3 xl:col-span-3 2xl:col-span-1",
  },
  {
    image: "/img/Companies/mayasoft.webp",
    name: "Mayasoft",
    className: "col-span-1 lg:col-span-3 xl:col-span-3 2xl:col-span-1",
  },
  {
    image: "/img/Companies/binary.webp",
    name: "Binary Groups",
    className: "col-span-1 lg:col-span-4 xl:col-span-4 2xl:col-span-1",
  },
  {
    image: "/img/Companies/woombat.webp",
    name: "Woombat",
    className: "col-span-1 lg:col-span-4 xl:col-span-4 2xl:col-span-1",
  },
  {
    image: "/img/Companies/conexalab.webp",
    name: "ConexaLab",
    className:
      "col-span-2 sm:col-span-3 lg:col-span-4 xl:col-span-4 2xl:col-span-1",
  },
];

const Home = async () => {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("home.content");
  const cvLink = getResumePath(locale);

  return (
    <>
      <div
        className={merge(
          "root relative",
          "h-[calc(100dvh-52px)]",
          "sm:h-[calc(100dvh-60px-245px)]",
          "md:h-[calc(100dvh-60px-279px)]",
          "lg:h-[calc(100dvh-60px-199px)]",
          "xl:h-[calc(100dvh-60px-201px)]",
          "2xl:h-[calc(100dvh-60px-132px)]",
          "flex justify-center md:justify-start gap-5"
        )}
      >
        <div className="z-10 flex flex-col items-center md:items-start justify-center">
          <Typography
            component="h1"
            variant="h2"
            className="text-center md:text-left !leading-[1.25]"
          >
            <Trans
              text={t("title")}
              tags={{ span: { className: "text-gradient block" } }}
            />
          </Typography>
          <Typography className="max-w-2xl text-center md:text-left text-base sm:text-lg">
            <Trans
              text={t("description")}
              tags={{ span: { className: "text-gradient font-bold" } }}
            />
          </Typography>
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
            <Button
              size="large"
              href="#contact"
              component="a"
              className="group"
              endAdornment={
                <ArrowForwardIcon
                  className="animate-slide-right group-hover:animate-none group-hover:hover:-translate-x-1/4"
                  height={20}
                  width={20}
                />
              }
            >
              {t("call_to_action.contact")}
            </Button>
            <Button
              size="large"
              variant="outlined"
              href={cvLink}
              target="_blank"
              rel="noreferrer"
              component="a"
            >
              {t("call_to_action.resume")}
            </Button>
          </div>
        </div>
      </div>
      <div className="root px-3 pb-12">
        <Typography className="mx-auto mb-6 max-w-3xl text-center">
          <Trans
            text={t("company_context")}
            tags={{ span: { className: "text-gradient font-bold" } }}
          />
        </Typography>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-7 gap-4">
          {companies.map(({
            name,
            image,
            className,
            width = "150",
            height = "52",
            imageClassName = "sm:w-[150px] md:w-[180px]",
          }) => (
            <div
              key={name}
              className={merge("flex items-center justify-center", className)}
            >
              <Image
                src={image}
                alt={name}
                width={width}
                height={height}
                className={merge(imageClassName)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
