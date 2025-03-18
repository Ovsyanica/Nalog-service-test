import { IVacancy } from "../../types/types"
import styles from './Vacancy.module.css'
import EditIcon from '../../icons/Edit.svg?react'
import MapIcon from '../../icons/Map_Pin.svg?react'
import MetroIcon from '../../icons/Metro.svg?react'


interface VacancyProps {
	vacancy: IVacancy;
	handleEditVacancy: (vacancy: IVacancy) => void;
}

const Vacancy: React.FC<VacancyProps> = ({ vacancy, handleEditVacancy }) => {


	return (
		<div className={styles.wrapper}>

			<div className={styles.header}>
				<span className={styles.date}>
					Дата публикации: {vacancy.open_date}
				</span>
				<EditIcon style={{cursor: 'pointer'}} className={styles.icon} onClick={() => handleEditVacancy(vacancy)} />
			</div>

			<div className={styles.content}>

				<div className={styles.title}>
					<p className={styles.name}>
						{vacancy.vacancy_title}
					</p>
					<p className={styles.address}>
						<MapIcon className={styles.icon} />
						{`${vacancy.location.region}, `} 
						{vacancy.location.address}
					</p>
				</div>

				<div className={styles.properties}>
					<p className={styles.pay}>
						<span className={styles.important}>от {vacancy.pay_low} </span>
						<span>{vacancy.pay_taxs === 'after' ? 'на руки' : 'до вычета налогов'}</span>
					</p>
					<p className={styles.experience}>
						{`Требуемый опыт: `}
						<span className={styles.important}>{vacancy.experience}</span>
					</p>
					<p className={styles.station}>
						<MetroIcon className={styles.icon} />
						{vacancy.location.station}
					</p>
				</div>

			</div>

		</div>
	)
}

export default Vacancy