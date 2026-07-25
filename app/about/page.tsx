import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות",
  description: 'מהדורת אינטרנט לספר סדר פתרון חלומות מרב האי גאון זצ"ל',
};

export default function About() {
  return (
    <>
      <div className="about-container">
        <h1>אודות</h1>

        <p>
          מהדורת אינטרנט לספר סדר פתרון חלומות מרב האי גאון זצ&quot;ל נעתק
          כלשונו ללא שינוי.נוסף פרק הרואה ממסכת ברכות לפתרון חלומות . אלו מקורות
          האמינים והטובים ביותר לפתרון חלומות . ויש לקחת ברצינות את כל הנאמר רק
          לדעת שניתן לתקן חלום רע על ידי כמה אופנים מקובלים .
        </p>
        <span className="flex-about">
          <p>צור קשר:</p>
          <a href="mailto:admin@pitron-halomot.org">admin@pitron-halomot.org</a>
        </span>

        <figure className="hai-img-con">
          <Image
            className=""
            src="/haigaonpic.jpg"
            alt="ספר פתרון חלומות"
            width={320}
            height={450}
            priority
          />
        </figure>

        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="business" value="WY3UA9TDCE5KA" />
          <input type="hidden" name="no_recurring" value="1" />
          <input
            type="hidden"
            name="item_name"
            value="For pitron-halomot.org support"
          />
          <input type="hidden" name="currency_code" value="USD" />
          <label htmlFor="submit">תרומה לאתר</label>
          <input
            id="submit"
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        </form>
      </div>
    </>
  );
}
