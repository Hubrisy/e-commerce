import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/Layout';
import { CartContextProvider } from '@/context/Cart';
import { FilterContextProvider } from '@/context/Filter';

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <FilterContextProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </FilterContextProvider>
    </CartContextProvider>
  );
}
