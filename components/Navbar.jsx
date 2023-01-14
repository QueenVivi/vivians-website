import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/profile.png"
          width="70"
          height="70"
          alt="logo picture with a puppy coding"
        />
      </div>
    </div>
  );
}
