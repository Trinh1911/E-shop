import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineArrowRight, AiOutlineDelete } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./ProfileContent.module.scss";
const cx = classNames.bind(styles);
const ProfileContent = ({ active }) => {
  return (
    <div className={cx("section")}>
      {/* profile */}
      {active === 1 && (
        <div className={cx("wrap")}>
          <div className={cx("user")}>
            <img
              src="https://s120-ava-talk.zadn.vn/1/f/2/6/7/120/57c9903cb27b75ace0f8de42bee3f4cc.jpg"
              className={cx("avatar")}
            />
            <AiOutlineCamera className={cx("icon-camera")} />
          </div>
          <br />
          <div className={cx("contact")}>
            <form>
              <div className={cx("contact-form")}>
                <label htmlFor="">Full Name</label>
                <input type="text" required />
              </div>
            </form>
            <form>
              <div className={cx("contact-form")}>
                <label htmlFor="">Phone Number</label>
                <input type="text" required />
              </div>
            </form>
          </div>
        </div>
      )}
      {/* order */}
      {active === 2 && (
        <div>
          <AllOrder />
        </div>
      )}
      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrder />
        </div>
      )}
      {/* Track order */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}
      {/* Payment */}
      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}
      {/* Address user */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};
const AllOrder = () => {
  const orders = [
    {
      _id: "098549495u585",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: item.totalPrice + "US$",
        status: item.orderStatus,
      });
    });
  return (
    <div className={cx("Order-section")}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnclick
        autoHeight
      />
    </div>
  );
};
const AllRefundOrder = () => {
  const orders = [
    {
      _id: "098549495u585",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: item.totalPrice + "US$",
        status: item.orderStatus,
      });
    });
  return (
    <div className={cx("Order-section")}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnclick
        autoHeight
      />
    </div>
  );
};
const TrackOrder = () => {
  const orders = [
    {
      _id: "098549495u585",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: item.totalPrice + "US$",
        status: item.orderStatus,
      });
    });
  return (
    <div className={cx("Order-section")}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnclick
        autoHeight
      />
    </div>
  );
};
const PaymentMethod = () => {
  return (
    <div className={cx("payment-section")}>
      <div className={cx("payment-heading")}>
        <h1>Payment Methods</h1>
        <span>Add New</span>
      </div>
      <br />
      <div className={cx("payment-container")}>
        <div className={cx("payment-wrap")}>
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt=""
          />
          <h5>Nguyen Thi Kim Trinh</h5>
        </div>
        <div className={cx("info-user")}>
          <h5>0915******</h5>
          <h6>07/2023</h6>
        </div>
        <AiOutlineDelete className={cx("icon-delete")} />
      </div>
    </div>
  );
};
const Address = () => {
  return (
    <div className={cx("Address-section")}>
      <div className={cx("Address-heading")}>
        <h1> My Address</h1>
        <span>Add New</span>
      </div>
      <br />
      <div className={cx("Address-container")}>
        <div className={cx("Address-wrap")}>
          <h5>Default</h5>
        </div>
        <div className={cx("info-user")}>
          <h5> Thanh Hai, Ninh Hai, Ninh Thuan</h5>
        </div>
          <h6>(213) 84-9416</h6>
        <AiOutlineDelete className={cx("icon-delete")} />
      </div>
    </div>
  );
};
export default ProfileContent;
