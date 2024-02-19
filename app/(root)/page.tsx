import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";
import Link from "next/link";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Your AI magic artist <span className="text-black">who never gets tired!</span>
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

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>

      <footer className="mt-12">
        <div className="flex flex-col gap-2">
          <p className="text-gray-800"><span className="font-bold">Imagenko</span> -  your tool for generating creative and unique images with AI.</p>
          <p className="text-gray-800">Developer: Sergey UP</p>
          <p className="pt-4">© 2024 - All right reserved by AI Magic Artist</p>
        </div>
      </footer>
    </>
  );
};

export default Home;