import Image from "next/image";
import Link from "next/link";


function Menu({displayMenu, setDisplayMenu}) {
 const handleClick = () => {
  setDisplayMenu(false);
}
  return (
    <div className={`absolute top-0 left-0 w-screen h-screen bg-white ${displayMenu ? "translate-x-0" : "-translate-x-full"} transition-all duration-500`}>
     <button onClick={handleClick} className="p-2">
      <Image
        src="/icons/xmark-solid.svg"
        width={20}
        height={20}
        alt="menu icon"
      />
      </button>
    </div>
  )
}

export default Menu