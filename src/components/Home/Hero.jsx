import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="lg:px-14 px-4 py-28 bg-slate-100 min-h-[calc(100vh-80px)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-center lg:justify-between text-center lg:text-left gap-10 flex-wrap-reverse lg:flex-nowrap">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 ">
              Full-stack Developer
              <span className="hidden sm:inline">
                <Image
                  className="inline-block ml-3"
                  src="/imgs/waving.1bae5fcfb51082b5c2b4.png"
                  width={60}
                  height={60}
                  alt="waving icon"
                />
              </span>
            </h1>
            <p className="mb-6">
              Hi, I&apos;m Oussama Ennadafy. A passionate Full-stack Developer
              based in Safi, Morocco. 📍
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/oussama-ennadafy"
              >
                <Image
                  src="/icons/linkedIn.svg"
                  width={30}
                  height={30}
                  alt="linkedIn icon"
                />
              </Link>
              <Link target="_blank" href="https://github.com/oussamaennadafy">
                <Image
                  src="/icons/github.svg"
                  width={30}
                  height={30}
                  alt="github icon"
                />
              </Link>
            </div>
          </div>
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="/imgs/my-pic3.jpg"
              width={500}
              height={500}
              alt="oussama ennadafy picture"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-10 flex-wrap justify-center lg:justify-start">
          <p>teck stack</p>
          <span className="mx-4">&#8594;</span>
          <div className="h-24 w-24 flex items-center justify-center rounded-full border border-gray-300 p-3">
            <Image
              className="w-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
              width={100}
              height={100}
              alt="mongodb logo"
            />
          </div>
          <div className="h-24 w-24 flex items-center justify-center rounded-full border border-gray-300 p-3">
            <Image
              className="w-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              width={100}
              height={100}
              alt="express js logo"
            />
          </div>
          <div className="h-24 w-24 flex items-center justify-center rounded-full border border-gray-300 p-3">
            <Image
              className="w-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              width={100}
              height={100}
              alt="rect js logo"
            />
          </div>
          <div className="h-24 w-24 flex items-center justify-center rounded-full border border-gray-300 p-3">
            <Image
              className="w-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              width={100}
              height={100}
              alt="node js logo"
            />
          </div>
          <span className="mx-4">|</span>
          <div className="h-24 w-24 flex items-center justify-center rounded-full border border-gray-300 p-3">
            <Image
              className="w-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
              width={100}
              height={100}
              alt="laravel icon"
            />
          </div>
          <div className="h-24 w-24 flex items-center justify-center rounded-full border border-gray-300 p-3">
            <Image
              className="w-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
              width={100}
              height={100}
              alt="vue js logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
