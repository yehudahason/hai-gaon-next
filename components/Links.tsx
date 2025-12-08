import Link from "next/link";
import Image from "next/image";

export default function Links() {
  return (
    <div className="links">
      <Link href="/" aria-label="עמוד הבית">
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
      <Link href="/book" aria-label="ספר פתרון חלומות">
        {" "}
        פתרון חלומות לרב האי גאון
      </Link>
      <Link href="/roe1" aria-label="פרק הרואה">
        {" "}
        פרק הרואה
      </Link>

      <a href="/about">אודות</a>
    </div>
  );
}
