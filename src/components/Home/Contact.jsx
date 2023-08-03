import Image from "next/image";

function Contact() {
  return (
    <section className="px-14 py-32">
      <div className="max-w-[1200px] mx-auto">
        <p className="uppercase font-black text-blue-500 mb-4">CONTACT</p>
        <h2 className="mb-5 font-black text-xl">
          <p>Don't be shy! Hit me up! 👇</p>
        </h2>
        <div className="mt-16 flex items-center gap-10">
          <div className="flex items-center gap-5 min-w-[300px]">
            <div className="rounded-full p-6 icon-shadow">
              <Image
                src="/icons/map-location-dot-solid.svg"
                width={40}
                height={40}
                className="text-blue-800"
              />
            </div>
            <div>
              <p className="mb-1 font-semibold">Location</p>
              <p className="text-gray-600">Safi, Morocco</p>
            </div>
          </div>
          <div className="flex items-center gap-5 min-w-[300px]">
            <div className="rounded-full p-6 icon-shadow">
              <Image
                src="/icons/envelope-open-text-solid.svg"
                width={40}
                height={40}
                className="text-blue-800"
              />
            </div>
            <div>
              <p className="mb-1 font-semibold">Email</p>
              <p className="text-gray-600">oussama.ennadafy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
