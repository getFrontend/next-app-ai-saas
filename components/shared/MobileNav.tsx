"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src={"/assets/images/logo-text.png"}
          alt="imagenko logo"
          width={174}
          height={44}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu icon"
                width={32}
                height={32}
                className="cusror-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src={"/assets/images/logo-text.png"}
                  alt="imagenko logo"
                  width={174}
                  height={44}
                />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li key={link.route}
                        className={`${isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark-700`}>
                        <Link className="sidebar-link" href={link.route}>
                          <Image
                            src={link.icon}
                            alt="menu icon"
                            width={18}
                            height={18}
                          />
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav;