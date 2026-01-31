"use client";

import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HamburgerMenuClient({ session }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(
    function () {
      setOpen(false);
    },
    [pathname],
  );

  return (
    <div className="text-xl">
      <HamburgerButton open={open} toggle={() => setOpen(!open)} />
      <ul
        className={`fixed right-0 top-0 z-40 flex h-screen w-36 flex-col items-end gap-8 bg-primary-800 px-5 pt-24 text-primary-50 transition-transform duration-300 min-640:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="flex items-center gap-4 transition-colors hover:text-accent-400"
            >
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="transition-colors hover:text-accent-400"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenuClient;
