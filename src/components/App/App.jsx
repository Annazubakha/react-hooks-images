import React from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchPhotos } from 'components/service/api';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { toast } from 'react-toastify';

export class App extends React.Component {
  state = {
    photos: [],
    searchText: '',
    page: 1,
    perPage: 12,
    isLoadMore: false,
    isLoading: false,
    largeImageURL: '',
    error: null,
  };
  componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;
    if (prevState.searchText !== searchText || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchPhotos(searchText, page)
        .then(({ hits, total, totalHits }) => {
          if (hits.length === 0) {
            toast.error(
              'We ary sorry there are not any fotos on your search. Please, try again.'
            );

            return;
          }
          if (page === 1) {
            toast.success(`We found ${totalHits} images on your request!`);
          }
          this.setState(prev => ({
            photos: [...prev.photos, ...hits],
            isLoadMore: page < Math.ceil(total / 12),
          }));
        })
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  handleFormSubmit = searchText => {
    this.setState({
      searchText,
      photos: [],
      page: 1,
      error: null,
      isLoadMore: false,
    });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleClickImg = url => {
    this.setState({ largeImageURL: url });
  };
  render() {
    const { photos, isLoadMore, isLoading, error, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery photos={photos} openModal={this.handleClickImg} />
        {isLoading && <Loader />}
        {isLoadMore && <Button onBtnLoadMoreClick={this.handleLoadMore} />}
        {error &&
          toast.error(
            'Oups! Something went wrong, please try reload the page.'
          )}
        {largeImageURL && (
          <Modal url={largeImageURL} closeModal={this.handleClickImg} />
        )}
      </>
    );
  }
}
