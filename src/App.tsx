import { useEffect, useState } from 'react'
import './App.css'
import Header from './widgets/Header/Header'
import { IFormData, IVacancy } from './types/types'
import VacanciesPage from './pages/VacanciesPages/VacanciesPage'
import VacancyCreatePage from './pages/VacancyCreatePage/VacancyCreatePage'
import { editVacancy, fetchVacancies, postVacancy } from './api/api'
import VacancyEditPage from './pages/VacancyEditPage/VacancyEditPage'

function App() {
	const [currentPage, setCurrentPage] = useState<'all' | 'create' | 'edit'>('all')
	const [vacancies, setVacancies] = useState<IVacancy[]>([])
	const [selectedVacancy, SetSelectedVacancy] = useState<IVacancy | null>(null)

	useEffect(() => {
		getVacancies()
	}, [])

	const handleEditVacancy = (vacancy: IVacancy) => {
		setCurrentPage('edit')
		SetSelectedVacancy(vacancy)
	}

	async function getVacancies() {
		const data = await fetchVacancies()
		if (data) setVacancies(data)
	}

	async function postNewVacancy(newVacancy: IFormData) {
		const data = await postVacancy(newVacancy)
		setVacancies([...vacancies, data])
		setCurrentPage('all')
	}

	async function updateVacancy(vacancy: IFormData, id: string) {
		const responseData: IVacancy = await editVacancy(id, vacancy)
		setVacancies(vacancies.map(elem => elem.id === responseData.id ? elem = responseData : elem))
		setCurrentPage('all')
	}

	return (
		<div className='wrapper'>
			<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

			{currentPage === 'all' && (
				<VacanciesPage vacancies={vacancies} handleEditVacancy={handleEditVacancy} />
			)}
			{currentPage === 'create' && (
				<VacancyCreatePage postNewVacancy={postNewVacancy} />
			)}
			{currentPage === 'edit' && selectedVacancy && (
				<VacancyEditPage updateVacancy={updateVacancy} vacancy={selectedVacancy} />
			)}
		</div>
	)
}

export default App
