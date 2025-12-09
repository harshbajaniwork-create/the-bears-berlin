import { Link } from "@tanstack/react-router";
import React from "react";

const ProjectFooter = ({ prevProject, nextProject }) => {
  return (
    <footer className="flex w-full items-center justify-center cursor-pointer mt-16 pb-4">
      <div className="flex items-center justify-between w-full max-w-[1700px]">
        <Link to={prevProject}>
          <h1 className="text-2xl sm:text-7xl font-bold text-black dark:text-white">
            &lt; Previous Project{" "}
          </h1>
        </Link>
        <Link to={nextProject}>
          <h1 className="text-2xl sm:text-7xl  font-bold text-black dark:text-white">
            Next Project &gt;
          </h1>
        </Link>
      </div>
    </footer>
  );
};

export default ProjectFooter;
