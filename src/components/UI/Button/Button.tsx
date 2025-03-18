import { ReactNode } from "react"
import styles from "./Button.module.css"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	color: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = ({ children, color: color, ...props }) => {


	return (
		<button
			className={`${styles.btn} ${color === "primary" ? styles.btnPrimary : styles.btnSecondary}`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button