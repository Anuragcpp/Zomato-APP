import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import DisplayOrder from "./DisplayOrders";
const orderApi = "https://restdataapi.onrender.com/vieworder";
class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      num: 0
    };
  }
  renderBody = (ordersData) => {
    if (ordersData.length > 0) {
      return ordersData.map((data) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.hotel_name}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>Rs.{data.cost}</td>
            <td>{data.date}</td>
            <td>{data.status}</td>
            <td>{data.bank_name}</td>
          </tr>
        );
      });
    } else {
      return (
        <>
          <center>
            <img
              src="https://www.epidomastegasis.gr/gov/Content/images/loaders/loader4.gif"
              alt="loading"
              className="loader"
              style={{
                position: "relative",
                left: "500px",
                padding: "0px"
              }}
            />
          </center>
        </>
      );
    }
  };

  refresh = () => {
    axios.get(orderApi).then((res) => {
      this.setState({ orders: res.data });
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <center className="mb-4">
          <h4>My Orders</h4>
          {/* <button onClick={this.refresh}>Refresh</button> */}
        </center>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>OrderId</th>
              <th>Restaurant name</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Cost</th>
              <th>Date</th>
              <th>Status</th>
              <th>BankName</th>
            </tr>
          </thead>
          <tbody>{this.renderBody(this.state.orders)}</tbody>
        </table>
      </div>
      // {/* <DisplayOrder orderData={this.state.orders} /> */}
    );
  }
  componentDidMount() {
    setTimeout(() => {
      axios.get(orderApi).then((res) => {
        this.setState({ orders: res.data });
      });
    }, 3000);
  }
}
export default ViewOrder;
