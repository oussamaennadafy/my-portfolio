import Image from "next/image";
import Link from "next/link";

function Project({
  img,
  title,
  description,
  technologies,
  githubUrl,
  liveDemoUrl,
}) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-[55%_auto] gap-y-10 gap-x-6 w-full h-[600px] lg:h-96 p-5 project-shadow rounded-xl">
      <div className="overflow-hidden rounded-xl landing-page-shadow">
        <Image
          src={img}
          width={500}
          height={1000}
          alt="landing page of project"
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-3 w-full md:w-10/12 xl:w-8/12 mx-auto text-center">
        <p className="font-bold mb-4 uppercase">{title}</p>
        <p className="mb-4 text-gray-500">{description}</p>
        <div className="flex items-center justify-center gap-3 mb-10">
          {technologies.map((Technology) => {
            return (
              <div key={Technology} className="px-4 py-2 technology-box-shadow">
                <p>{Technology}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link
            className="flex items-center justify-between gap-2"
            href={githubUrl}
          >
            <span>Code</span>
            <Image
              src="/icons/github.svg"
              width={30}
              height={30}
              alt="github icon"
            />
          </Link>
          <Link
            href={liveDemoUrl}
            className="flex items-center justify-between gap-2"
          >
            <span>Live Demo</span>
            <Image
              src="/icons/arrow-up-right-from-square-solid.svg"
              width={30}
              height={30}
              alt="github icon"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Project;
