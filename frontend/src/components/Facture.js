import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import "./Facture.css";

function Facture({ order, ordersApiCall }) {
  const orderId = useLocation().pathname.slice(9);

  return <div className="page">{orderId}</div>;
}
export default Facture;
