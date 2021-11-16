import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';

import 'react-responsive-modal/styles.css';
const customStyles = {
  content: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: '3.5rem',
    paddingTop: '141.42%',
    maxHeight: 'calc(100vh - 3.5rem)',
  },
};

const containerStyles = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  paddingTop: '141.42%',
};
const iframeStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  height: '100%',
};

const GoogleLightBox = ({ id = 1, isOpen, closeModal }) => {
  const [view, setView] = useState(false);
  console.log({ id, isOpen, closeModal, view });

  const DRIVE_LINKS = [
    {
      id: 11,
      title: 'Health Misinformation Report',
      pdfLink: 'https://drive.google.com/file/d/17vfPNks54GyRGDbr3wzOhDYrGnaBr0NC/preview',
    },
    {
      id: 1,
      title: '1. Immunisation',
      pdfLink: 'https://drive.google.com/file/d/1sasPf64d7BBCs_GgkZLgbeqcvlJKyP0M/preview',
    },
    {
      id: 2,
      title: '2. Nutrition',
      pdfLink: 'https://drive.google.com/file/d/1oTHLaYKd-HDPEIwmcF2FzF37gknOMRTl/preview',
    },
    {
      id: 3,
      title: '3. Menstrual Health',
      pdfLink: 'https://drive.google.com/file/d/1f7pqQarzFydXkw3BQpntTiLCKwTN6AlT/preview',
    },
    {
      id: 4,
      title: '4. Maternal Health',
      pdfLink: 'https://drive.google.com/file/d/1QKcc1fvNHKB1eMgV3an9KcfEAMhBcZPN/preview',
    },
    {
      id: 5,
      title: '5. Sexual Reproductive Health',
      pdfLink: 'https://drive.google.com/file/d/13v7w1kh6JcSPSenvfuK7_83T3xtPWmck/preview',
    },
    {
      id: 6,
      title: '6. Cancer',
      pdfLink: 'https://drive.google.com/file/d/1PJvpXP0Y9E1Cpn_0r7kguO8p2Tl4Chvb/preview',
    },
    {
      id: 7,
      title: '7. COVID-19',
      pdfLink: 'https://drive.google.com/file/d/1SZbVid7nAQ81FvsVNZtBZdGAOoUlbBqh/preview',
    },
    {
      id: 8,
      title: '8. Public Health Concerns',
      pdfLink: 'https://drive.google.com/file/d/1d2Z_g7PTwKBEmEyfowfB3YtYu6UGv_Pq/preview',
    },
    {
      id: 9,
      title: '9. Mental Health',
      pdfLink: 'https://drive.google.com/file/d/1dsjs0VhZhcC3XrHCNzHPnQwa4Z5cVe0l/preview',
    },
    {
      id: 10,
      title: '10. Non-Communicable Diseases',
      pdfLink: 'https://drive.google.com/file/d/1FfMlNQmr7QvgVJaiOdAu1SnJ7cpi-6LR/preview',
    },
  ];
  useEffect(() => {
    id && setView(true);
  }, [id]);
  useEffect(() => {
    setView(false);
  }, [view]);
  const item = DRIVE_LINKS.find((item) => id == item.id);
  console.log({ item, id });

  //Modal.setAppElement('#gdrive-lightbox');
  return (
    <>
      <div>
        <Modal
          open={isOpen}
          showCloseIcon
          onClose={closeModal}
          contentLabel="G-Drive Modal"
          styles={{
            modal: {
              marginTop: '3.5rem',
              width: 'calc(100% - 2.4rem)',
              maxHeight: 'calc(100vh - 3.5rem)',
            },
            closeButton: { color: '#000', background: '#fff', border: '1px solid #000' },
          }}
          center
        >
          <div style={containerStyles}>
            {item && (
              <iframe
                src={item.pdfLink}
                width="640"
                height="800"
                allow="autoplay"
                style={iframeStyles}
              ></iframe>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default GoogleLightBox;
