import SuccessDialogProvider from '@/Providers/SuccessModalProvider';
import DialogProvider from '@/Providers/OrderCallProvider';
import type { ReactNode } from 'react';

export default function RootTemplate({ children }: { children: ReactNode }) {
	return (
		<DialogProvider initialState={false}>
			<SuccessDialogProvider initialState={false}>{children}</SuccessDialogProvider>
		</DialogProvider>
	);
}
