import React, { useEffect } from 'react';
import s from './Modal.module.css';
export const Modal = ({ url, closeModal }) => {
  useEffect(() => {
    const handleEscPress = event => {
      if (event.code === 'Escape') closeModal('');
    };

    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [closeModal]);
  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) closeModal('');
  };

  return (
    <div className={s.Overlay}>
      <div className={s.Modal} onClick={handleOverlayClick}>
        <img src={url} alt="" width="70%" />
      </div>
    </div>
  );
};
