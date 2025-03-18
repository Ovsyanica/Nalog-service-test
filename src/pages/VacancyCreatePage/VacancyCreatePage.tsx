
import { IFormData } from '../../types/types'
import VacancyForm from '../../widgets/VacancyForm/VacancyForm'
import styles from './VacancyCreatePage.module.css'

interface VacancyCreatePageProps {
	postNewVacancy: (newVacancy: IFormData) => void;
}

const VacancyCreatePage: React.FC<VacancyCreatePageProps> = ({ postNewVacancy }) => {


	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				Форма размещения заявки
			</div>

			<div className={styles.content}>
				<VacancyForm onFormSubmit={postNewVacancy} />
			</div>
		</div>
	)
}

export default VacancyCreatePage