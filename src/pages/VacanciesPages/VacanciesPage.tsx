
import { IVacancy } from '../../types/types'
import Vacancy from '../../widgets/Vacancy/Vacancy'
import styles from './VacanciesPage.module.css'

interface VacanciesPageProps {
	vacancies: IVacancy[];
	handleEditVacancy: (vacancy: IVacancy) => void;
}

const VacanciesPage: React.FC<VacanciesPageProps> = ({ vacancies, handleEditVacancy }) => {


	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				Заявки на размещение вакансий
			</div>
			<div className={styles.content}>
				{vacancies.map(vacancy => (
					<Vacancy key={vacancy.id} vacancy={vacancy} handleEditVacancy={handleEditVacancy} />
				))}
			</div>
		</div>
	)
}

export default VacanciesPage