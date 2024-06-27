import HeartIcon from "./HeartIcon.tsx"
import styles from "./CardsContainer.module.css"
import { Link } from "react-router-dom";
type Props = {
  imgSrc: string;
  name: string;
  id:number;
};

const Card = ({ imgSrc, name,id }: Props) => {
  return (
    <Link to={`/users/${id}`}>
    <div className={styles.wrapper}>
      <div className={styles.card_container}>
        <img src={imgSrc} alt={name} className={styles.img} />
        <p className={styles.name}>{name}</p>
      </div>
      <HeartIcon className={styles.icon}/>
    </div>
    </Link>
  );
};

export default Card;
