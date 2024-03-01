export const Loader = () => {
	return (
		<section className='w-full h-screen bg-zinc-300'>
			<div className='w-full h-full flex items-center justify-center'>
				<div className='spinner-box'>
					<div className='o-orbit leo'></div>
					<div className='p-orbit leo'></div>
					<div className='b-orbit leo'></div>

					<div className='primary-orbit leo w1'></div>
					<div className='primary-orbit leo w2'></div>
					<div className='primary-orbit leo w3'></div>
				</div>
			</div>
		</section>
	);
};
