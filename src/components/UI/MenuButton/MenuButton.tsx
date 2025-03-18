import { ReactNode } from "react"
import styels from "./MenuButton.module.css"

interface MenuButtonProps {
	children: ReactNode;
	selected?: boolean;
	clickHandler: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ children, selected, clickHandler }) => {


	return (
		<span
			className={`${styels.btnMenu} ${selected ? styels.selected : ''}`}
			onClick={clickHandler}
		>
			<span className={styels.btnMenuText}>
				{children}
			</span>
		</span>
	)
}

export default MenuButton