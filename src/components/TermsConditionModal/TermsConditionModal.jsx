import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';

import { PropTypes } from 'prop-types';

const TermsConditionModal = ({ onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xs', md: 'xl' }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Terms &amp; Conditions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            I agree to have my furniture/home goods out and ready for the agreed upon date and time.
            They will either be in the garage (ground level) or driveway with easy access for
            pickup. They will be in a useful condition and not have rips, tears, or stains, or be
            broken, chipped, or in need of cleaning.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

TermsConditionModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

TermsConditionModal.defaultProps = {
  isOpen: false,
  onClose: () => {},
};
export default TermsConditionModal;
