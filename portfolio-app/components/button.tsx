import { ButtonHTMLAttributes } from "react";
import styles from "@/styles/common.module.css";

type props = React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Button({ children, className, ...props }: props) {
  return (
    <button className={`${className} ${styles.button}`} {...props}>
      {children}
    </button>
  );
}
