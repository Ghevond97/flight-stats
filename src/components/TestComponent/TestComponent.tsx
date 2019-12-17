import React, { Component } from "react";
import { connect } from "react-redux";
import { select } from "store";

interface IProps {
  getFlights: any;
  flights: any;
}
class TestComponent extends Component<IProps> {
  componentDidMount() {
    const {
      props: { getFlights, flights }
    } = this;
    getFlights();
  }
  render() {
    const {
      props: { flights }
    } = this;
    console.log("flights", flights);
    return <div>Test Component</div>;
  }
}

const mapStateToProps = (state: any) => ({
  flights: select.flights.selectFlights(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  getFlights: dispatch.flights.getFlights
});
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
