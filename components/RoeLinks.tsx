import Link from "next/link";

export default function Roe1() {
  return (
    <>
      <div className="roe-links">
        <Link href="/roe1" aria-label="נד א">
          נד ע"א{" "}
        </Link>
        <Link href="/roe2" aria-label="נד ב">
          נד ע"ב{" "}
        </Link>
        <Link href="/roe3" aria-label="נה א">
          נה ע"א{" "}
        </Link>
        <Link href="/roe4" aria-label="נה ב">
          נה ע"ב
        </Link>
        <Link href="/roe5" aria-label="נו א">
          נו ע"א
        </Link>
        <Link href="/roe6" aria-label="נו ב">
          נו ע"ב
        </Link>
        <Link href="/roe7" aria-label="נז א">
          נז ע"א
        </Link>
        <Link href="/roe8" aria-label="נז ב">
          נז ע"ב
        </Link>
      </div>
    </>
  );
}
