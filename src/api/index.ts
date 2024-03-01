import { type SendFormData } from './types/data.interface';

const $api = process.env.NEXT_PUBLIC_API_URL;

if (typeof $api !== 'string') {
	throw new Error('NEXT_PUBLIC_API_URL is undefined');
}

export const sendForm = async (data: SendFormData) => {
	console.log(data)
	return fetch(`${$api}/service_request/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			...data,
			department: 16,
			status: 1,
		}),
	});
};
