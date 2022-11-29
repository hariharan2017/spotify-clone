import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ type, children, onClick }) => {
  
  const getButtonStyle = (type) => {
    if (type === "primary") {
      return "button-primary";
    } else {
      return "button-secondary";
    }
  }
  
  return (
    <button className={styles[getButtonStyle(type)]} onClick={onClick}>{children}</button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"])
};

export default Button;