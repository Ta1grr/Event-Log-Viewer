import React, { Component } from "react";
import { Table } from "reactstrap";
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
      <Table bordered>
        <thead>
          <tr>
            <th>Type</th>
            <th>Date / Time</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {this.state.sampleLog.map(log => (
            <tr>
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
    );
  }
}

export default TableFormat;
