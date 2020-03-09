import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import ModalRow from "./ModalRow";
import "./index.css";
import sampleLogs from "../../SKUNinja-sample-logs.json";
import { compareAsc, compareDesc } from "date-fns";

class TableFormat extends Component {
  state = {
    sampleLog: []
  };

  componentDidMount() {
    this.setState({ sampleLog: sampleLogs });
  }

  render() {
    return (
      <Container>
        <Table bordered className="tableFormat">
          <thead>
            <tr>
              <th>Type</th>
              <th>Date / Time</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sampleLog.map(log => (
              <ModalRow key={log.id} logRow={log} />
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default TableFormat;
