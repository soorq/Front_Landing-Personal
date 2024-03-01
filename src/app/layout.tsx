import { Open_Sans } from 'next/font/google';
import { type ReactNode, Suspense } from 'react';
import type { Metadata } from 'next';
import './globals.css';

const $app = process.env.NEXT_PUBLIC_APP_URL as string;

const openSans = Open_Sans({
	subsets: ['cyrillic'],
	display: 'swap',
	weight: ['300', '400', '500', '700'],
	variable: '--open-sans',
});

export const metadata: Metadata = {
	metadataBase: new URL($app),
	title: 'Aутстаффинг персонала',
	alternates: {
		canonical: new URL($app),
	},
	description:
		'Выведение персонала за штат компании от 3000 руб. Поможем остаться на УСН. Сокращение расходов предприятия от 550 тыс. в год.',
	keywords:
		'аутстаффинг, аутстаффинг персонала, вывод персонала, выведение персонала, вывод сотрудников за штат, снижение расходов на зарплату, аренда персонала, как вывести сотрудника за штат',
	openGraph: {
		title: 'Aутстаффинг персонала',
		description:
			'Выведение персонала за штат компании от 3000 руб. Поможем остаться на УСН. Сокращение расходов предприятия от 550 тыс. в год.',
		type: 'website',
		url: new URL($app),
	},
};

export default function RootLayout({ children }: { children: Readonly<ReactNode> }) {
	return (
		<html lang='ru' className={openSans.variable}>
			<body className='flex flex-col min-h-screen subpixel-antialiased'>
				<Suspense fallback>{children}</Suspense>

				<script
					dangerouslySetInnerHTML={{
						__html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
  							m[i].l=1*new Date(); 
   							for (var j = 0; j < document.scripts.length; j++) {
   							if (document.scripts[j].src === r) { return; }
   							} 
   							k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) 
   							(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
  							ym(29606390, "init", { 
  							     clickmap:true, 
  							     trackLinks:true, 
  							     accurateTrackBounce:true, 
  							     webvisor:true 
  							}); 
              `,
					}}
					async
				/>
			</body>
		</html>
	);
}
