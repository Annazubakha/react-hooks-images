import React, { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscPress);
  }
  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal('');
    }
  };

  handleEscPress = event => {
    if (event.code === 'Escape') this.props.closeModal('');
  };
  render() {
    return (
      <div className={s.Overlay}>
        <div className={s.Modal} onClick={this.handleOverlayClick}>
          <img src={this.props.url} alt="" width="70%" />
        </div>
      </div>
    );
  }
}
