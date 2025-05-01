import { Button, Trans, Typography } from "components/atoms";
import { ArrowForwardIcon } from "components/icons";
import { getScopedI18n } from "locales/server";

const Home = async () => {
  const t = await getScopedI18n("projects");

  return (
    <div className="root relative h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-5 w-full lg:w-1/2">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          className="w-full text-gradient"
        >
          <Trans
            text={t("content.title")}
            tags={{ span: { className: "text-gradient" } }}
          />
        </Typography>
        <Typography component="h2" variant="h6" align="center">
          <Trans
            text={t("content.subtitle")}
            tags={{ span: { className: "text-gradient" } }}
          />
        </Typography>
        <Button
          component="a"
          href="#expense_track"
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
          {t("content.call_to_action")}
        </Button>
      </div>
    </div>
  );
};

export default Home;
