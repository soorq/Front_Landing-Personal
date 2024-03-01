'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className='w-full h-screen bg-white'>
			<div className='w-full h-full flex items-center justify-center flex-col'>
				<h1 className='text-5xl pb-2'>Что-то пошло не так</h1>
				<p className='text-sm pb-4 text-center max-w-[320px]'>Http Error {error.message}</p>
				<button
					className='px-5 py-2.5 text-2xl bg-red-700 rounded-xl font-medium'
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
					Перезагрузить
				</button>
			</div>
		</div>
	);
}
