import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="px-8 py-10 bg-slate-700 text-white flex items-center justify-between gap-5">
      <p>Copyright © 2023. All rights are reserved</p>
      <div className="flex items-center gap-3">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/oussama-ennadafy"
        >
          <Image
            src="/icons/white-linkedin.svg"
            width={30}
            height={30}
            alt="linkedIn icon"
          />
        </Link>
        <Link target="_blank" href="https://github.com/oussamaennadafy">
          <Image
            src="/icons/white-github.svg"
            width={30}
            height={30}
            className="fill-white"
            alt="github icon"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
