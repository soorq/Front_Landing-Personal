'use client';

import React from 'react';

const DialogState = (initialState: boolean) => React.useState<boolean>(initialState);

type TypeStateProvider = ReturnType<typeof DialogState>;

export const DialogContext = React.createContext<TypeStateProvider | null>(null);

export const useDialog = () => {
	const isOpen = React.useContext(DialogContext);
	if (!isOpen) {
		throw new Error('useDialog must be used within a DialogProvider');
	}
	return isOpen;
};

export default function DialogProvider({
	children,
	initialState,
}: {
	children: React.ReactNode;
	initialState: boolean;
}) {
	const [isOpen, setIsOpen] = DialogState(initialState);

	return <DialogContext.Provider value={[isOpen, setIsOpen]}>{children}</DialogContext.Provider>;
}
