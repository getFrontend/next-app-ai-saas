import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Imagenko: your AI artist who never gets tired!
        </h1>
        <ul className="w-full flex-center gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <li
              key={link.route}
            >
              <Link
                href={link.route}
                className="flex-center flex-col gap-3"
              >
                <Image
                  src={link.icon}
                  alt="icon image"
                  width={24}
                  height={24}
                  className="p-4 flex-center w-fit rounded-full bg-white"
                />
                <span className="p-14-medium text-center text-white">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;