import Hailinks from "@/components/Hailinks";
import Links from "@/components/Links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "מפתח",
  description: "מפתח לספר פתרון חלומות לרב האי גאון",
  keywords: [
    "dreams",
    "hai gaon",
    "פתרון חלומות",
    "pitron-halomoṭ",
    "רב האי גאון",
  ],
  authors: [{ name: "Yehuda Hason" }],
};
export default function Book() {
  return (
    <>
      <div className="book-container">
        <h1>סדר פתרון חלומות</h1>
        <h3>
          מהרב הגאון רבינו האי ז"ל ויוסף הצדיק ודניאל איש חמודות <br />
          ורש"י ז"ל וחכמים אחרים
        </h3>

        <h4>עמוד</h4>
        <Hailinks />
        <br />

        <div className="prakim amud">
          <a href="/book#eretz">
            <b>העמים ארצות והגבולות והמדינות</b>
          </a>
          <a href="/book#water">
            <b>ביסוד המים</b>
          </a>
          <a href="/book#wind">
            <b> ברוחות</b>
          </a>
          <a href="/book#metal">
            <b> במתכות</b>
          </a>
          <a href="/book#fire">
            <b> ביסוד האש</b>
          </a>
          <a href="/book#seeds">
            <b> בזרעים </b>
          </a>
          <a href="/book#tree">
            <b> באילנות</b>
          </a>
          <a href="/book#fruit">
            <b> בפירות</b>
          </a>
          <a href="/book#tamzit">
            <b> בתמציות היוצא מהם </b>
          </a>
          <a href="/book#ship">
            <b> בספינות שהם ג"כ מעץ</b>
          </a>
          <a href="/book#cow">
            <b>בבהמות טהורות</b>
          </a>
          <a href="/book#cow2">
            <b>בבהמות טמאות</b>
          </a>

          <a href="/book-2#animal">
            <b>חיות מזיקות</b>
          </a>
          <a href="/book-2#animal2">
            <b>בחיות שאינן מזיקות</b>
          </a>
          <a href="/book-2#bird">
            <b>בעופות </b>
          </a>
          <a href="/book-2#bird2">
            <b>בעופות טמאות </b>
          </a>
          <a href="/book-2#fish">
            <b> בדגים </b>
          </a>
          <a href="/book-2#milk">
            <b>בחלב וגבינה</b>
          </a>
          <a href="/book-2#eggs">
            <b> בביצים </b>
          </a>
          <a href="/book-2#honey">
            <b> בדבש</b>
          </a>
          <a href="/book-2#meat">
            <b> בבשר </b>
          </a>
          <a href="/book-2#human">
            <b> באדם עצמו</b>
          </a>
          <a href="/book-2#king">
            <b> במלך ושרים גדולים</b>
          </a>
          <a href="/book-2#woman">
            <b> בנשים ושכיבתן </b>
          </a>
          <a href="/book-2#dead">
            <b> במתים</b>
          </a>
          <a href="/book-2#clothes">
            <b> במלבושי האדם</b>
          </a>

          <a href="/book-3#stars">
            <b> בחמה ולבנה וכוכבים </b>
          </a>
          <a href="/book-3#thunder">
            <b> הפרק הב' ברעמים</b>
          </a>
          <a href="/book-3#books">
            <b>הפרק הג' בספרים </b>
          </a>
          <a href="/book-3#days">
            <b>הימים בחודש </b>
          </a>
          <a href="/book-3#end">
            <b>חתימת הספר</b>
          </a>
        </div>
        <br />

        <br />
        <Hailinks />
      </div>
    </>
  );
}
