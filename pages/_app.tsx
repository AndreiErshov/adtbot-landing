import 'swiper/css';
import '@/styles/styles.scss';
import type { AppProps } from 'next/app'
import NProgress from 'nprogress';
import Router from 'next/router';
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

import 'nprogress/nprogress.css'; 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
