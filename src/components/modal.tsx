import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
  children: React.ReactNode;
}

export const Modal = ({ children, isOpen, onClose }: Props) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt="24px">
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
