import Image from "next/image";
import Link from "next/link";

function Project({
  projectData: {
    img,
    title,
    description,
    technologies,
    githubUrl,
    liveDemoUrl,
  },
  isEven,
}) {
  return (
    <article
      className={
        "flex flex-col lg:flex-row gap-y-10 gap-x-6 w-full h-[600px] lg:h-96 p-5 project-shadow rounded-xl"
      }
    >
      <div
        className={`overflow-hidden rounded-xl landing-page-shadow basis-full ${
          isEven ? "order-last" : "order-first"
        }`}
      >
        <Image
          src={img}
          width={1000}
          height={1000}
          alt="landing page of project"
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-3 md:w-10/12 xl:w-8/12 mx-auto text-center">
        <p className="font-bold mb-4 uppercase">{title}</p>
        <p className="mb-4 text-gray-500">{description}</p>
        <div className="flex items-center justify-center flex-wrap gap-3 mb-10">
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
