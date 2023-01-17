import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ type, children, onClick, className }) => {
  const getButtonStyle = (type) => {
    if (type === "primary") {
      return "button-primary";
    } else {
      return "button-secondary";
    }
  };

  return (
    <button
      className={classNames(styles[getButtonStyle(type)], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
