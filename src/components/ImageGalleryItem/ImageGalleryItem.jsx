import s from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  tags,
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <li className={s.ImageGalleryItem} onClick={() => openModal(largeImageURL)}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItem_image} />
    </li>
  );
};
