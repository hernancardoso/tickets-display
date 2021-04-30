import PropTypes from "prop-types";
import "./index.css";

function Badge(props) {
  return (
    <div className={`badge ${props.status}`}>
      {props.status === "NEW" ? "nuevo" : "respondido"}
    </div>
  );
}

Badge.propTypes = {
  status: PropTypes.string,
};

export default Badge;
