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
        <h3>נדפס לבקשת הבחור יקר ונבון כמ"ר מנחם בכה"ר דוד טרינקי יצ"ו</h3>
        <h3>על פי דפוס ונציה 5383</h3>

        <br />
        <a href="/book">
          <figure className="gaon-pic-div">
            <Image
              className=""
              src="/haigaonpic.jpg"
              alt="home"
              width={200}
              height={200}
              priority
            />
          </figure>
        </a>

        <a href="/book" className="enter">
          <span> כניסה לקריאה</span>

          <Image
            className=""
            src="/arrow.png"
            alt="home"
            width={45}
            height={45}
            priority
          />
        </a>
        <br />
      </div>
    </>
  );
}
