import Image from "next/image";

function About() {
  return (
    <section className="px-14 py-32">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 justify-items-center">
        <div>
          <Image
            src="/imgs/about-img.webp"
            width={500}
            height={500}
            alt="about me image"
          />
        </div>
        <div className="w-1/2 lg:w-full text-center lg:text-left">
          <p className="uppercase text-blue-500 mb-4">About me</p>
          <h2 className="mb-5">
            A dedicated Full-stack Developer based in Safi, Morocco. 📍
          </h2>
          <p className="text-gray-400">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
