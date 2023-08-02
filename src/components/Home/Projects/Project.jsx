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
    <article className="grid grid-cols-1 lg:grid-cols-[55%_auto] w-full h-96 p-3 border border-gray-600 shadow-2xl rounded-xl">
      <div className="overflow-hidden rounded-xl shadow-2xl">
        <Image
          src={img}
          width={500}
          height={1000}
          alt="landing page of project"
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-3 w-3/4 mx-auto text-center">
        <p className="font-bold mb-4">{title}</p>
        <p className="mb-4">{description}</p>
        <div className="flex items-center justify-center gap-3 mb-4">
          {technologies.map((Technology) => {
            return (
              <div className="border px-3 py-1">
                <p>{Technology}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link href={githubUrl}>
            <span>Code</span>
            <Image
              src="/icons/github.svg"
              width={50}
              height={50}
              alt="github icon "
            />
          </Link>
          <Link href={liveDemoUrl}></Link>
        </div>
      </div>
    </article>
  );
}

export default Project;
