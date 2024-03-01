import { CallOrderBtn } from './CallOrderBtn';
import Image from 'next/image';
import React from 'react';

export const Header = () => {
	return (
		<header className='absolute top-0 w-full block md:mx-auto pt-[10px] md:py-[25px] xl:pt-[35px]'>
			<div className='relative mx-auto md:px-5 w-full min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px]'>
				<div className='flex flex-wrap md:gap-5 md:flex-nowrap justify-center md:justify-between px-2 gap-1 sm:px-0 items-start md:items-center'>
					<div className='flex shrink-0 grow-0 basis-auto mx-auto md:m-0 w-[300px] md:w-[292px] xl:w-[399px] h-[77px] md:h-[75px] xl:h-[101px] order-1 md:order-[initial]'>
						<Image
							src='/logo.svg'
							alt='Аутстаффкин'
							priority
							width={399}
							height={75}
							className='self-start w-auto h-auto'
						/>
					</div>

					<div className='w-full flex justify-evenly order-2 items-center'>
						<div className='mb-[15px] md:mb-0 max-w-[160px] sm:max-w-none sm:mr-[4px] xl:ms-auto font-bold text-[10px] md:text-[14px] xl:text-base/normal text-start md:font-light leading-[-.5px]'>
							<p className='font-normal'>
								г. Санкт-Петербург,
								<br /> Невский пр. 107, оф. 24
							</p>
							<p className='font-bold'>ПН-ПТ с 9:00 до 19:00</p>
						</div>

						<div className='relative flex flex-col max-w-[160px] md:max-w-none gap-y-2 shrink-0 grow-0 basis-auto mb-5 md:mb-0 xl:ms-auto text-xs md:text-base xl:text-xl text-center font-light'>
							<a
								href='tel:+78126480001'
								className='block md:hidden px-4 py-1.5 border border-[#ac0039] rounded-lg text-center font-normal'
							>
								+7 (812) 648-00-01
							</a>
							<a
								href='tel:+79215555555'
								className='block md:hidden px-4 py-1.5 border border-[#ac0039] rounded-lg text-center font-normal'
							>
								+7 (921) 555-55-55
							</a>

							<CallOrderBtn>+7 (812) 648-00-01</CallOrderBtn>
							<CallOrderBtn>+7 (921) 555-55-55</CallOrderBtn>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
