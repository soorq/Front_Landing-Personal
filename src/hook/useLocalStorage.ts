import { useEffect, useState } from 'react';

const useLocalStorage = (key: string) => {
	const [storedValue, setValue] = useState<string | null>();

	useEffect(() => {
		const item: string | null = localStorage.getItem(key);

		setValue(item);
	}, [setValue, key]);

	return storedValue;
};

export default useLocalStorage;
