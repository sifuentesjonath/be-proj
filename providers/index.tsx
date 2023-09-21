'use client';
import { FC, ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import ReduxProvider from './ReduxProvider'

const queryClient = new QueryClient();

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ReduxProvider>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ReduxProvider>
	)
}

export default Providers