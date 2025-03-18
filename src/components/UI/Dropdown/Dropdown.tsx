import { useMemo, useState } from 'react'
import SwitchIcon from '../../../icons/Swich.svg?react'
import styles from './Dropdown.module.css'

interface DropdownProps {
	showHint: boolean;
	placeholder?: string;
	options: {
		name: string;
		value: string;
	}[];
	onChange: (value: string) => void;
	value: string;
	name: string;
}

const Dropdown: React.FC<DropdownProps> = ({ showHint, options, onChange, value, placeholder = 'Placeholder' }) => {
	const [menuShow, setMenuShow] = useState(false)

	const selectOption = (option: string) => {
		setMenuShow(false)
		onChange(option)
	}

	const getNameByValue = (value: string) => {
		return options.find(elem => elem.value === value)?.name || placeholder
	}

	const cachedPlaceholder = useMemo(() => getNameByValue(value), [value])

	return (
		<div className={styles.wrapper}>

			<div
				className={`${styles.select} ${menuShow ? styles.focused : ''} ${showHint ? styles.error : ''}`}
				onClick={() => setMenuShow(!menuShow)}
			>
				<span style={{color: `${value ? '#4F4F55' : '#DCDCDC'}`}}>
					{cachedPlaceholder}
				</span>
				<SwitchIcon className={styles.switchIcon} />
			</div>

			<ul className={`${styles.menu} ${menuShow ? styles.visible : ''}`}>
				{options?.map((elem) => (
					<li
						className={styles.menuItem}
						key={elem.value}
						onClick={() => selectOption(elem.value)}
					>
						{elem.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Dropdown