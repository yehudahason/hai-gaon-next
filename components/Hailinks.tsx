import Link from "next/link";

export default function Hailinks() {
  return (
    <div className="hai-links">
      <Link href="/book" aria-label="חלק א">
        חלק א'
      </Link>
      <Link href="/book-2" aria-label="חלק ב">
        חלק ב'
      </Link>
      <Link href="/book-3" aria-label="חלק ג">
        חלק ג'
      </Link>
    </div>
  );
}
