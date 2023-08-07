import Image from "next/image";
import Link from "next/link";

function Header({setDisplayMenu}) {
  const handleClick = () => {
    setDisplayMenu(true);
  }
  return (
    <header className="px-12 h-20 flex justify-between items-center font-bold shadow-md text-gray-700">
      <Link className="font-extrabold text-xl" href="/">
        Oussama.dev
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex">
          <li className="py-3 px-3 hover:text-[#147efb] transition-all">
            <Link href="#Home">Home</Link>
          </li>
          <li className="py-3 px-3 hover:text-[#147efb] transition-all">
            <Link href="#About">About</Link>
          </li>
          <li className="py-3 px-3 hover:text-[#147efb] transition-all">
            <Link href="#Projects">Projects</Link>
          </li>
          <li className="py-3 px-3 hover:text-[#147efb] transition-all">
            <Link href="#Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleClick} className="p-2">
      <Image
        src="/icons/bars-solid.svg"
        width={20}
        height={20}
        alt="menu icon"
      />
      </button>
    </header>
  );
}

export default Header;
