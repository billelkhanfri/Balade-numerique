import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "./collaps.css";

function Collapse({
  coup_coeur_title,
  coup_coeur_text,
  coup_coeur_title2,
  coup_coeur_text2,
  coup_coeur_title3,
  coup_coeur_text3,
  coup_coeur_text4,
  coup_coeur_title4,
  coup_coeur_title5,
  coup_coeur_text5,
}) {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(true);
  const [toggle5, setToggle5] = useState(true);

  return (
    <>
      {coup_coeur_title && (
        <div className="collapse-wrapper ">
          <div className="dropDownshowen" onClick={() => setToggle1(!toggle1)}>
            <h2>{coup_coeur_title}</h2>
            <div>{!toggle1 ? <AiFillCaretDown /> : <AiFillCaretUp />}</div>
          </div>

          {toggle1 && (
            <div className={`contentWrapper ${!toggle1 ? "fadeOut" : ""}`}>
              <p>{coup_coeur_text}</p>
            </div>
          )}
        </div>
      )}

      {coup_coeur_title2 && (
        <div className="collapse-wrapper">
          <div className="dropDownshowen" onClick={() => setToggle2(!toggle2)}>
            <h2>{coup_coeur_title2}</h2>
            <div>{!toggle2 ? <AiFillCaretDown /> : <AiFillCaretUp />}</div>
          </div>

          {toggle2 && (
            <div className={`contentWrapper ${toggle2 ? "fadeIn" : "fadeOut"}`}>
              <p>{coup_coeur_text}</p>
            </div>
          )}
        </div>
      )}

      {coup_coeur_title3 && (
        <div className="collapse-wrapper">
          <div className="dropDownshowen" onClick={() => setToggle3(!toggle3)}>
            <h2>{coup_coeur_title3}</h2>
            <div>{!toggle3 ? <AiFillCaretDown /> : <AiFillCaretUp />}</div>
          </div>

          {toggle3 && (
            <div className={`contentWrapper ${toggle3 ? "fadeIn" : "fadeOut"}`}>
              <p>{coup_coeur_text3}</p>
            </div>
          )}
        </div>
      )}

      {coup_coeur_title4 && (
        <div className="collapse-wrapper">
          <div className="dropDownshowen" onClick={() => setToggle4(!toggle4)}>
            <h2>{coup_coeur_title4}</h2>
            <div>{!toggle4 ? <AiFillCaretDown /> : <AiFillCaretUp />}</div>
          </div>

          {toggle4 && (
            <div className={`contentWrapper ${toggle4 ? "fadeIn" : "fadeOut"}`}>
              <p>{coup_coeur_text4}</p>
            </div>
          )}
        </div>
      )}

      {coup_coeur_title5 && (
        <div className="collapse-wrapper">
          <div className="dropDownshowen" onClick={() => setToggle5(!toggle5)}>
            <h2>{coup_coeur_title5}</h2>
            <div>{!toggle5 ? <AiFillCaretDown /> : <AiFillCaretUp />}</div>
          </div>

          {toggle5 && (
            <div className={`contentWrapper ${toggle5 ? "fadeIn" : "fadeOut"}`}>
              <p>{coup_coeur_text5}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Collapse;
