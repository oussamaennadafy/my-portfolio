import Link from "next/link";

function Header() {
  return (
    <header className="px-12 h-20 flex justify-between items-center font-bold shadow-md text-gray-700">
      <Link className="font-extrabold text-xl" href="/">
        Osama.dev
      </Link>
      <nav>
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
    </header>
  );
}

export default Header;
