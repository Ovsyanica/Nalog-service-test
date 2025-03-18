
import { useState } from "react";
import styles from "./Select.module.css"

interface SelectProps {
	id: string;
	placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ id, placeholder }) => {
	const options = ['Action', 'option 2', 'option 3', 'option 4', 'option 5']
	const [visible, setVisible] = useState(false)
	const [value, setValue] = useState('')


	const clickHandle = (e: React.MouseEvent<HTMLOptionElement>) => {
		console.log(e)
		setValue(e.currentTarget.value)
		setVisible(false)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.select}>
				<input
					className={styles.input}
					id={id}
					placeholder={placeholder}
					readOnly
					onFocus={() => { setVisible(true) }}
					// onBlur={() => { setVisible(false) }}
					value={value}
				/>
				<span className={styles.icon}>{'>'}</span>
			</div>
			<div className={`${styles.optionList} ${visible ? styles.visible : ''}`}>
				{options.map(option => (
					<option
						key={option}
						className={styles.optionItem}
						value={option}
						onClick={e => { clickHandle(e) }}
					>
						{option}
					</option>
				))}
			</div>
		</div>
	)
}

export default Select