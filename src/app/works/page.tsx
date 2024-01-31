"use client";

import { useQuery } from "@tanstack/react-query";
import BigProject from "../../components/BigProject";
import fetchHelper from "../../helpers/fetch-helper";
import { ProjectDto } from "../../utils/api";

export default function ProjectsPage() {
  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
  } = useQuery<ProjectDto[]>({
    queryFn: () => fetchHelper("http://localhost:3001/projects"),
    queryKey: ["projects"],
  });

  return (
    <div className="container">
      <h1>Complete apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {projectsError && <h1>Something went wrong, try it again later.</h1>}
        {projects === null || (projectsLoading && <h1>Loading...</h1>)}
        {projects?.map((project) => (
          <BigProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
