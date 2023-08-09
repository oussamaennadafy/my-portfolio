import Project from "@/components/Home/Projects/Project";
import projects from "@/../public/json/projects.json";

function index() {
  return (
    <section id="Projects" className="lg:px-14 px-4 lg:pt-32 pt-12">
      <div className="max-w-[1200px] mx-auto">
        <p className="uppercase font-black text-blue-500 mb-4">Projects</p>
        <h2 className="mb-5 font-black text-xl">
          <p>Each project is a unique piece of development 🧩</p>
        </h2>
        <div className="flex flex-col gap-10 py-10">
          {projects.map((projectData, i) => {
            return (
              <Project
                projectData={projectData}
                key={projectData.title}
                isEven={i % 2}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default index;
