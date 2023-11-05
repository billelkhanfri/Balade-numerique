import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "./collaps.css";

function Collapse({ coup_coeurs, id }) {
  const [toggles, setToggles] = useState(coup_coeurs.map(() => true));

  const handleToggle = (index) => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
  };

  return (
    <>
      {coup_coeurs &&
        coup_coeurs.map((item, index) => (
          <div key={index} className="collapse-wrapper">
            <div className="dropDownshowen" onClick={() => handleToggle(index)}>
              <h2>{item.title}</h2>
              <div>
                {!toggles[index] ? <AiFillCaretDown /> : <AiFillCaretUp />}
              </div>
            </div>
            <div
              className={`contentWrapper ${
                !toggles[index] ? "fadeOut" : "fadeIn"
              }`}
            >
              {toggles[index] && <p>{item.text}</p>}
            </div>
          </div>
        ))}
    </>
  );
}

export default Collapse;
