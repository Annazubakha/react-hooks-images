import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {photos.map(({ id, tags, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          openModal={openModal}
          key={id}
          largeImageURL={largeImageURL}
          alt={tags}
          webformatURL={webformatURL}
        />
      ))}
    </ul>
  );
};
