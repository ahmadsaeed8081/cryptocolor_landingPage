import React, { useEffect, useState } from "react";
import "./Timeline.scss";

function Timeline() {
  const [lineHeight, setLineHeight] = useState(0);
  const [inViewItems, setInViewItems] = useState([]);
  const windowHeight = window.innerHeight;

  useEffect(() => {
    const handleScroll = () => {
      const timelineElement = document.querySelector(".timeline");
      const timelineTop = timelineElement.offsetTop;
      const timelineHeight = timelineElement.offsetHeight;
      const timelineBottom = timelineTop + timelineHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= timelineTop - windowHeight / 2) {
        const line = scrollPosition - timelineTop + windowHeight / 2;

        if (line <= timelineHeight) {
          setLineHeight(line + 20);
        }
      }

      const updatedInViewItems = [];
      document.querySelectorAll(".timeline li").forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemBottom = itemTop + item.offsetHeight;

        if (timelineBottom > itemTop && timelineTop < itemBottom) {
          updatedInViewItems.push(index);
        }
      });

      setInViewItems(updatedInViewItems);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set initial state
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowHeight]);

  return (
    <div>
      {/* <div className="header">
        <h1>Scrolling Timeline</h1>
        <p>Scroll down on this codepen to see the timeline in action</p>
      </div> */}

      <div className="timeline">
        <ul>
          <span
            className="default-line"
            style={{ height: `${lineHeight}px` }}
          ></span>
          <span className="draw-line"></span>
          {/* <li className={inViewItems.includes(0) ? "in-view" : ""}>
            <div className="step-meta flex">
              <h1 className="year">2022</h1>
              <div className="step-desc flex flex-col">
                <h1 className="step-title text-[#AF50FF]">
                  NFT Lauch Notification
                </h1>
                <p className="desc">
                  The story so far and what the colorful road ahead looks like
                  for those who become members of the CCC.
                </p>
              </div>
            </div>
          </li> */}
          <li className={inViewItems.includes(0) ? "in-view" : ""}>
            <div className="step-meta flex">
              <h1 className="year"> FEB 2021</h1>
              <div className="step-desc flex flex-col">
                <h1 className="step-title text-[#00FFAC]">NFT Minting</h1>
                <p className="desc">
                  The first Crypto Color Collection was launched and 2000 people
                  bought their own color.
                </p>
              </div>
            </div>
          </li>
          <li className={inViewItems.includes(1) ? "in-view" : ""}>
            <div className="step-meta flex">
              <h1 className="year">DEC 2023</h1>
              <div className="step-desc flex flex-col">
                <h1 className="step-title text-[#FFC700]">Virtual Events </h1>
                <p className="desc">
                  Crypto Color Collection V2 is Launched with new improved color
                  picker and enhanced website features, including the printed
                  wall art version of your color.
                </p>
              </div>
            </div>
          </li>
          <li className={inViewItems.includes(2) ? "in-view" : ""}>
            <div className="step-meta flex">
              <h1 className="year">DEC 2024 </h1>
              <div className="step-desc flex flex-col">
                <h1 className="step-title text-[#00C2FF]">Physical Events</h1>
                <p className="desc">
                  Crypto Color Collection Sponsorship activities.
                </p>
              </div>
            </div>
          </li>
          <li className={inViewItems.includes(3) ? "in-view" : ""}>
            <div className="step-meta flex">
              <h1 className="year">DEC 2025</h1>
              <div className="step-desc flex flex-col">
                <h1 className="step-title text-[#FF6B00]">
                  The Color Festival
                </h1>
                <p className="desc">
                  Crypto Color Collection Live event, use your NFT as an entry
                  ticket to a festival
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
