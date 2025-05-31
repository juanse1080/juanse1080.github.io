import { ArrowForwardIcon } from "components/icons";
import { Button, Image, Trans, Typography } from "components/atoms";
import { getScopedI18n } from "locales/server";
import { merge } from "utils/clsx";

const companies = [
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
] as const;

const Home = async () => {
  const t = await getScopedI18n("home.content");

  return (
    <>
      <div
        className={merge(
          "root relative",
          "h-[calc(100vh-52px)]",
          "sm:h-[calc(100vh-60px-245px)]",
          "md:h-[calc(100vh-60px-279px)]",
          "lg:h-[calc(100vh-60px-199px)]",
          "xl:h-[calc(100vh-60px-201px)]",
          "2xl:h-[calc(100vh-60px-132px)]",
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
          <Button
            size="large"
            href="#about"
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
        </div>
      </div>
      <div className="root px-3 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-7 gap-4">
          {companies.map(({ name, image, className }) => (
            <div
              key={name}
              className={merge("flex items-center justify-center", className)}
            >
              <Image
                src={image}
                alt={name}
                width="150"
                height="52"
                className={merge("sm:w-[150px] md:w-[180px]")}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
