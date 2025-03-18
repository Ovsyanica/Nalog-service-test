import styles from "./InputArea.module.css"


interface InputAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
}

const InputArea: React.FC<InputAreaProps> = ({ label, ...props }) => {

	return (
		<div className={styles.wrapper}>
			<label className={styles.label} htmlFor={props.id}>
				{label}
			</label>
			<textarea
				className={styles.textArea}
				{...props}
			/>
		</div>
	)
}

export default InputArea
