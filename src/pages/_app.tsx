import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} />
      </AnimatePresence>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}
