/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import Timeline from "./Timeline";
import StepsSection from "./StepsSection";

import Wrapper from "../../routes/Wrapper";
import { ContentIcon, PlusIcon, MinusIcon } from "../../assets/Icons";
// import Content from "./Content";
const colors = [
  "#FF00E5",
  "#0038FF",
  "#FF1F00",
  "#00FF85",
  "#FFC700",
  "#00000",
];
const faqList = [
  {
    title: "How do I pay?",
    detail:
      "You pay in crypto connecting your digital wallet and if buying as a gift the person you are sending it to will also need a Crypto Wallet.",
  },
  {
    title: "Can I purchase more than one color?",
    detail: "Yes, absolutely the worlds colors are yours to choose from.",
  },
  {
    title: "How long does the process take?",
    detail:
      "This varies dependent on how long it takes you to browse, select and then how much you chooser to write when describing the color/adding a message. However the process of minting to being available in you wallet is a matter of just a few minutes.",
  },
  {
    title: "How long do prints take to arrive?",
    detail:
      "This will depend on your location and details of this can be found in that section.",
  },
];
const Main = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const handleToggleExpand = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null); // Collapse the item if it's already expanded
    } else {
      setExpandedItem(index); // Expand the clicked item
    }
  };

  return (
    <Wrapper>
      <div className="lading-page bg-black flex flex-col">
        <div className="hero-section flex flex-col justify-center">
          <video
            src="./images/bg.mp4"
            autoPlay
            className="bg-video"
            title="bg video"
            loop
            muted
          />
          <div className="overlay"></div>
          <div className="wrap wrapWidth flex items-center">
            <div className="hero-block flex flex-col">
              <h1 className="slug">
                Own Your{" "}
                <>
                  <span class="text-[#0FF]">C</span>
                  <span class="text-[#F00]">O</span>
                  <span class="text-[#FFED46]">L</span>
                  <span class="text-[#00FF83]">O</span>
                  {/* <span class="text-[#BD00FF]">U</span> */}
                  <span class="text-[#6587FF]">R</span>
                </>
                <br /> On The Blockchain
              </h1>
              <p className="desc">
                Join our limited-time presale to own a pixel from the
                <br />
                16.7 million available sRGB color combinations on the <br />
                blockchain for eternity
              </p>
              <button className="btn-mint button">Mint Your Color Now</button>
            </div>
          </div>
        </div>
        <div className="total-color-section flex flex-col items-center">
          <h1 className="t-color-title">2,000+ colors minted</h1>
          <p className="t-color-desc">
            Join the Crypto Color Community, own your favourite color both
            digitally and in print.
          </p>
        </div>
        <div className="about-us-section flex">
          <div className="wrap wrapWidth flex">
            <div className="about-us-block flex max-md:flex-col ">
              <div className="left-side flex-1 ">
                <h1 className="sec-title">About Us</h1>
                <p className="sec-desc">
                  The Crypto Color Collection is the first step into the Color
                  NFT ecosystem. It leads the way and shows what can be done
                  with Color NFTs, starting with Color NFT staking on the Ccc
                  Market.
                  <br />
                  <br />
                  The Crypto Color Collection is a collection of one-of-a-kind
                  color collectibles created with the Ethereum standard.
                  <br />
                  <br />
                  Each color you select will be converted into an NFT
                  (Non-Fungible Token) on the Ethereum blockchain that can only
                  be owned by one person, as there is only one of each color.
                  <br />
                  <br />
                  No color will be minted more than once.
                </p>
                <button className="btn-join button">
                  Join Our Pre-sale Now
                </button>
              </div>
              <div className="right-side flex-1">
                <div className="white-1 flex-col">
                  <div className="purple"></div>
                  {/* <p>#00a1fe</p>
                  <h2>Crypto color collection</h2> */}
                </div>
                <div className="white-2 flex-col">
                  <div className="red"></div>
                  <p>#00a1fe</p>
                  <h2 className="mb-3">Crypto Color Collection</h2>
                </div>
                <div className="white-3 flex-col">
                  <div className="orange"></div>
                  <p className="">#00a1fe</p>
                  <h2 className="mb-3">Crypto Color Collection</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="contentWrap wrapWidth">
            <h2 className="contentHeading">
              There's a reason we don't <br />
              see the world in black and white.
            </h2>
            <div className="video-block flex items-center">
              <video
                src="./images/video.mp4"
                autoPlay
                className="video-container"
                title="bg video"
                loop
                muted
              />
            </div>
            <div className="icon">
              <ContentIcon />
            </div>
          </div>
        </div>
        <div className="shades">
          <div className="shadeswarp wrapWidth">
            <p className="shades-des" style={{ fontSize:40 }}>Which color is your favourite?</p>
            <p className="thing-desc" >
            Replace the existing text and replace with-
Browse millions of colors and their unique coded numbers, see if your favourite color or important number/date that is personal to you is still available for you to own. Or you can share with friends and family members, as a one of a kind gift.
<br/><br/>
Own a color on the blockchain and add this NFT to your digital wallet, your unique color minted only once, how many will you own?
You can also choose to print this as an unmatched piece of artwork to hang on your wall.
            </p>
            {/* <h2 className="shades-heading">
              Choose and own from a shades
              <br /> of <span className="shades-span">16.7 million</span>{" "}
              colors.{" "}
            </h2> */}
          </div>
          <div className="flex max-md:flex-col max-md:items-center gap-6 mt-24 w-[95%] mx-auto">
            <Swiper
              slidesPerView={4.8}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 1024px (desktop)
                1024: {
                  slidesPerView: 4.8,
                },
                // when window width is >= 768px (tablet)
                768: {
                  slidesPerView: 3.4,
                },
                // when window width is >= 320px (mobile)
                480: {
                  slidesPerView: 1.3,
                },
                300: {
                  slidesPerView: 1.2,
                },
              }}
            >
              {colors.map((color, index) => (
                <SwiperSlide>
                  <div className="color-block flex flex-col" key={index}>
                    <div
                      className="color-box"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-[#000] text-right">{color}</p>
                    <h2 className="text-[#000] mt-3 text-center font-medium text-lg">
                    Crypto Color Collection                    </h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="things wrapWidth">
          <div className="thingwrap">
            <h2 className="thing-heading">How Things Work</h2>
            <p className="thing-desc">
            The Crypto Color Collection offers buyers the opportunity to own or gift a color that is as unique as they are. A specific color or its color code that holds a special meaning. With the option to then add a name to this color.
No algorithm involved, for machines cannot see and choose colors like the human eye, which has the ability to see 2.3million different tones, shades and color combinations.
            </p>
          </div>
          <div className="things-block flex flex-col gap-6">
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
                    <div className="numb flex items-center justify-center">
                      2
                    </div>
                    <h1 className="numb-lbl"></h1>
                  </div>
                  <div className="number-item flex items-center">
                    <div className="numb flex items-center justify-center">
                      3
                    </div>
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
                    You browse and choose the colour that stands out to you, maybe a childhood memory and favourite car or piece of clothing anything that brings you joy-make it yours.
                      {/* <br />
                      <br />
                      Choose the color that makes you feel most like yourself
                      from the 16.7 million colors in the sRGB color space.
                      <br />
                      <br />
                      Just so you know, the human eye can see about 2.3 million
                      colors*. */}
                    </p>
                  </div>
                  <div className="rb-right flex">
                    <img src="./images/step1.png" className="rb-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="step-item flex">
              <div className="step-left flex ">
                <div className="numbers flex flex-col">
                  <div className="number-item flex items-center">
                    <div className="numb flex items-center justify-center">
                      1
                    </div>
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
                    <div className="numb flex items-center justify-center">
                      3
                    </div>
                    <h1 className="numb-lbl"></h1>
                  </div>
                </div>
              </div>
              <div className="step-right flex items-center justify-center">
                <div className="right-bxo flex">
                  <div className="rb-left flex flex-col">
                    <h1 className="rb-title">
                      Step 2: <br />
                      Enter Custom Name
                    </h1>
                    <p className="desc">
                    Give your color a name that’s meaningful to you, please no profanities.
                      {/* <br />
                      <br />
                      Please, no profanity. Children like colors too. */}
                    </p>
                  </div>
                  <div className="rb-right flex">
                    <img src="./images/step2.png" className="rb-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="step-item flex">
              <div className="step-left flex ">
                <div className="numbers flex flex-col">
                  <div className="number-item flex items-center">
                    <div className="numb flex items-center justify-center">
                      1
                    </div>
                    <h1 className="numb-lbl"></h1>
                  </div>
                  <div className="number-item flex items-center">
                    <div className="numb flex items-center justify-center">
                      2
                    </div>
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
                      Describe Your Color
                    </h1>
                    <p className="desc">
                    Tell the universe what your color means .<br /><br />Or send a special note as a gift to a friend or loved one.<br /><br /> The perfect gift that lasts for eternity.

                    </p>
                  </div>
                  <div className="rb-right flex">
                    <img src="./images/step3.png" className="rb-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <StepsSection /> */}
        </div>

        <div className="road-map-section flex">
          <div className="mapWrap wrapWidth flex flex-col">
            <div className="map-headings flex flex-col items-center">
              <h1 className="title">Roadmap</h1>
              <h1 className="desc" style={{ textAlign:"center" ,paddingTop:18 }}>
              The story so far and what the colorful road ahead looks like for those <br></br> who become members of the CCC.
              </h1>
            </div>
            <Timeline />
          </div>
        </div>
        {/* <div className="flex-col road wrapWidth">
          <p className="desc text-center">Roadmap</p>
          <h2 className="heading">
            Only Our Lucky NFT owners <br />
            will be able to enter.
          </h2>
          <div className="flex justify-center items-center text-white">
            <div class="history-tl-container">
              <ul className="tl">
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="timestamp">2022</div>
                  <div className="item-title text-[#AF50FF]">
                    NFT Lauch Notification
                  </div>
                  <div className="item-detail">
                    Lorem ipsum dolor sit amet
                    <br /> consectetur adipiscing elit,
                    <br />
                    lacus mauris felis.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="timestamp">2022</div>
                  <div className="item-title text-[#00FFAC]">NFT Minting</div>
                  <div className="item-detail">
                    Lorem ipsum dolor sit amet
                    <br /> consectetur adipiscing elit,
                    <br />
                    lacus mauris felis.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="timestamp">2023</div>
                  <div className="item-title text-[#FFC700]">
                    Vertical Events{" "}
                  </div>
                  <div className="item-detail">
                    Lorem ipsum dolor sit amet
                    <br /> consectetur adipiscing elit,
                    <br />
                    lacus mauris felis.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="timestamp">2024</div>
                  <div className="item-title text-[#00C2FF]">
                    Physical Events{" "}
                  </div>
                  <div className="item-detail">
                    Lorem ipsum dolor sit amet
                    <br /> consectetur adipiscing elit,
                    <br />
                    lacus mauris felis.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="timestamp">2025</div>
                  <div className="item-title text-[#FF6B00]">
                    The Color Festival
                  </div>
                  <div className="item-detail">
                    Lorem ipsum dolor sit amet
                    <br /> consectetur adipiscing elit,
                    <br />
                    lacus mauris felis.
                  </div>
                </li>
              </ul>
              <div className="roadmap"></div>
            </div>
          </div>
        </div> */}

        <div className="meta wrapWidth">
          <div className="meta-box">
            <div className="meta-details">
              <h2 className="meta-heading">
                Let's build a better <br /> MetaVerse, together.
              </h2>
              <h3 className="desc-heading">
                Connect with the team and work with us.
              </h3>
              <p className="desc">
                Mint a Color NFT and you’ll get access to the exclusive
                #collectors channel on Discord where you’ll help drive the
                design, development and marketing for the The Crypto Color
                Collection.
              </p>
              <h3 className="desc-heading">The Creator Of The Collections</h3>
              <p className="desc">
                GK - has 30 years of experience in the entertainment industry,
                working with some of the world's most well-known artists and
                brands, including Snoop Dogg, Will I Am, Swedish House Mafia,
                David Guetta, and promoting some of the world's biggest shows.{" "}
              </p>
              <p className="desc">
                The Meta Verse Will be his new stomping ground.
              </p>
              <p className="desc">
                And your color nft will be your ticket to his world. So What Is
                Your Favourite Color?
              </p>
              <h3 className="desc-heading">
                We build in public for the public.
              </h3>
              <p className="desc">
                New to crypto or NFTs? No worries, we’ll help you get up to
                speed. Your beginner’s mind will help inform our strategy and
                product to onboard new collectors and traders and grow the
                market.
              </p>
            </div>
          </div>
        </div>
        <div className="faq wrapWidth">
          <div className="flex faqwrap max-md:flex-col gap-5">
            <div className="flex-1 faq-details">
              <h1 className="faq-heading">
                FREQUENTLY <br />
                ASKED QUESTIONS
              </h1>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, lacus
                mauris felis, lacus mauris felis lacus mauris felis lacus mauris
                felis.
              </p>
              <button className="btn-join button">Join Our Pre-sale Now</button>
            </div>
            <div className="flex-1 faqAry ">
              {faqList.map((faq, index) => (
                <div className="faq-box flex " key={index}>
                  <div
                    className="icon"
                    onClick={() => handleToggleExpand(index)}
                  >
                    {expandedItem === index ? <MinusIcon /> : <PlusIcon />}
                  </div>
                  <div className="flex-col m-4 ">
                    <h2 className="faq-heading">{faq.title}</h2>
                    {expandedItem === index && (
                      <p className="faq-desc mt-3">{faq.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Content /> */}
    </Wrapper>
  );
};

export default Main;
