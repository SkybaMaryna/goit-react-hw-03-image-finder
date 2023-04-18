import React from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';

export const Modal = ({ largeImg, tags, onBackdropClick }) => {
  return (
    <StyledOverlay onClick={onBackdropClick}>
      <StyledModal>
        <img src={largeImg} alt={tags} />
      </StyledModal>
    </StyledOverlay>
  );
};
