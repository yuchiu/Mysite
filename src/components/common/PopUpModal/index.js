import React from "react";
import { Button, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./index.scss";

const ErrorModal = ({
  handleClose,
  isModalOpen,
  modalHeader,
  modalMessage
}) => (
  <React.Fragment>
    <Modal
      className="popup-modal"
      size="mini"
      open={isModalOpen}
      onClose={handleClose}
    >
      <Modal.Header>
        <div className="popup-modal__header">{modalHeader}</div>
      </Modal.Header>
      <Modal.Content>
        <div className="popup-modal__message">{modalMessage}</div>
        <br />
        <Button primary fluid onClick={handleClose}>
          OK
        </Button>
      </Modal.Content>
    </Modal>
  </React.Fragment>
);

ErrorModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,

  handleClose: PropTypes.func.isRequired
};

export default ErrorModal;
