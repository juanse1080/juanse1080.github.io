import { Chip } from "components/atoms";
import {
  ProjectEvidence,
  ProjectEvidenceLabels,
  ProjectEvidenceList,
} from "components/molecules";
import { PropsWithChildren } from "react";
import { merge } from "utils/clsx";

export type ProjectItemProps = PropsWithChildren<{
  id: string;
  evidence: ProjectEvidence;
  labels: ProjectEvidenceLabels;
  skills: string[];
}>;

const ProjectItem = ({
  id,
  skills,
  children,
  evidence,
  labels,
}: Readonly<ProjectItemProps>) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-6 gap-5">
      <div className="col-span-1 2xl:col-start-1 2xl:col-span-3">
        <ProjectEvidenceList
          evidence={evidence}
          labels={labels}
          valueVariant="h6"
        />
        <div className={merge("flex gap-2 flex-wrap h-min mt-5")}>
          {skills?.map((skill) => (
            <Chip key={skill} className="px-2.5 py-1.5 text-sm">
              {skill}
            </Chip>
          ))}
        </div>
      </div>
      <a
        href={`#${id}`}
        className={merge(
          "col-start-1 md:col-start-2 2xl:col-span-2 2xl:col-start-5",
          "group bg-code rounded-3xl border-divider border border-solid transition-colors hover:border-secondary-100 cursor-pointer overflow-hidden h-min"
        )}
      >
        {children}
      </a>
    </div>
  );
};

export default ProjectItem;
