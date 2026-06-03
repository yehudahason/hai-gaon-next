import { Metadata } from "next";

export const metadata: Metadata = {
  title: "הורדות",
  description: "ספר פתרון חלומות לרב האי גאון",
  keywords: [
    "dreams",
    "hai gaon",
    "פתרון חלומות",
    "pitron-halomoṭ",
    "רב האי גאון",
  ],
  authors: [{ name: "Yehuda Hason" }],
};

const Download = () => {
  return (
    <div className="book-container">
      <h1 className="title">הורדות</h1>
      <h3>כל כתבי האר"י ז"ל</h3>
      <ul className="list-container" aria-label="כתבי הארי">
        <li>
          <a href="/hari/ETZCHAYIM_HAKADAMA-H.pdf" className="btn">
            ETZCHAYIM_HAKADAMA-H - הקדמה
          </a>
        </li>

        <li>
          <a href="/hari/ETZCHAYIM1-H.pdf" className="btn">
            ETZCHAYIM1-H - עץ חיים חלק ראשון
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM2-H.pdf" className="btn">
            ETZCHAYIM2-H - עץ חיים חלק שני
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM3-H.pdf" className="btn">
            ETZCHAYIM3-H - עץ חיים חלק שלישי הנקרא נהר שלום
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM4-H.pdf" className="btn">
            ETZCHAYIM4-H - יפה שעה
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM5-H.pdf" className="btn">
            ETZCHAYIM5-H - מבוא שערים{" "}
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM6-H.pdf" className="btn">
            ETZCHAYIM6-H - שער ההקדמות
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM7-H.pdf" className="btn">
            ETZCHAYIM7-H - שער מאמרי רשב"י
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM8-H.pdf" className="btn">
            ETZCHAYIM8-H - שער הפסוקים
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM9-H.pdf" className="btn">
            ETZCHAYIM9-H - שער המצות
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM10-H.pdf" className="btn">
            ETZCHAYIM10-H - שער הכוונות חלק ראשון
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM11-H.pdf" className="btn">
            ETZCHAYIM11-H - שער הכוונות חלק שני
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM12-H.pdf" className="btn">
            ETZCHAYIM12-H - שער רוח הקודש
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM13-H.pdf" className="btn">
            ETZCHAYIM13-H - שער הגלגולים
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM14-H.pdf" className="btn">
            ETZCHAYIM14-H - ליקוטי תורה
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM15-H.pdf" className="btn">
            ETZCHAYIM15-H - ארבע מאות שקל כסף
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM16-H.pdf" className="btn">
            ETZCHAYIM16-H - פרי עץ חיים חלק ראשון{" "}
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM17-H.pdf" className="btn">
            ETZCHAYIM17-H - פרי עץ חיים חלק שני
          </a>
        </li>
        <li>
          <a href="/hari/ETZCHAYIM18-H.pdf" className="btn">
            ETZCHAYIM18-H - הליקוטים
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Download;
