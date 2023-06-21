import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Input,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

function EditTaskModal({ task, onUpdateTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  function handleSave() {
    onUpdateTask(task.id, {
      name: editedName,
      description: editedDescription,
    });
    onClose();
  }

  return (
    <Flex>
      <IconButton
        colorScheme="blue"
        icon={<EditIcon />}
        aria-label="Editar"
        onClick={onOpen}
        mr="4"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <Input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              mt={2}
            />
          </ModalBody>

          <ModalFooter>
            <IconButton
              colorScheme="blue"
              icon={<CheckIcon />}
              aria-label="Guardar"
              onClick={handleSave}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default EditTaskModal;
