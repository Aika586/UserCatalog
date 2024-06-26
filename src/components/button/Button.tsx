import styles from "./Button.module.css";
type Props = {
  children: React.ReactNode;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
