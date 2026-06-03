import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <h1>ספר סדר פתרון חלומות</h1>
        <h3>
          מהרב הגאון רבינו האי ז"ל ויוסף הצדיק ודניאל איש חמודות <br />
          ורש"י ז"ל וחכמים אחרים
        </h3>

        <a href="/book" className="enter" aria-label="כניסה לקריאה בספר">
          <span>כניסה לקריאה</span>

          <Image
            className=""
            src="/arrow.png"
            alt=""
            width={30}
            height={30}
            priority
          />
        </a>
      </div>
    </>
  );
}
