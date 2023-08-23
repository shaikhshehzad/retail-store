import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import skylineData from "../assets/json/skylineData.json";
import "../components/SkylineHeader.css";
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Import your custom CSS file

const SkylineHeader = () => {
  const [banners, setBanners] = useState([]);
  const [intervalTimer, setIntervalTimer] = useState(10000);
  const [popupText, setPopupText] = useState('');

  useEffect(() => {
    setBanners(skylineData.skyline_banner);
    setIntervalTimer(skylineData.skyline_interval_timer);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {

    console.log(data)
    setPopupData(data); // Store the data you want to pass
    setShow(true);
  };

  return (
    <>
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
            <p onClick={() => handleShow(banner.seeDetailsText)} >{banner.promotionTitle}</p>
          </div>
        ))}
      </Carousel>
    </div>

    <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Offer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {popupData && (
            <p>Data received: {popupData}</p>
          )}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>


    </>
  );
};

export default SkylineHeader;
