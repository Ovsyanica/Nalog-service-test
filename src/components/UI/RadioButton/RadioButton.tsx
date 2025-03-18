
import styles from './RadioButton.module.css'

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	value: string;
	options: {
		name: string;
		value: string;
	}[];
	direction: 'row' | 'column'
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, options, direction, ...props }) => {
	const gap = direction === 'row' ? '20px' : '12px'

	return (
		<div className={styles.wrapper} style={{flexDirection: direction, gap: gap}}>
			{options?.map(option => (
				<div
					key={option.value}
					className={styles.option}
				>
					<label className={styles.label}>
						<input
							className={styles.input}
							type="radio"
							name={name}
							value={option.value}
							checked={value === option.value}
							{...props}
						/>
						<span className={styles.text}>{option.name}</span>
					</label>
				</div>
			))}
		</div>
	)
}

export default RadioButton