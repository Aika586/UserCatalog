import Button from "../button/Button";
import styles from "./HeaderBlock.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { clearToken } from "../../features/auth/authSlice";

type Props = {
  h1: string;
  title: string;
  isUserPage?: boolean;
  imgSrc?: string;
};
const HeaderBlock = ({ h1, title, isUserPage, imgSrc }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleLogout = () => {
    dispatch(clearToken());
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.headerHome} ${isUserPage ? styles.user_page : ""}`}
      >
        {isUserPage && (
          <Button className={styles.button_goBack} onClick={handleGoBack}>
            Назад
          </Button>
        )}
        <Button className={styles.button_logout} onClick={handleLogout}> Выход</Button>
        {isUserPage && (
          <div className={styles.img_container}>
            <img src={imgSrc} alt={title} className={styles.userImg} />
          </div>
        )}
        <div className={isUserPage ? styles.text_container : ""}>
          <h1 className={styles.h1}>{h1}</h1>
          <p className={isUserPage ? styles.userTitle : styles.title}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
