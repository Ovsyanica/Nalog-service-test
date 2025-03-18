import MenuButton from "../../components/UI/MenuButton/MenuButton"
import styles from './Header.module.css'

interface HeaderProps {
	currentPage: 'all' | 'create' | 'edit';
	setCurrentPage: (page: 'all' | 'create') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {


	return (
		<div className={styles.header}>
			<div className={styles.headerContent}>
				<div className={styles.headerAvatar}>

				</div>
				<div className={styles.headerNavigate}>
					<MenuButton
						clickHandler={() => setCurrentPage('all')}
						selected={currentPage === 'all'}
					>
						Все заявки
					</MenuButton>
					<MenuButton
						clickHandler={() => setCurrentPage('create')}
						selected={currentPage === 'create'}
					>
						Создание заявки
					</MenuButton>
				</div>
			</div>
		</div>
	)
}

export default Header