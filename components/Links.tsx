"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();
  return (
    <div className="links">
      <Link
        href="/"
        className={pathname === "/" ? "active" : ""}
        aria-label="עמוד הבית"
      >
        {/* <img src="/home2.svg" alt="" /> */}
        <Image
          className=""
          src="/home2.svg"
          alt="home"
          width={45}
          height={45}
          priority
        />
      </Link>
      <Link
        href="/book"
        className={pathname === "/book" ? "active" : ""}
        aria-label="ספר פתרון חלומות"
      >
        {" "}
        פתרון חלומות לרב האי גאון
      </Link>
      <Link
        href="/roe1"
        className={pathname === "/roe1" ? "active" : ""}
        aria-label="פרק הרואה"
      >
        {" "}
        פרק הרואה
      </Link>

      {/* <Link href="/forum" className={pathname === "/forum" ? "active" : ""}>
        פורומים
      </Link> */}
      <Link href="/about" className={pathname === "/about" ? "active" : ""}>
        אודות
      </Link>
    </div>
  );
}
