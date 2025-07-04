'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import Heading from '@/components/ui/Heading';
import { Button } from '@/components/ui/buttons/Button';
import { Field } from '@/components/ui/fields/Field';

import { TAuthForm } from '@/types/auth.types';

import { DASHBOARD_PAGES } from '@/config/pages/url.config';

import { authService } from '@/services/auth.service';

const Auth = () => {
	const { register, handleSubmit, reset } = useForm<TAuthForm>({
		mode: 'onChange',
	});

	const [isLoginForm, setIsLoginForm] = useState<boolean>(false);

	const { push } = useRouter();

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: TAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!v');
			reset();
			push(DASHBOARD_PAGES.HOME);
		},
	});

	const onSubmit: SubmitHandler<TAuthForm> = (data) => mutate(data);

	return (
		<div className="flex min-h-screen">
			<form
				className="w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title="Auth" />

				<Field
					id="email"
					label="Email"
					placeholder="Enter email"
					extra="mb-4"
					{...register('email', {
						required: 'Email is required',
					})}
				/>
				<Field
					id="password"
					label="Password"
					placeholder="Enter password"
					extra="mb-6"
					{...register('password', {
						required: 'Password is required',
					})}
				/>
				<div className="flex item-center gap-5 justify-center">
					<Button onClick={() => setIsLoginForm(true)}>Login</Button>
					<Button onClick={() => setIsLoginForm(false)}>Registration</Button>
				</div>
			</form>
		</div>
	);
};

export default Auth;
