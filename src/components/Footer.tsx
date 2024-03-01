import { FooterForm } from './FooterForm';
import Image from 'next/image';
import React from 'react';

export const Footer = () => {
	return (
		<footer className='block mt-auto py-[30px] md:py-[60px] w-full bg-[#807377] text-white'>
			<div className='w-full mx-auto px-[10px] md:px-5 min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px]'>
				<div className='w-full md:flex md:flex-nowrap md:items-start'>
					<div className='flex justify-between mb-10 flex-nowrap md:flex-wrap xl:justify-start md:mb-0 md:flex-auto md:items-start'>
						<div className='flex-[0_1_135px] md:basis-[200px] xl:basis-[260px] md:mr-10 font-light text-xs/normal xl:text-base/normal w-auto '>
							<h3 className='mb-5 font-medium text-xs/normal md:text-base/normal xl:text-xl/normal'>
								Информация
							</h3>
							<span className='block'>
								<b className='font-medium'>ИНН</b> 7838084202
							</span>
							<span className='block'>
								<b className='font-medium'>ОГРН</b> 1197847017081
							</span>
							<span>
								Уведомление об аккредитации ФСТЗ “РОСТРУД” № А-42/78 “Персоналкин{' '}
								{new Date().getFullYear()}”
								<br />
								Все права защищены
							</span>
						</div>

						<div className='flex-[0_1_135px] md:basis-[200px] xl:basis-[260px] md:mr-10 font-light text-xs/normal xl:text-base/normal w-auto'>
							<h3 className='mb-5 font-medium text-xs/normal md:text-base/normal xl:text-xl/normal'>
								Наш адрес,
							</h3>
							<p className='mb-4'>
								<span>г. Санкт-Петербург,</span>
								<span>Невский пр. 107, оф. 24</span>
							</p>
							<p className='mb-4'>
								Режим работы
								<time className='block font-medium'>ПН-ПТ с 9:00 до 19:00</time>
							</p>

							<a
								href='tel:+78126480001'
								className='block mb-4 font-medium underline hover:text-[#ccc] transition-colors'
							>
								+7 (495) 150-54-24
							</a>
							<a
								href='tel:+79215555555'
								className='block mb-4 font-medium underline hover:text-[#ccc] transition-colors'
							>
								+7 (921) 555-55-55
							</a>

							<a
								href={`mailto:spb@personalkin.ru`}
								className='block mb-4 font-medium underline hover:text-[#ccc] transition-colors'
							>
								spb@personalkin.ru
							</a>
						</div>

						<div className='hidden md:flex flex-nowrap items-center justify-center md:justify-start mt-5 md:mt-[130px] xl:mt-[100px] w-full'>
							<Image
								src='/logo-white.svg'
								alt='Аутстаффкин'
								loading='eager'
								sizes='100%'
								width={229}
								height={58}
								className='mr-2 md:mr-5'
							/>
							<span className='-mt-1.5 text-2xl/normal font-medium'>
								© {new Date().getFullYear()}
							</span>
						</div>
					</div>

					<div className='w-[240x] md:w-[290px] md:flex-[0_0_275px] mx-auto mb-8 md:mb-0'>
						<div className='mb-10 md:mb-0'>
							<span className='block mb-3 font-light text-center text-base/normal md:text-xl/normal xl:text-2xl/normal md:mb-5 xl:mb-8'>
								Свяжитесь с нами
							</span>
							<FooterForm />
						</div>
					</div>

					<div className='flex items-center justify-center w-full mt-5 flex-nowrap md:hidden'>
						<Image
							src='/logo-white.svg'
							alt='Аутстаффкин'
							loading='eager'
							sizes='100%'
							width={209}
							height={57}
							className='mr-2'
						/>
						<span className='-mt-1.5 text-2xl/normal font-medium'>
							© {new Date().getFullYear()}
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
