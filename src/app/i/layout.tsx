import { PropsWithChildren } from 'react';

import DashboardLayout from '@/components/dashboard-layout.tsx/DashboardLayout';

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
