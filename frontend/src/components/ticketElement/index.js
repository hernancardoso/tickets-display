import PropTypes from "prop-types";
import Badge from "../badge";
import "./index.css";

function Ticket(props) {
  return (
    <div className="item">
      <hr />
      {status === "NEW" && (
        <div className="inline spaced header">
          <span>De: {props.from}</span>
          <span>Enviado: {props.date}</span>
        </div>
      )}
      <div className="inline close subject">
        <Badge className="badge" status={props.status} />
        <span>{props.subject}</span>
      </div>
      <div className="inline spaced">
        <div className="message">{props.body}</div>
        <div className="arrow">›</div>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  from: PropTypes.string,
  subject: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string,
  status: PropTypes.string,
};

export default Ticket;
