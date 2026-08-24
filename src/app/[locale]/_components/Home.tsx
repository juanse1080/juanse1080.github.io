import { ArrowForwardIcon, OpenInNewIcon } from "components/icons";
import { Button, Image, Trans, Typography } from "components/atoms";
import { getResumePath } from "const/profile";
import { getCurrentLocale, getScopedI18n } from "locales/server";
import { merge } from "utils/clsx";

type CompanyLogo = {
  image: string;
  name: string;
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
    imageClassName: "sm:w-[180px] md:w-[220px]",
  },
  {
    image: "/img/Companies/celerik.webp",
    name: "Celerik",
  },
  {
    image: "/img/Companies/melonn.webp",
    name: "Melonn",
  },
  {
    image: "/img/Companies/bitnovo.webp",
    name: "Bitnovo",
  },
  {
    image: "/img/Companies/mayasoft.webp",
    name: "Mayasoft",
  },
  {
    image: "/img/Companies/binary.webp",
    name: "Binary Groups",
  },
  {
    image: "/img/Companies/woombat.webp",
    name: "Woombat",
  },
  {
    image: "/img/Companies/conexalab.webp",
    name: "ConexaLab",
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
          "flex items-center justify-center md:justify-between gap-5"
        )}
      >
        <div className="z-10 flex flex-col items-center md:items-start justify-center">
          <div className="md:hidden mb-4 rounded-full p-[3px] bg-gradient w-fit">
            <div className="rounded-full overflow-hidden bg-background p-[3px]">
              <Image
                src="/img/profile.webp"
                alt="Juan Marcon"
                width="112"
                height="112"
                className="rounded-full object-cover w-24 h-24"
              />
            </div>
          </div>
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
              endAdornment={<OpenInNewIcon height={20} width={20} />}
            >
              {t("call_to_action.resume")}
            </Button>
          </div>
        </div>
        <div className="hidden md:block shrink-0 z-10">
          <div className="rounded-full p-[3px] bg-gradient">
            <div className="rounded-full overflow-hidden bg-background p-[3px]">
              <Image
                src="/img/profile.webp"
                alt="Juan Marcon"
                width="288"
                height="288"
                className="rounded-full object-cover w-[220px] h-[220px] lg:w-[260px] lg:h-[260px]"
              />
            </div>
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
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {companies.map(({
            name,
            image,
            width = "150",
            height = "52",
            imageClassName = "sm:w-[150px] md:w-[180px]",
          }) => (
            <div key={name} className="flex items-center justify-center">
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
