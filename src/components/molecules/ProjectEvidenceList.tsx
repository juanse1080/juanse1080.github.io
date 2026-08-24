import { Trans, Typography } from "components/atoms";

export type ProjectEvidence = {
  problem: string;
  solution: string;
  stack: string;
  result: string;
};

export type ProjectEvidenceLabels = {
  problem: string;
  solution: string;
  stack: string;
  result: string;
};

export type ProjectEvidenceListProps = {
  evidence: ProjectEvidence;
  labels: ProjectEvidenceLabels;
  valueVariant?: "body" | "h6";
};

const ProjectEvidenceList = ({
  evidence,
  labels,
  valueVariant = "body",
}: Readonly<ProjectEvidenceListProps>) => {
  const evidenceRows = [
    [labels.problem, evidence.problem],
    [labels.solution, evidence.solution],
    [labels.stack, evidence.stack],
    [labels.result, evidence.result],
  ] as const;

  return (
    <dl className="grid gap-3">
      {evidenceRows.map(([label, value]) => (
        <div key={label} className="border-l border-divider pl-3">
          <Typography variant="overline" component="dt" className="mb-1">
            {label}
          </Typography>
          <Typography component="dd" variant={valueVariant} className="mb-0">
            <Trans
              text={value}
              tags={{ span: { className: "text-gradient font-bold" } }}
            />
          </Typography>
        </div>
      ))}
    </dl>
  );
};

export default ProjectEvidenceList;
