import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import "./index.css";
import sampleLogs from "../../SKUNinja-sample-logs.json";

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
              <tr
                className={
                  log.type === "1" ? "row1" : log.type === "2" ? "row2" : "row3"
                }
              >
                <th scope="row">{log.type}</th>
                <td>{log.created}</td>
                <td>{log.subject}</td>
              </tr>
            ))}
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default TableFormat;
