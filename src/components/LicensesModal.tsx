'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

export const LicensesModal = ({ trigger }: { trigger: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isZoomed, setIsZoomed] = useState(false);

	const handleZoom = () => {
		setIsZoomed(!isZoomed);
	};

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide fixed inset-0 backdrop-blur-sm z-40' />
				<Dialog.Content className='fixed left-[50%] top-[50%] z-40 grid w-fit max-w-xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut rounded-lg md:w-fit cursor-pointer overflow-hidden'>
					<Image
						src={'/license1.jpg'}
						alt={'licenses'}
						sizes={'100%'}
						width={574}
						height={812}
						className={`${
							isZoomed ? 'scale-125' : 'scale-100'
						} transition-transform duration-300 ease-in-out cursor-pointer w-[300px] sm:w-[500px] lg:w-[650px] h-auto object-cover`}
						onClick={handleZoom}
					/>
				</Dialog.Content>
				<Dialog.Close className='fixed top-0 right-0 z-50 flex items-center justify-center w-8 h-8 text-gray-300 transition-colors bg-black/80 hover:text-gray-100'>
					<span className='text-lg'>x</span>
				</Dialog.Close>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
