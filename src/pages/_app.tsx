// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import type { AppProps } from 'next/app';

// import '@/styles/globals.css';

// import Layout from '@/components/Layout';
// import { AppStateContextProvider } from '@/context/AppState';
// import { CartContextProvider } from '@/context/Cart';
// import { FilterContextProvider } from '@/context/Filter';
// import { MountContextProvider } from '@/context/Mount';

// // Create a client
// const queryClient = new QueryClient();

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <MountContextProvider>
//       <AppStateContextProvider>
//         <CartContextProvider>
//           <FilterContextProvider>
//             <QueryClientProvider client={queryClient}>
//               <Layout>
//                 <Component {...pageProps} />
//               </Layout>
//             </QueryClientProvider>
//           </FilterContextProvider>
//         </CartContextProvider>
//       </AppStateContextProvider>
//     </MountContextProvider>
//   );
// }

import type { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/Layout';
import { AppStateContextProvider } from '@/context/AppState';
import { CartContextProvider } from '@/context/Cart';
import { FilterContextProvider } from '@/context/Filter';
import { MountContextProvider } from '@/context/Mount';

const queryClient = new QueryClient();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>); // 👈 по умолчанию Layout

  return (
    <MountContextProvider>
      <AppStateContextProvider>
        <CartContextProvider>
          <FilterContextProvider>
            <QueryClientProvider client={queryClient}>
              {getLayout(<Component {...pageProps} />)}
            </QueryClientProvider>
          </FilterContextProvider>
        </CartContextProvider>
      </AppStateContextProvider>
    </MountContextProvider>
  );
}
