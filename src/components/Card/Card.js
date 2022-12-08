import styles from "./Card.module.scss";

const Card = ({ img, title, desc, onClick }) => {
  return (
    <div className={styles["card-container"]} onClick={onClick}>
      <img className={styles["card-image"]} src={img} />
      <div className={styles["card-title"]}>{title}</div>
      <div className={styles["card-desc"]}>{desc}</div>
    </div>
  )
}

export default Card;