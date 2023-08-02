import Project from "@/components/Home/Projects/Project";

function index() {
  return (
    <section className="px-14 py-32">
      <div className="max-w-[1200px] mx-auto">
        <p className="uppercase font-black text-blue-500 mb-4">Projects</p>
        <h2 className="mb-5 font-black text-xl">
          <p>Each project is a unique piece of development 🧩</p>
        </h2>
        <div className="flex flex-col gap-5 py-10">
          <Project
            img="/imgs/project1.webp"
            title="project title"
            description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
            technologies={["html", "css", "nextjs"]}
            githubUrl="https://www.github.com"
            liveDemoUrl="https://www.github.com"
          />
          <Project
            img="/imgs/project1.webp"
            title="project title"
            description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
            technologies={["html", "css", "nextjs"]}
            githubUrl="https://www.github.com"
            liveDemoUrl="https://www.github.com"
          />
          <Project
            img="/imgs/project1.webp"
            title="project title"
            description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
            technologies={["html", "css", "nextjs"]}
            githubUrl="https://www.github.com"
            liveDemoUrl="https://www.github.com"
          />
          <Project
            img="/imgs/project1.webp"
            title="project title"
            description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
            technologies={["html", "css", "nextjs"]}
            githubUrl="https://www.github.com"
            liveDemoUrl="https://www.github.com"
          />
        </div>
      </div>
    </section>
  );
}

export default index;
