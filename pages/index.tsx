import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { projects } from "../data/projectslist";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-purple-100 bg-purp-700">
      <ul>
        {projects.map((project) => {
          return (
            <Link href={`/projects/${project.url}`} key={project.id}>
              <a>
                <li>{project.name}</li>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
