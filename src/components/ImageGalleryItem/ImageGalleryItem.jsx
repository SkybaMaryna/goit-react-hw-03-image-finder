import PropTypes from 'prop-types';
import {
  StyledGalleryImage,
  StyledGalleryItem,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  url,
  alt,
  openModal,
  largeImageURL,
  tags,
}) => {
  return (
    <StyledGalleryItem onClick={() => openModal(largeImageURL, tags)}>
      <StyledGalleryImage src={url} alt={alt} />
    </StyledGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func.isRequired,
};
