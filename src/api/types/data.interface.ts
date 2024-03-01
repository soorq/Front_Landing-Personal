export interface IDataLanding {
	id: number;
	head: Head[];
	price_list: PriceList[];
	price_list_additional: PriceListAdditional[];
	review: Review[];
	social: any;
	map: Map;
	metrika: Metrika[];
	type: string;
	city: string;
	working_time: string;
	company_info: string;
	address: string;
	email: string;
	phone: string;
	department: number;
	available_for_online_booking: boolean;
}

export interface Head {
	name: string;
	value: number;
}

export interface PriceList {
	service_name: string;
	price: string;
	service_subtitle: string;
	comment: any;
}

export interface PriceListAdditional {
	service_name: string;
	price: string;
	comment: string;
}

export interface Review {
	head: string;
	description: string;
	person_fullname: string;
	person_info: string;
	image: string;
	social_url: string;
}

export interface Map {
	coordinate_from: number[];
	coordinate_to: number[];
}

export interface Metrika {
	yandex: string;
	jivo: any;
	google: any;
	comment: any;
	mail: any;
}

export interface SendFormData {
	name: string;
	phone: string;
	notes?: string;
}
