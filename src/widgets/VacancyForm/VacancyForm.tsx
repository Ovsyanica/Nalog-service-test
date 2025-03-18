import { useFormik } from 'formik'
import Button from '../../components/UI/Button/Button'
import Dropdown from '../../components/UI/Dropdown/Dropdown'
import Input from '../../components/UI/Input/Input'
import InputArea from '../../components/UI/InputArea/InpurArea'
import InputLayout from '../../components/UI/InputLayout/InputLayout'
import RadioButton from '../../components/UI/RadioButton/RadioButton'
import styles from './VacancyForm.module.css'
import * as Yup from 'yup'
import { IFormData, IVacancy } from '../../types/types'

interface VacancyFormProps {
	onFormSubmit: (newVacancy: IFormData, id?: string) => void;
	vacancy?: IVacancy;
}

const genderOptions = [
	{name: 'Мужской', value: 'male'},
	{name: 'Женский', value: 'female'},
]

const educationOptions = [
	{name: 'Высшее', value: 'high'},
	{name: 'Среднее', value: 'low'},
]

const payTaxsOptions = [
	{name: 'На руки', value: 'after'},
	{name: 'До вычета налогов', value: 'before'},
]

const workTypeOptions = [
	{name: 'Полная занятость', value: 'full'},
	{name: 'Частичная занятость', value: 'part'},
	{name: 'Стажировка', value: 'internship'},
]

const workSheduleOptions = [
	{name: 'Полный день', value: 'full'},
	{name: 'Сменный 5/2', value: 'part_5_2'},
	{name: 'Сменный 2/2', value: 'part_2_2'},
]

const VacancyForm: React.FC<VacancyFormProps> = ({ onFormSubmit, vacancy }) => {

	const formik = useFormik<IFormData>({
		initialValues: {
			job_title: vacancy?.job_title || '',
			vacancy_title: vacancy?.vacancy_title || '',
			department: vacancy?.department || '',
			open_date: vacancy?.open_date || '',
			close_date: vacancy?.close_date || '',
			gender: vacancy?.gender || '',
			education: vacancy?.education || '',
			pay_taxs: vacancy?.pay_taxs || '',
			pay_low: vacancy?.pay_low.toString() || '',
			pay_high: vacancy?.pay_high.toString() || '',
			region: vacancy?.location.region || '',
			address: vacancy?.location.address || '',
			station: vacancy?.location.station || '',
			experience: vacancy?.experience || '',
			work_schedule: vacancy?.work_schedule || '',
			work_type: vacancy?.work_type || '',
			responsibilities: vacancy?.responsibilities || '',
			wishes: vacancy?.wishes || '',
			advantages: vacancy?.advantages || '',
			offer: vacancy?.offer || ''
		},
		validationSchema: Yup.object({
			vacancy_title: Yup.string().required('Укажите наименование вакансии'),
			department: Yup.string().required('Укажите отдел'),
			open_date: Yup.string().required('Выберите дату открытия'),
			close_date: Yup.string().required('Выберите дату закрытия'),
			gender: Yup.string().required('Выберите пол'),
			education: Yup.string().required('Укажите образование'),
			region: Yup.string().required('Укажите регион'),
			address: Yup.string().required('Введите полный адрес. Например, Походный проезд, 3с1'),
			experience: Yup.string().required('Укажите опыт работы'),
			work_schedule: Yup.string().required('Укажите график работы'),
			work_type: Yup.string().required('Выберите тип занятости'),
		}),
		onSubmit: (values, { resetForm }) => {
			if (vacancy) {
				onFormSubmit(values, vacancy.id)
			} else {
				onFormSubmit(values)
			}
			resetForm()
		}
	})

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className={styles.formBlock}>
				<div className={styles.container}>
					<InputLayout
						id='job_title'
						label='Наименование должности'
						showHint={false}
						hint=''
						size='medium'
					>
						<Input
							id='job_title'
							type='text'
							showHint={false}
							value={formik.values.job_title}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>

					<InputLayout
						id='vacancy_title'
						label='Наименование вакансии*'
						showHint={!!(formik.errors.vacancy_title && formik.touched.vacancy_title)}
						hint={formik.errors.vacancy_title && formik.touched.vacancy_title ? formik.errors.vacancy_title : ''}
						size='medium'
					>
						<Input
							id='vacancy_title'
							type='text'
							showHint={!!(formik.errors.vacancy_title && formik.touched.vacancy_title)}
							value={formik.values.vacancy_title}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>

					<InputLayout
						id='department'
						label='Отдел*'
						showHint={!!(formik.errors.department && formik.touched.department)}
						hint={formik.errors.department && formik.touched.department ? formik.errors.department : ''}
						size='medium'
					>
						<Input
							id='department'
							type='text'
							showHint={!!(formik.errors.department && formik.touched.department)}
							value={formik.values.department}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>
				</div>
				<div className={styles.container}>
					<InputLayout
						id='open_date'
						label='Дата открытия*'
						showHint={!!(formik.errors.open_date && formik.touched.open_date)}
						hint={formik.errors.open_date && formik.touched.open_date ? formik.errors.open_date : ''}
						size='medium'
					>
						<Input
							id='open_date'
							type='date'
							showHint={!!(formik.errors.open_date && formik.touched.open_date)}
							value={formik.values.open_date}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>

					<InputLayout
						id='close_date'
						label='Плановая дата закрытия*'
						showHint={!!(formik.errors.close_date && formik.touched.close_date)}
						hint={formik.errors.close_date && formik.touched.close_date ? formik.errors.close_date : ''}
						size='medium'
					>
						<Input
							id='close_date'
							type='date'
							showHint={!!(formik.errors.close_date && formik.touched.close_date)}
							value={formik.values.close_date}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>
				</div>
				<div className={styles.container}>
					<InputLayout
						id='gender'
						label='Пол*'
						showHint={!!(formik.errors.gender && formik.touched.gender)}
						hint={formik.errors.gender && formik.touched.gender ? formik.errors.gender : ''}
						size='content'
					>
						<RadioButton
							name='gender'
							value={formik.values.gender}
							direction='column'
							options={genderOptions}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>

					<InputLayout
						id='education'
						label='Образование*'
						showHint={!!(formik.errors.education && formik.touched.education)}
						hint={formik.errors.education && formik.touched.education ? formik.errors.education : ''}
						size='medium'
					>
						<Dropdown
							name='education'
							placeholder='Выберите'
							showHint={!!(formik.errors.education && formik.touched.education)}
							options={educationOptions}
							value={formik.values.education}
							onChange={(value) => formik.setFieldValue('education', value)}
						/>
					</InputLayout>
				</div>
			</div>

			<div className={styles.formBlock}>
				<div className={styles.container}>
					<div>
						<div style={{ marginBottom: '16px' }}>
							<p style={{ fontSize: '14px', fontWeight: '600' }}>Зарплата</p>
							<RadioButton
								name='pay_taxs'
								value={formik.values.pay_taxs}
								direction='row'
								options={payTaxsOptions}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
						<div>
							<p style={{ fontSize: '16px', fontWeight: '300' }}>
								от <Input
									id='pay_low'
									showHint={false}
									style={{ maxWidth: '100px' }}
									value={formik.values.pay_low}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								до <Input
									id='pay_high'
									showHint={false}
									style={{ maxWidth: '100px' }}
									value={formik.values.pay_high}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</p>
						</div>
					</div>
				</div>

				<div className={styles.container}>
					<InputLayout
						id='region'
						label='Регион*'
						showHint={!!(formik.errors.region && formik.touched.region)}
						hint={formik.errors.region && formik.touched.region ? formik.errors.region : ''}
						size='medium'
					>
						<Input
							id='region'
							type='text'
							showHint={!!(formik.errors.region && formik.touched.region)}
							value={formik.values.region}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>

					<InputLayout
						id='address'
						label='Адрес*'
						showHint={!!(formik.errors.address && formik.touched.address)}
						hint={formik.errors.address && formik.touched.address ? formik.errors.address : ''}
						size='large'
					>
						<Input
							id='address'
							type='text'
							showHint={!!(formik.errors.address && formik.touched.address)}
							value={formik.values.address}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>

					<InputLayout
						id='station'
						label='Станция метро, МЦД'
						showHint={false}
						hint=''
						size='medium'
					>
						<Input
							id='station'
							type='text'
							showHint={false}
							value={formik.values.station}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>
				</div>

				<div className={styles.container}>
					<InputLayout
						id='experience'
						label='Опыт работы*'
						showHint={!!(formik.errors.experience && formik.touched.experience)}
						hint={formik.errors.experience && formik.touched.experience ? formik.errors.experience : ''}
						size='medium'
					>
						<Input
							id='experience'
							type='text'
							showHint={!!(formik.errors.experience && formik.touched.experience)}
							value={formik.values.experience}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>

					<InputLayout
						id='work_schedule'
						label='График работы*'
						showHint={!!(formik.errors.work_schedule && formik.touched.work_schedule)}
						hint={formik.errors.work_schedule && formik.touched.work_schedule ? formik.errors.work_schedule : ''}
						size='medium'
					>
						<Dropdown
							name='work_schedule'
							placeholder='Выберите'
							showHint={!!(formik.errors.work_schedule && formik.touched.work_schedule)}
							options={workSheduleOptions}
							value={formik.values.work_schedule}
							onChange={(value) => formik.setFieldValue('work_schedule', value)}
						/>
					</InputLayout>

					<InputLayout
						id='work_type'
						label='Тип занятости*'
						showHint={!!(formik.errors.work_type && formik.touched.work_type)}
						hint={formik.errors.work_type && formik.touched.work_type ? formik.errors.work_type : ''}
						size='content'
					>
						<RadioButton
							name='work_type'
							value={formik.values.work_type}
							direction='column'
							options={workTypeOptions}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</InputLayout>
				</div>

			</div>

			<div className={styles.formBlock}>
				<InputArea
					id='responsibilities'
					label='Функциональные обязанности'
					placeholder='Какую работу будет выполнять сотрудник'
					value={formik.values.responsibilities}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<InputArea
					id='wishes'
					label='Пожелания к кандидату'
					placeholder='Ключевые навыки, достижения'
					value={formik.values.wishes}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<InputArea
					id='advantages'
					label='Преимуществом будет'
					placeholder='Дополнительные специальные навыки'
					value={formik.values.advantages}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<InputArea
					id='offer'
					label='Мы предлагаем'
					placeholder='Условия работы'
					value={formik.values.offer}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</div>

			<div className={styles.btnsBlock}>
				<Button color='primary' type='submit' >Отправить</Button>
				<Button color='secondary' onClick={formik.handleReset} >Сбросить</Button>
			</div>
		</form>
	)
}

export default VacancyForm