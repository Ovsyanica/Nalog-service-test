import { assetEnumValue } from "../types/hooks"
import { IFormData, IVacancy } from "../types/types"


export async function fetchVacancies() {
	try {
		const response = await fetch('http://localhost:3000/vacancies')
		const data: IVacancy[] = await response.json()
		
		return data
	} catch (error) {
		console.log(error)
	}
}

export async function postVacancy(data: IFormData) {
	const id = Date.now().toString()
	const newVacancy: IVacancy = {
		id: id,
		job_title: data.job_title,
		vacancy_title: data.vacancy_title,
		department: data.department,
		open_date: data.open_date,
		close_date: data.close_date,
		gender: assetEnumValue(data.gender, ['male', 'female'], 'gender'),
		education: assetEnumValue(data.education, ['high', 'low'], 'education'),
		pay_taxs: assetEnumValue(data.pay_taxs, ['before', 'after'], 'pay_tax'),
		pay_low: Number(data.pay_low),
		pay_high: Number(data.pay_high),
		location: {
			region: data.region,
			address: data.address,
			station: data.station
		},
		experience: data.experience,
		work_schedule: assetEnumValue(data.work_schedule, ['full', 'part_5_2', 'part_2_2'], 'work_schedule'),
		work_type: assetEnumValue(data.work_type, ['full', 'part', 'internship'], 'work_type'),
		responsibilities: data.responsibilities,
		wishes: data.wishes,
		advantages: data.advantages,
		offer: data.offer
	}

	try {
		const response = await fetch('http://localhost:3000/vacancies', {
			method: 'POST',
			body: JSON.stringify(newVacancy)
		})

		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
	
}

export async function editVacancy(id: string, data: IFormData) {
	const editedVacancy: IVacancy = {
		id: id,
		job_title: data.job_title,
		vacancy_title: data.vacancy_title,
		department: data.department,
		open_date: data.open_date,
		close_date: data.close_date,
		gender: assetEnumValue(data.gender, ['male', 'female'], 'gender'),
		education: assetEnumValue(data.education, ['high', 'low'], 'education'),
		pay_taxs: assetEnumValue(data.pay_taxs, ['before', 'after'], 'pay_tax'),
		pay_low: Number(data.pay_low),
		pay_high: Number(data.pay_high),
		location: {
			region: data.region,
			address: data.address,
			station: data.station
		},
		experience: data.experience,
		work_schedule: assetEnumValue(data.work_schedule, ['full', 'part_5_2', 'part_2_2'], 'work_schedule'),
		work_type: assetEnumValue(data.work_type, ['full', 'part', 'internship'], 'work_type'),
		responsibilities: data.responsibilities,
		wishes: data.wishes,
		advantages: data.advantages,
		offer: data.offer
	}

	try {
		const response = await fetch(`http://localhost:3000/vacancies/${id}`, {
			method: 'PATCH',
			body: JSON.stringify(editedVacancy)
		})

		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}