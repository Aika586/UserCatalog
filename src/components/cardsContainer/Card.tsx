import HeartIcon from "./HeartIcon.tsx";
import styles from "./CardsContainer.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
type Props = {
  imgSrc: string;
  name: string;
  id: number;
};

const Card = ({ imgSrc, name, id }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const likedState = localStorage.getItem(`liked-${id}`);
    if (likedState) {
      setIsLiked(JSON.parse(likedState));
    }
  }, [id]);
  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLiked((prev) => {
      const newState = !prev;
      localStorage.setItem(`liked-${id}`, JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <Link to={`/users/${id}`}>
      <div className={styles.wrapper}>
        <div className={styles.card_container}>
          <img src={imgSrc} alt={name} className={styles.img} />
          <p className={styles.name}>{name}</p>
        </div>
        <div onClick={handleLikeClick} className={styles.likedIcon_container}>
          <HeartIcon
            className={isLiked ? styles.liked : ""}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
