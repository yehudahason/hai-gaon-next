"use client";

import { searchWord2 } from "../helpers/searching";
import { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [resultH, setResultH] = useState<string[]>([]);
  const [resultR, setResultR] = useState<string[]>([]);
  const [bookH, setBookH] = useState("");
  const [bookR, setBookR] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;
    if (query.length < 2) return;
    const searchArray = query.split(/\s+/).filter(Boolean);
    const arrayH = new Set<string>();
    const arrayR = new Set<string>();

    searchArray.forEach((item) => {
      const matchesH = searchWord2(bookH, item);
      matchesH.forEach((m) => arrayH.add(m));

      const matchesR = searchWord2(bookR, item);
      matchesR.forEach((m) => arrayR.add(m));
    });

    setResultH(Array.from(arrayH));
    setResultR(Array.from(arrayR));
    setShow(true);
  };

  useEffect(() => {
    async function fetchBook() {
      try {
        const res = await fetch("/hai-text.txt");
        const text = await res.text();
        setBookH(text);
        const res2 = await fetch("/roe-text.txt");
        const text2 = await res2.text();
        setBookR(text2);
      } catch (err) {
        console.error(err);
        setResultH(["Something went wrong. Try again Later."]);
        setResultR([]);
      }
    }
    setShow(false);
    fetchBook();
  }, []);

  return (
    <div className="book-container">
      <h1 className="title">חיפוש בספרים</h1>
      <br />
      <p className="center">חיפוש בספר האי גאון ובפרק הרואה מסכת ברכות.</p>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">חפש</label>

        <input
          className="search-input"
          type="text"
          id="search"
          placeholder="הקלד לחיפוש..."
          value={query}
          autoComplete="off"
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" className="search-btn">
          <img src="/img/search.png" alt="search" width={18} />
        </button>
        <div className="search-info">
          <img src="/img/qm.png" alt="" width={20} height={20} />
          <p>
            מחפש מילה מדויקת . ואות אחת ושתי אותיות יותר ממחרוזות המילים לחיפוש.
          </p>
        </div>
      </form>
      <br />
      <hr />
      <br />
      {show && (
        <>
          <h4>רב האי גאון</h4>
          {resultH.length === 0 ? (
            <>
              <p>אין תוצאות</p>
            </>
          ) : (
            <>
              <ul>
                {resultH.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          <h4>מסכת ברכות</h4>
          {resultR.length === 0 ? (
            <>
              <p>אין תוצאות</p>
            </>
          ) : (
            <>
              <ul>
                {resultR.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default Search;
