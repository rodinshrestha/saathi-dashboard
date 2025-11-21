import { Suspense } from "react";

import ProjectModule from "@/modules/projects";

const Projects = async () => {
  return (
    <Suspense fallback={null}>
      <ProjectModule />
    </Suspense>
  );
};

export default Projects;
