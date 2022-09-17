import styles from './Button.module.scss';

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  variant = "secondary",
  onClick,
}: ButtonProps) => (
  <button onClick={onClick} className={styles[variant]}>
    {children}
  </button>
);

export default Button;
