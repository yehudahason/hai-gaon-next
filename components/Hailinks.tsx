import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hailinks() {
  const pathname = usePathname();
  return (
    <div className="hai-links">
      <Link
        href="/book"
        className={pathname === "/book" ? "active" : ""}
        aria-label="חלק א"
      >
        חלק א'
      </Link>
      <Link
        href="/book-2"
        className={pathname === "/book-2" ? "active" : ""}
        aria-label="חלק ב"
      >
        חלק ב'
      </Link>
      <Link
        href="/book-3"
        className={pathname === "/book-3" ? "active" : ""}
        aria-label="חלק ג"
      >
        חלק ג'
      </Link>
    </div>
  );
}
