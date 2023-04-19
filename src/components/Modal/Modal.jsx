import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';

const modalDiv = document.querySelector('#modal');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return ReactDOM.createPortal(
      <StyledOverlay onClick={this.props.onBackdropClick}>
        <StyledModal>
          <img src={this.props.largeImg} alt={this.props.tags} />
        </StyledModal>
      </StyledOverlay>,
      modalDiv
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onBackdropClick: PropTypes.func.isRequired,
};
