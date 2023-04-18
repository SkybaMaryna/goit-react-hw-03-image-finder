import React from 'react';
import { StyledImageGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          alt={tags}
          openModal={openModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </StyledImageGallery>
  );
};
