import Image from "next/image";

function About() {
  return (
    <section className="lg:px-14 px-6 lg:my-32 my-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:justify-items-start justify-items-center">
        <div>
          <Image
            className="rounded-2xl"
            src="/imgs/about-img.webp"
            width={450}
            height={450}
            alt="about me image"
          />
        </div>
        <div className="max-w-xl lg:w-full text-center lg:text-left">
          <p className="uppercase font-black text-blue-500 mb-4">About me</p>
          <h2 className="mb-5 font-black text-xl">
            <span>A dedicated Full-stack Developer based in </span>
            <span>Safi, Morocco. 📍</span>
          </h2>
          <p className="text-gray-500">
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
