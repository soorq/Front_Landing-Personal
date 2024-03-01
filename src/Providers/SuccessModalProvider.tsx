'use client';

import React from 'react';

const SuccessDialogState = (initialState: boolean) => React.useState<boolean>(initialState);

type TypeStateProvider = ReturnType<typeof SuccessDialogState>;

export const SuccessDialogContext = React.createContext<TypeStateProvider | null>(null);

export const useSuccessDialog = () => {
	const isOpen = React.useContext(SuccessDialogContext);
	if (!isOpen) {
		throw new Error('useSuccessDialog must be used within a CartProvider');
	}
	return isOpen;
};

export default function SuccessDialogProvider({
	children,
	initialState,
}: {
	children: React.ReactNode;
	initialState: boolean;
}) {
	const [isOpen, setIsOpen] = SuccessDialogState(initialState);

	return (
		<SuccessDialogContext.Provider value={[isOpen, setIsOpen]}>
			{children}
		</SuccessDialogContext.Provider>
	);
}
