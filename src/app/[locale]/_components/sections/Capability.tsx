import { Chip, Trans, Typography } from "components/atoms";
import { Section } from "components/molecules";
import { capabilities } from "const/capabilities";
import { getScopedI18n } from "locales/server";

const Capability = async () => {
  const t = await getScopedI18n("home.skill");
  const tCommon = await getScopedI18n("common");

  return (
    <Section
      id="skills"
      title={t("title")}
      ariaLabel={tCommon("goTo", { label: t("title").toLowerCase() })}
    >
      <div className="grid gap-8">
        <Typography variant="h6" component="h3">
          <Trans
            text={t("subtitle")}
            tags={{ span: { className: "text-gradient" } }}
          />
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {capabilities.map((capability) => (
            <article
              key={capability.id}
              className="rounded-3xl border border-solid border-divider bg-code/70 p-5"
            >
              <Typography
                variant="h6"
                component="h3"
                className="text-gradient"
              >
                {t(`capabilities.${capability.id}.title`)}
              </Typography>
              <Typography>
                {t(`capabilities.${capability.id}.evidence`)}
              </Typography>
              <Typography variant="overline" component="h4" className="mt-4">
                {t("supporting_technologies")}
              </Typography>
              <div className="mt-3 flex flex-wrap gap-2">
                {capability.technologies.map((technology) => (
                  <Chip key={technology} className="px-2.5 py-1.5 text-sm">
                    {technology}
                  </Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Capability;
