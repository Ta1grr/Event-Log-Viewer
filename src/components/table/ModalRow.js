import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { format } from "date-fns";

const ModalRow = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <tr
      className={
        props.logRow.type === "1"
          ? "text-success logRows"
          : props.logRow.type === "2"
          ? "text-warning logRows"
          : "text-danger logRows"
      }
      onClick={toggle}
    >
      <th scope="row">{props.logRow.type}</th>
      {/* <td>{format(props.logRow.created, "yyyy-MM-dd'T'HH:mm")}</td> */}
      <td>{props.logRow.created}</td>
      <td>{props.logRow.subject}</td>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Error Details</ModalHeader>
        <ModalBody>
          {props.logRow.body ? props.logRow.body : "No error messages"}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </tr>
  );
};

export default ModalRow;
