import Image from "next/image";
import Link from "next/link";

function Menu({ displayMenu, setDisplayMenu }) {
  const hideMenu = () => {
    setDisplayMenu(false);
  };
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen bg-white flex items-center justify-center ${
        displayMenu ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-500`}
    >
      <button onClick={hideMenu} className="p-2 absolute right-8 top-5">
        <Image
          src="/icons/xmark-solid.svg"
          width={22}
          height={22}
          alt="menu icon"
        />
      </button>
      <nav>
        <ul className="flex flex-col items-center">
          <li className="py-3 px-3 text-lg hover:text-[#147efb] transition-all">
            <Link onClick={hideMenu} href="#Home">
              Home
            </Link>
          </li>
          <li className="py-3 px-3 text-lg hover:text-[#147efb] transition-all">
            <Link onClick={hideMenu} href="#About">
              About
            </Link>
          </li>
          <li className="py-3 px-3 text-lg hover:text-[#147efb] transition-all">
            <Link onClick={hideMenu} href="#Projects">
              Projects
            </Link>
          </li>
          <li className="py-3 px-3 text-lg hover:text-[#147efb] transition-all">
            <Link onClick={hideMenu} href="#Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
