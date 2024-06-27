import { Link, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

const ErrorPage = () => {
  const error = useRouteError() as { message?: string };

  return (
    <div className={styles.errorWrapper}>
      {error && (
        <div className={styles.error_container}>
          <p>
            {" "}
            Извините, страница не найдена, возможно, она была перемещена,
            удалена или временно недоступна; проверьте правильность введенного
            адреса.
          </p>

          <Link to="/">
            Вы можете вернуться на главную страницу, нажав здесь!!!
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
