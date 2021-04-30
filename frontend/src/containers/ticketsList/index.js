import PropTypes from "prop-types";
import "./index.css";
import Ticket from "../../components/ticketElement";

function TicketsList({ title, items }) {
  return (
    <div className="container">
      <div className="title">
        <p>{title}</p>
      </div>

      <div className="body">
        {items.map((item) => (
          <Ticket key={item.body} {...item} />
        ))}
      </div>
    </div>
  );
}

TicketsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default TicketsList;
