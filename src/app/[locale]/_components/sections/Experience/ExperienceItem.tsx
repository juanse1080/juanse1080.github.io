import ExperienceItemDesktop from "./ExperienceItemDesktop";
import ExperienceItemMobile from "./ExperienceItemMobile";
import { ExperienceItemProps } from "./Experience.const";

const ExperienceItem = ({ ...props }: Readonly<ExperienceItemProps>) => {
  return (
    <>
      <ExperienceItemMobile {...props} />
      <ExperienceItemDesktop {...props} />
    </>
  );
};

export default ExperienceItem;
