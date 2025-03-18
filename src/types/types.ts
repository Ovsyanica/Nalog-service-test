export interface IVacancy {
	id: string;
	job_title: string;
	vacancy_title: string;
	department: string;
	open_date: string;
	close_date: string;
	gender: 'male' | 'female';
	education: 'high' | 'low';
	pay_taxs: 'before' | 'after';
	pay_low: number;
	pay_high: number;
	location: {
		region: string;
		address: string;
		station: string;
	},
	experience: string;
	work_schedule: 'full' | 'part_5_2' | 'part_2_2';
	work_type: 'full' | 'part' | 'internship';
	responsibilities: string;
	wishes: string;
	advantages: string;
	offer: string;
}

export interface IFormData {
	job_title: string;
	vacancy_title: string;
	department: string;
	open_date: string;
	close_date: string;
	gender: string;
	education: string;
	pay_taxs: string;
	pay_low: string;
	pay_high: string;
	region: string;
	address: string;
	station: string;
	experience: string;
	work_schedule: string;
	work_type: string;
	responsibilities: string;
	wishes: string;
	advantages: string;
	offer: string;
}