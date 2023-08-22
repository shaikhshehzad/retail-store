import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import skylineData from "../assets/json/skylineData.json";
import "../components/SkylineHeader.css";
import Modal from "react-modal";
import Popup from './Popup'
Modal.setAppElement("#root");

const SkylineHeader = () => {
  const [banners, setBanners] = useState([]);
  const [intervalTimer, setIntervalTimer] = useState(10000);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupText, setPopupText] = useState('');
// open and close of popup
const openPopup = (text) => {
  setPopupText('');
  console.log(text)
  setPopupText(text);
  console.log(setPopupText)
  setIsPopupOpen(true);
};

const closePopup = () => {
  setIsPopupOpen(false);
  setPopupText('');
};

// end
  useEffect(() => {
    setBanners(skylineData.skyline_banner);
    setIntervalTimer(skylineData.skyline_interval_timer);
  }, []);

  return (
    <div className="skyline-header-parent">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        stopOnHover={false}
        infiniteLoop
        autoPlay
      >
        {skylineData.skyline_banner.map((banner, index) => (
          <div key={index}>
            <p>{banner.promotionTitle}</p>
            <Popup isOpen={isPopupOpen} onClose={closePopup} setPopupText={banner.seeDetailsText} />
            <button onClick={() => openPopup(banner.seeDetailsText)} >Open Popup + {index} </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SkylineHeader;
