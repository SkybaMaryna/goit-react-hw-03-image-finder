import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImages } from 'services/api';
import { ThreeDots } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    loading: false,
    error: '',
    page: 1,
    largeImg: null,
    tags: null,
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const imgObj = await getImages(inputValue, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...imgObj.hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSearch = data => {
    this.setState({ inputValue: data, images: [], page: 1 });
  };

  handleLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = (largeImg, tags) => {
    this.setState({ largeImg, tags, showModal: true });
    document.addEventListener('keydown', this.handleKeydown);
  };

  handleKeydown = e => {
    if (e.key === 'Escape') {
      this.setState({ showModal: false });
      document.removeEventListener('keydown', this.handleKeydown);
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.setState({ showModal: false });
    }
  };

  render() {
    const { images, loading, largeImg, tags, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />

        {loading && <ThreeDots />}

        {images.length !== 0 && (
          <>
            <ImageGallery images={images} openModal={this.openModal} />
            <Button onLoadMore={this.handleLoad} />
          </>
        )}

        {showModal && (
          <Modal
            largeImg={largeImg}
            tags={tags}
            onBackdropClick={this.onBackdropClick}
          />
        )}
      </div>
    );
  }
}
