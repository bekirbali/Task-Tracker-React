import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      onClick={props.clickHandler}
      style={{ backgroundColor: props.color }}
      className="btn"
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "lightblue",
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Button;
