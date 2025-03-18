import { ReactNode } from "react";
import styles from "./InputLayout.module.css"

interface InputLayoutProps {
	children: ReactNode;
	id: string;
	label: string;
	showHint: boolean;
	hint: string;
	size: 'small' | 'medium' | 'large' | 'content'
}

const InputLayout: React.FC<InputLayoutProps> = ({ children, id, label, showHint, hint, size }) => {

	let maxWidth = ''
	let width = '100%'

	switch (size) {
		case "small":
			maxWidth = '100px'
			break;
		case "medium":
			maxWidth = '275px'
			break;
		case "large":
			maxWidth = '420px'
			break;
		case "content":
			maxWidth = ''
			width = ''
			break;
		default:
			maxWidth = '100%'
			break;
	}

	return (
		<div
			className={styles.wrapper}
			style={{maxWidth: maxWidth, width: width}}
		>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			{children}
			<p
				className={styles.hint}
				style={{ visibility: `${showHint ? 'visible' : 'hidden'}` }}
			>
				{hint}
			</p>
		</div>
	)
}

export default InputLayout