"use client";

import { useQuery } from "@tanstack/react-query";
import BigProject from "../../components/BigProject";
import fetchHelper from "../../helpers/fetch-helper";
import HarshTagIcon from "../../assets/Icons/HarshTagIcon";
import SmallProject from "../../components/smallProject";
import { BigProjectDto, SmallProjectDto } from "../../utils/api";

export default function ProjectsPage() {
  const {
    data: bigProjects,
    isLoading: bigProjectsLoading,
    error: bigProjectsError,
  } = useQuery<BigProjectDto[]>({
    queryFn: () => fetchHelper("http://localhost:3001/big-projects"),
    queryKey: ["big projects"],
  });

  const {
    data: smallProjects,
    isLoading: smallProjectsLoading,
    error: smallProjectsError,
  } = useQuery<SmallProjectDto[]>({
    queryFn: () => fetchHelper("http://localhost:3001/small-projects"),
    queryKey: ["small projects"],
  });

  return (
    <div className="container">
      <h1 className="flex items-center mt-10 text-xl"><HarshTagIcon className="w-7 h-7" fill="peru" />Complete apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {bigProjectsError && <h1>Something went wrong, try it again later.</h1>}
        {bigProjects === null || (bigProjectsLoading && <h1>Loading...</h1>)}
        {bigProjects?.map((project) => (
          <BigProject key={project.id} project={project} />
        ))}
      </div>

      
      <h1 className="flex items-center mt-16 text-xl"><HarshTagIcon className="w-7 h-7" fill="peru" />Small-projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {smallProjectsError && <h1>Something went wrong, try it again later.</h1>}
        {smallProjects === null || (smallProjectsLoading && <h1>Loading...</h1>)}
        {smallProjects?.map((project) => (
          <SmallProject key={project.id} project={project} />
        ))}
      </div>


    </div>
  );
}
