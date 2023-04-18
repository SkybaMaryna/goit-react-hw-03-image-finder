import React from 'react';
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
