"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Roe1() {
  const pathname = usePathname();
  return (
    <>
      <div className="roe-links">
        <Link
          href="/roe1"
          className={pathname === "/roe1" ? "active" : ""}
          aria-label="נד א"
        >
          נד ע"א{" "}
        </Link>
        <Link
          href="/roe2"
          className={pathname === "/roe2" ? "active" : ""}
          aria-label="נד ב"
        >
          נד ע"ב{" "}
        </Link>
        <Link
          href="/roe3"
          className={pathname === "/roe3" ? "active" : ""}
          aria-label="נה א"
        >
          נה ע"א{" "}
        </Link>
        <Link
          href="/roe4"
          className={pathname === "/roe4" ? "active" : ""}
          aria-label="נה ב"
        >
          נה ע"ב
        </Link>
        <Link
          href="/roe5"
          className={pathname === "/roe5" ? "active" : ""}
          aria-label="נו א"
        >
          נו ע"א
        </Link>
        <Link
          href="/roe6"
          className={pathname === "/roe6" ? "active" : ""}
          aria-label="נו ב"
        >
          נו ע"ב
        </Link>
        <Link
          href="/roe7"
          className={pathname === "/roe7" ? "active" : ""}
          aria-label="נז א"
        >
          נז ע"א
        </Link>
        <Link
          href="/roe8"
          className={pathname === "/roe8" ? "active" : ""}
          aria-label="נז ב"
        >
          נז ע"ב
        </Link>
      </div>
    </>
  );
}
