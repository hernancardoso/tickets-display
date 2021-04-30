import ReactDOM from "react-dom";
import "./index.css";
import React from "react";
import TicketsList from "./containers/ticketsList";

ReactDOM.render(<div>Cargando...</div>, document.getElementById("root"));

fetch(process.env.REACT_APP_BACKEND_URL, {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    ReactDOM.render(
      <div>
        <TicketsList title="Tickets" items={data} />
      </div>,
      document.getElementById("root")
    );
  });
