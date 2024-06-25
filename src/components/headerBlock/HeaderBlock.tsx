import Button from "../button/Button";
import styles from "./HeaderBlock.module.css"

type Props = {
  className: string;
  h1: string;
  title: string;
  isUserPage ?: boolean;
  imgSrc ?:string
};
const HeaderBlock = ({ className, h1, title, isUserPage,imgSrc }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[className]}>
        {isUserPage && <Button className="buttonGoBack">Назад</Button>}
        <Button className={styles.button_exit}> Выход</Button>
        {isUserPage && <img src={imgSrc} alt={title} />}
        <h1 className={styles.h1}>{h1}</h1>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default HeaderBlock;
