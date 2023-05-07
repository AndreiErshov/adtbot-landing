import 'swiper/css';
import '@/styles/styles.scss';
import type { AppProps } from 'next/app'
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';
import { useWindowSize } from 'usehooks-ts';
import UpBtn from '@/components/UpBtn/UpBtn';
import {useEffect, useState} from 'react';
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
import { AnimatePresence } from 'framer-motion';
 
export default function App({ Component, pageProps }: AppProps) {

  const [up, setUp] = useState(false)

  const getTop = () => {
    if(document.documentElement?.scrollTop > 20) {
      setUp(true)
    } else setUp(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', getTop)

    return () => {
      document.removeEventListener('scroll', getTop)
    }
  })

  return (
    <>
      <Component {...pageProps} />
      <AnimatePresence>
      {
        up ? <UpBtn/> : null
      }
      </AnimatePresence>
      
      
    </>
  )
}
