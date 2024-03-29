'use client';

import { InputMask } from '@react-input/mask';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { sendForm } from '@/api';
import { LegalModal } from './LegalModal';

interface StepsFormState {
	name: string;
	phone: string;
	message?: string;
}
export const StepsForm = ({ onSuccess }: { onSuccess?: () => void }) => {
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<StepsFormState>({
		mode: 'onBlur',
		defaultValues: {
			name: '',
			phone: '',
			message: '',
		},
	});

	const onSubmit = async (data: StepsFormState) => {
		let number = Array.from(data.phone.replace(/\D/g, ''));
		number[0] = '8';

		try {
			setIsLoading(true);
			const res = await sendForm({ ...data, phone: number.join('') });

			if (!res.ok) {
				return setError(
					'Произошла непредвиденная ошибка, попробуйте перезагрузить страницу и отправить запрос еще раз',
				);
			}

			setError(null);
			onSuccess?.();
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-10 py-6 gap-y-5'>
			<label className='flex flex-col items-start justify-start gap-y-1'>
				Имя
				<input
					{...register('name', {
						required: 'Поле обязательно для заполнения',
						minLength: {
							value: 3,
							message: 'Минимальная длина имени 3 символа',
						},
					})}
					type='text'
					className='w-full px-4 py-3 border border-gray-300 rounded-lg'
				/>
				{errors.name && <p className='text-red-500'>{errors.name.message}</p>}
			</label>
			<label className='flex flex-col items-start justify-start gap-y-1'>
				Телефон
				<InputMask
					mask='+7 (___) ___-__-__'
					replacement={{ _: /\d/ }}
					showMask
					{...register('phone')}
					className='w-full px-4 py-3 border border-gray-300 rounded-lg'
				/>
				{errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
			</label>
			<textarea
				{...register('message')}
				placeholder='Сообщение, если требуется'
				className='w-full px-4 py-3 border border-gray-300 rounded-lg'
			/>

			{error && <p className='text-red-500'>{error}</p>}
			<button
				disabled={!!errors.name || !!errors.phone || isLoading}
				type='submit'
				className='mx-auto px-5 py-3 text-white bg-gradient-to-t from-[#e30e00] to-[#ac0600] rounded-full text-center text-lg/normal font-normal disabled:opacity-50'
			>
				Отправить
			</button>

			<p className='text-xs text-start'>
				Нажимая на кнопку, Вы подтверждаете, что ознакомились с{' '}
				<LegalModal trigger='Политикой конфиденциальности' /> и даете согласие на обработку
				персональных данных
			</p>
		</form>
	);
};
