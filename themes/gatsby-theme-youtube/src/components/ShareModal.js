/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import {
  FaTimes,
  FaShareAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaEnvelope,
} from 'react-icons/fa';
import { jsx } from 'theme-ui';
import Modal from 'react-modal';

const ShareModal = ({ title, url }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  let textArea = null;
  const openModal = () => {
    setModalIsOpen(true);
    setCopySuccess(false);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          url,
        })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
      openModal();
    }
  };
  const handleCopy = (e) => {
    const el = textArea;
    el.select();
    document.execCommand('copy');
    setCopySuccess(true);
  };
  return (
    <>
      <button
        onClick={handleShare}
        sx={{
          ml: 'auto',
          display: 'block',
          p: 2,
          mr: 4,
          px: [null, null, null, 4],
          bg: (theme) => `${theme.colors.gray[3]}`,
          textTransform: 'uppercase',
          textAlign: 'center',
          fontWeight: 'medium',
          fontSize: 1,
          borderRadius: 'default',
          transition: 'all 0.5s',
          ':hover': { bg: '#e62117', color: 'white' },
          ':focus': { outline: 'none' },
        }}
      >
        <FaShareAlt sx={{ display: 'inline-block', mr: 2 }} />
        Share
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Share Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <header sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
            <h4>Share</h4>
            <button onClick={closeModal}>
              <FaTimes aria-label="modal close button" />
            </button>
          </header>
          <hr />
          <div
            className="targets"
            sx={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '20px',
              marginBottom: '20px',
              a: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                pt: '8px',
                pb: '8px',
                color: '#777',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '1.1',
                letterSpacing: '2px',
                textTransform: 'capitalize',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                borderRadius: '4px',
                border: '1px solid #ddd',
                cursor: 'pointer',
                svg: {
                  width: '20px',
                  height: '20px',
                  mr: '7px',
                },
              },
            }}
          >
            <a
              href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`}
              title="Share on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare size="1.5rem" color="#3b5998" />
              <span>Facebook</span>
            </a>
            <a
              href={`https://twitter.com/share?text=${encodeURIComponent(
                title,
              )}-&url=${encodeURIComponent(url)}`}
              title="Tweet on Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare size="1.5rem" color="#1da1f2" />
              <span>Twitter</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${title}-${encodeURIComponent(url)}`}
              title="Share on Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare size="1.5rem" color="#25d366" />
              <span>Whatsapp</span>
            </a>
            <a
              href={`mailto:?subject=I wanted you to see this site&body=Check out this site: ${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size="1.5rem" color="#363636" />
              <span>Email</span>
            </a>
          </div>
          <div
            className="link"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '4px',
              backgroundColor: '#eee',
            }}
          >
            <textarea
              sx={{
                marginRight: '15px',
                overflow: 'hidden',
                textOverflow: ' ellipsis',
                whiteSpace: 'nowrap',
                resize: 'none',
                bg: '#eee',
                fontSize: '1.25rem',
                lineHeight: '0.71',
                fontFamily: 'body',
                height: ['auto', 'auto', '1.25rem'],
                width: ['auto', 'auto', '474px'],
              }}
              readOnly
              ref={(link) => (textArea = link)}
              value={url}
            />
            <button
              className="copy-link"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                pt: '8px',
                pb: '8px',
                color: '#777',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '1.1',
                letterSpacing: '2px',
                textTransform: 'capitalize',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                borderRadius: '4px',
                border: '1px solid #ddd',
                cursor: 'pointer',
                pl: '30px',
                pr: '30px',
              }}
              onClick={handleCopy}
            >
              Copy Link
            </button>
            {copySuccess ? <div style={{ color: 'green' }}>Success!</div> : null}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShareModal;
