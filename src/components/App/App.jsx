import React, { useEffect, useState } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchPhotos } from 'components/service/api';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { toast } from 'react-toastify';
export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState(null);
  const handleFormSubmit = searchText => {
    setPhotos([]);
    setPage(1);
    setError(null);
    setIsLoadMore(false);
    setSearchText(searchText);
  };
  const handleClickImg = url => {
    setLargeImageURL(url);
  };
  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  useEffect(() => {
    if (!searchText) return;
    setIsLoading(true);
    (async () => {
      try {
        const { hits, total, totalHits } = await fetchPhotos(searchText, page);
        if (hits.length === 0) {
          toast.error(
            'We ary sorry there are not any fotos on your search. Please, try again.'
          );
          return;
        }
        if (page === 1) {
          toast.success(`We found ${totalHits} images on your request!`);
        }
        setPhotos(prev => [...prev, ...hits]);
        setIsLoadMore(page < Math.ceil(total / 12));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchText, page]);
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery photos={photos} openModal={handleClickImg} />
      {isLoading && <Loader />}
      {isLoadMore && <Button onBtnLoadMoreClick={handleLoadMore} />}
      {error &&
        toast.error('Oups! Something went wrong, please try reload the page.')}
      {largeImageURL && (
        <Modal url={largeImageURL} closeModal={handleClickImg} />
      )}
    </>
  );
};
