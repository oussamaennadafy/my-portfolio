import Image from "next/image";

function About() {
  return (
    <section id="About" className="lg:px-14 px-6 lg:pt-32 pt-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:justify-items-start justify-items-center">
        <div className="relative">
          <Image
            className="rounded-2xl"
            src="/imgs/about-img.webp"
            width={450}
            height={450}
            alt="about me image"
          />
          <div className="hidden md:block w-40 h-40 rounded-full bg-white absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4">
            <Image
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-turn"
              src="/imgs/full-stack-web-developer-img.png"
              width={200}
              height={200}
              alt="about me image"
            />
            <Image
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 h-4/12"
              src="/imgs/working-emoji.png"
              width={100}
              height={100}
              alt="about me image"
            />
          </div>
        </div>
        <div className="max-w-xl lg:w-full text-center lg:text-left">
          <p className="uppercase font-black text-blue-500 mb-4">About me</p>
          <h2 className="mb-5 font-black text-xl">
            <span>A dedicated Full-stack Developer based in </span>
            <span>Safi, Morocco. 📍</span>
          </h2>
          <p className="text-gray-500">
            I&apos;m a passionate Full Stack Developer, proficient in both front-end and back-end development. My expertise lies in creating seamless web solutions that balance aesthetics and functionality. From user-friendly interfaces to robust server-side systems, I&apos;m dedicated to efficient and collaborative coding practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
