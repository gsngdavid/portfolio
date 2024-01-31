import Image from "next/image";
import Button from "./ui/Button";
import { ProjectDto } from "../utils/api";
import { ButtonVariant } from "../types/enums";

function BigProject({ project }: { project: ProjectDto }) {
  return (
    <div className="flex flex-col justify-between border border-gray">
      <div className="">
        <Image
          src={project.imageUrl}
          alt={project.name}
          width={100}
          height={100}
          className="w-full object-fit"
        />
        <div className="text-sm">
          <div className="flex flex-wrap gap-x-3 text-gray text-sm border-y border-gray py-1 px-2">
            {project.languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
          </div>
          <div className="flex flex-col justify-between py-3 px-2 space-y-2">
            <h1 className="text-lg">{project.name}</h1>
            <p className="text-gray">{project.description}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 py-3 px-2 text-sm">
        <Button>Live &lt;~&gt;</Button>
        <Button variant={ButtonVariant.SECONDARY}>Cached &ge;</Button>
      </div>
    </div>
  );
}

export default BigProject;
