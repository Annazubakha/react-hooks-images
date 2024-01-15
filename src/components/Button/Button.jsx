import React from 'react';
import s from './Button.module.css';
export const Button = ({ onBtnLoadMoreClick }) => {
  return (
    <div className={s.button_wrapper}>
      <button className={s.button} onClick={onBtnLoadMoreClick}>
        Load more
      </button>
    </div>
  );
};
