"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";

export default function Links() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      // 1. Ensure refs are safely populated
      // 2. Check if the click happened outside BOTH the button and the menu
      if (
        buttonRef.current &&
        menuRef.current &&
        !buttonRef.current.contains(target) &&
        !menuRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setMenuOpen(false); // Ensure menu is closed when component unmounts
    };
  }, []);
  return (
    <header className={`links` + (menuOpen ? " open" : "")}>
      <button
        ref={buttonRef}
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-haspopup="true"
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <img
            src="/img/menu-close.svg"
            alt="close menu"
            width={25}
            height={25}
          />
        ) : (
          <img
            src="/img/menu-burger.svg"
            alt="open menu"
            width={28}
            height={25}
          />
        )}
      </button>
      <ul className="menu" ref={menuRef} aria-label="Menu">
        <li className={pathname === "/" ? "active" : ""}>
          <Link
            href="/"
            className={pathname === "/" ? "home active" : "home"}
            aria-label="עמוד הבית"
          >
            {/* <img src="/home2.svg" alt="" /> */}
            <Image
              className="home-icon"
              src="/home2.svg"
              alt="home"
              width={20}
              height={20}
              priority
            />
          </Link>
        </li>

        <li className={pathname === "/book" ? "active" : ""}>
          <Link
            href="/book"
            className={pathname === "/book" ? "active" : ""}
            aria-label="ספר פתרון חלומות"
          >
            פתרון חלומות לרב האי גאון
          </Link>
        </li>

        <li className={pathname === "/roe1" ? "active" : ""}>
          <Link
            href="/roe1"
            className={pathname === "/roe1" ? "active" : ""}
            aria-label="פרק הרואה"
          >
            פרק הרואה
          </Link>
        </li>

        {/* <li><Link href="https://forum.pitron-halomot.org/">פורום</Link></li> */}

        <li className={pathname === "/download" ? "active" : ""}>
          <Link
            href="/download"
            className={pathname === "/download" ? "active" : ""}
          >
            הורדות
          </Link>
        </li>

        <li className={pathname === "/search" ? "active" : ""}>
          <Link
            href="/search"
            className={pathname === "/search" ? "active" : ""}
          >
            חיפוש{" "}
            <img
              src="/img/searchy.png"
              alt="search icon"
              width={20}
              height={20}
              style={{ transform: "translateY(3px)" }}
            />
          </Link>
        </li>

        <li className={pathname === "/about" ? "active" : ""}>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            אודות
          </Link>
        </li>
      </ul>
    </header>
  );
}
