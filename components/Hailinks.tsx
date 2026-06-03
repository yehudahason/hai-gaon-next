"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

export default function Hailinks() {
  const pathname = usePathname();
  return (
    <ul className="hai-links" aria-label="עמודים">
      <li>
        <Link
          href="/book-p"
          className={pathname === "/book-p" ? "active" : ""}
          aria-label="פרקים"
        >
          מפתח
        </Link>
      </li>
      <li>
        <Link
          href="/book"
          className={pathname === "/book" ? "active" : ""}
          aria-label="חלק א"
        >
          חלק א'
        </Link>
      </li>
      <li>
        <Link
          href="/book-2"
          className={pathname === "/book-2" ? "active" : ""}
          aria-label="חלק ב"
        >
          חלק ב'
        </Link>
      </li>
      <li>
        <Link
          href="/book-3"
          className={pathname === "/book-3" ? "active" : ""}
          aria-label="חלק ג"
        >
          חלק ג'
        </Link>
      </li>
    </ul>
  );
}
