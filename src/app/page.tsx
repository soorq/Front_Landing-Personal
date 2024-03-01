import {
	AboutOutstaffingSection,
	AdvantagesSection,
	FaqSection,
	Footer,
	GetTestDriveSection,
	GuarantySection,
	HeroSection,
	LicensesSection,
	OrderCallDialog,
	SolutionSection,
	StepsSection,
	SuccessModal,
} from '@/components';

import React from 'react';

export default function Home() {
	return (
		<>
			<main className='w-full h-full overflow-x-hidden'>
				<HeroSection />
				<OrderCallDialog />
				<GetTestDriveSection />
				<AboutOutstaffingSection />
				<AdvantagesSection />
				<StepsSection />
				<LicensesSection />
				<GuarantySection />
				<SolutionSection />
				<FaqSection />
				<SuccessModal />
			</main>
			<Footer />
		</>
	);
}
