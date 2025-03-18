import styles from "./Input.module.css"


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	showHint: boolean;
}

const Input: React.FC<InputProps> = ({ showHint, ...props }) => {


	return (
		<input
			className={`${styles.input} ${showHint ? styles.error : ''}`}
			{...props}
		/>
	)
}

export default Input

