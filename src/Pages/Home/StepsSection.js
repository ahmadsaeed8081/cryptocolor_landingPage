import React from "react";
const headlines = [
  "Explore our world",
  "View all its beauty",
  "Take lots of photos",
  "Each one of them pretty",
];
const imageUrls = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1506260408121-e353d10b87c7.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1506744038136-46273834b3fb.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1523712999610-f77fbcfc3843.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1501785888041-af3ef285b470.jpg",
];
const StepsSection = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-inner" id="section-0">
          <figure
          // style={{
          //   backgroundImage: `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1506744038136-46273834b3fb.jpg")`,
          // }}
          ></figure>
          <div className="step-item flex">
            <div className="step-left flex ">
              <div className="numbers flex flex-col">
                <div className="number-item flex items-center">
                  <div className="numb bg-gradient flex items-center justify-center">
                    1
                  </div>
                  <h1 className="numb-lbl">
                    Step 1:
                    <br />
                    Select A color
                  </h1>
                </div>
                <div className="number-item flex items-center">
                  <div className="numb flex items-center justify-center">2</div>
                  <h1 className="numb-lbl"></h1>
                </div>
                <div className="number-item flex items-center">
                  <div className="numb flex items-center justify-center">3</div>
                  <h1 className="numb-lbl"></h1>
                </div>
              </div>
            </div>
            <div className="step-right flex items-center justify-center">
              <div className="right-bxo flex">
                <div className="rb-left flex flex-col">
                  <h1 className="rb-title">
                    Step 1: <br />
                    Select A color
                  </h1>
                  <p className="desc">
                    No algorithm involved, for machines cannot see.
                    <br />
                    <br />
                    Choose the color that makes you feel most like yourself from
                    the 16.7 million colors in the sRGB color space.
                    <br />
                    <br />
                    Just so you know, the human eye can see about 2.3 million
                    colors*.
                  </p>
                </div>
                <div className="rb-right flex">
                  <img src="./images/step1.png" className="rb-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-inner" id="section-1">
          <figure></figure>
          <div className="step-item flex">
            <div className="step-left flex ">
              <div className="numbers flex flex-col">
                <div className="number-item flex items-center">
                  <div className="numb flex items-center justify-center">1</div>
                  <h1 className="numb-lbl"></h1>
                </div>
                <div className="number-item flex items-center">
                  <div className="numb bg-gradient flex items-center justify-center">
                    2
                  </div>
                  <h1 className="numb-lbl">
                    Step 2:
                    <br />
                    Enter Cutom Name
                  </h1>
                </div>
                <div className="number-item flex items-center">
                  <div className="numb flex items-center justify-center">3</div>
                  <h1 className="numb-lbl"></h1>
                </div>
              </div>
            </div>
            <div className="step-right flex items-center justify-center">
              <div className="right-bxo flex">
                <div className="rb-left flex flex-col">
                  <h1 className="rb-title">
                    Step 2: <br />
                    Name
                  </h1>
                  <p className="desc">
                    There is an unique character to each shade of color. Get
                    creative and give your color a name you can connect with.
                    <br />
                    <br />
                    Please, no profanity. Children like colors too.
                  </p>
                </div>
                <div className="rb-right flex">
                  <img src="./images/step2.png" className="rb-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-inner" id="section-2">
          <figure></figure>
          <div className="step-item flex">
            <div className="step-left flex ">
              <div className="numbers flex flex-col">
                <div className="number-item flex items-center">
                  <div className="numb flex items-center justify-center">1</div>
                  <h1 className="numb-lbl"></h1>
                </div>
                <div className="number-item flex items-center">
                  <div className="numb flex items-center justify-center">2</div>
                  <h1 className="numb-lbl"></h1>
                </div>
                <div className="number-item flex items-center">
                  <div className="numb bg-gradient flex items-center justify-center">
                    3
                  </div>
                  <h1 className="numb-lbl">
                    Step 3:
                    <br />
                    Describe Your Color
                  </h1>
                </div>
              </div>
            </div>
            <div className="step-right flex items-center justify-center">
              <div className="right-bxo flex">
                <div className="rb-left flex flex-col">
                  <h1 className="rb-title">
                    Step 3: <br />
                    Describe.
                  </h1>
                  <p className="desc">
                    This is my purple. There are some like it, but none exactly
                    like mine.
                    <br />
                    <br />
                    Your color deserves a few words (or an essay) to be said
                    about it. Tell the universe what your color means.
                  </p>
                </div>
                <div className="rb-right flex">
                  <img src="./images/step3.png" className="rb-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StepsSection;
