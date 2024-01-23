import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiNavigationArrowFill } from "react-icons/pi";

import "./collaps.css";

function Collapse({ coup_coeurs }) {
  const [toggle, setToggle] = useState(false);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + " ......";
  };

  return (
    <>
      {coup_coeurs && Array.isArray(coup_coeurs)
        ? coup_coeurs.map((item, index) => (
            <div key={index} className="colllapse-card-wrapper">
              <div className="collapse-card-title">
                <div className="heart-title">
                  <div className="icon-wrap">
                    <IoIosHeartEmpty />{" "}
                  </div>
                  {item.title}
                </div>
                <div className="icon-location">
                  <PiNavigationArrowFill
                    aria-label="Open in Google Maps"
                    onClick={() => {
                      const url = `https://www.google.com/maps/dir/?api=1&destination=${item.position[0]},${item.position[1]}`;
                      window.open(url, "_blank");
                    }}
                  />
                </div>
              </div>
              <div className="collaspe-card-picture">
                <img src={item.image} alt="" />
              </div>
              <div className="collapsible-card">
                <div
                  className="content"
                  style={{
                    height: toggle ? "fit-content" : "0px",
                    overflowWrap: toggle ? "break-word" : "normal", // For wrap behavior
                    whiteSpace: toggle ? "normal" : "nowrap",
                  }}
                >
                  {toggle ? item.text : truncateText(item.text, 200)}
                </div>
                <div
                  className="collapse-arrow-down"
                  onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                >
                  <MdOutlineKeyboardDoubleArrowDown className="c-a-d" />
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

export default Collapse;
