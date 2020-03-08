import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from "reactstrap";

const ModalRow = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <tr
      className={
        props.logRow.type === "1"
          ? "row1"
          : props.logRow.type === "2"
          ? "row2"
          : "row3"
      }
      onClick={toggle}
    >
      {/* <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button> */}

      <th scope="row">{props.logRow.type}</th>
      <td>{props.logRow.created}</td>
      <td>{props.logRow.subject}</td>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Error Details</ModalHeader>
        <ModalBody>{props.logRow.body}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </tr>
  );
};

export default ModalRow;
