import { SmallProjectDto } from "../utils/api";
import Button from "./ui/Button";

export default function SmallProject({
  project,
}: {
  project: SmallProjectDto;
}) {
  return (
    <div className="flex flex-col border border-gray text-sm text-gray">
      <div className="px-3 py-2 flex flex-wrap gap-x-2 border-b border-gray">
        {project.technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-between p-3">
        <div className="pb-4">
          <h1 className="text-white text-lg my-2">{project.name}</h1>
          <p>{project.description}</p>
        </div>

        <Button>Github &lt;~&gt;</Button>
      </div>
    </div>
  );
}
