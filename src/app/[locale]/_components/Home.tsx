import Button from "components/Button";
import Typography from "components/Typography";
import ArrowForwardIcon from "icons/ArrowForwardIcon";
import { getScopedI18n } from "locales/server";
import Image from "next/image";

export type HomeProps = {
  companies: {
    name: string;
    image: string;
  }[];
};

const Home = async ({ companies }: Readonly<HomeProps>) => {
  const t = await getScopedI18n("content");

  return (
    <>
      <div className="root relative h-screen sm:h-[calc(62vh)] md:h-screen flex justify-center md:justify-start gap-5">
        <div className="z-10 flex flex-col items-center md:items-start justify-center">
          <Typography
            component="h1"
            variant="h2"
            className="text-center md:text-left"
          >
            {t("title.0")} <br />
            <span className="text-gradient">{t("title.1")}</span>
          </Typography>
          <Button
            component="a"
            href="#about"
            size="large"
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
      <div className="root py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {companies.map(({ name, image }) => (
            <div className="flex items-center justify-center">
              <Image
                src={image}
                alt={name}
                width="150"
                height="52"
                className="lg:w-32 xl:w-40"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
