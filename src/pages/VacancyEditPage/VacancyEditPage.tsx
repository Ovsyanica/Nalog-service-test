
import { IFormData, IVacancy } from '../../types/types'
import VacancyForm from '../../widgets/VacancyForm/VacancyForm'
import styles from './VacancyEditPage.module.css'

interface VacancyEditPageProps {
	updateVacancy: (vacancy: IFormData, id: string) => void;
	vacancy: IVacancy;
}

const VacancyEditPage: React.FC<VacancyEditPageProps> = ({ updateVacancy, vacancy }) => {
	const hadleEdit = (vacancy: IFormData, id?: string) => {
		if (id) updateVacancy(vacancy, id)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				Форма редактирования заявки
			</div>

			<div className={styles.content}>
				<VacancyForm onFormSubmit={hadleEdit} vacancy={vacancy} />
			</div>
		</div>
	)
}

export default VacancyEditPage