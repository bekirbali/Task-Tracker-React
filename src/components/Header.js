import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.brian}</h1>
      <Button
        clickHandler={props.onAdd}
        color={props.showAdd ? "crimson" : "green"}
        text={props.showAdd ? "Close" : "Add"}
      />
    </header>
  );
};
Header.defaultProps = {
  brian: "Task Tracker",
};

Header.propTypes = {
  brian: PropTypes.string.isRequired,
};

export default Header;
