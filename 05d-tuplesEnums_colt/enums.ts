// Enums allow us to define a set of named constants

// Enum Example:
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// String Enum:
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

const order = {
  orderNumber: 12345,
  status: OrderStatus.DELIVERED
}

// resulting javascrip codes

// var OrderStatus;
// (function (OrderStatus) {
//     OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
//     OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
//     OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
//     OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
// })(OrderStatus || (OrderStatus = {}));

// const order = {
//   orderNumber: 12345,
//   status: OrderStatus.DELIVERED
// };


// if you change the enum code by adding const, the result is compact

// const enum OrderStatus {
//   PENDING,
//   SHIPPED,
//   DELIVERED,
//   RETURNED,
// }

// const order = {
//     orderNumber: 12345,
//     status: OrderStatus.DELIVERED
// }

// // resulting javascript code
// const order = {
//   orderNumber: 12345,
//   status: 2 /* OrderStatus.DELIVERED */
// };


