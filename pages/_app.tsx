import 'swiper/css';
import '@/styles/styles.scss';
import type { AppProps } from 'next/app'
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';
import { useWindowSize } from 'usehooks-ts';
import UpBtn from '@/components/UpBtn/UpBtn';
import {useEffect, useState} from 'react';
import { AnimatePresence } from 'framer-motion';
import ExitModal from '@/modals/ExitModal/ExitModal';
import GuideModal from '@/modals/GuideModal/GuideModal';
import FancyboxWrapper from '@/components/FancyboxWrapper/FancyboxWrapper';
import '@/pages/normalize.css';

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

let f = false

export default function App({ Component, pageProps }: AppProps) {
  const [exit, setExit] = useState(false)
  const [up, setUp] = useState(false)
  const [guide, setGuide] = useState(true)
  

  const getTop = () => {
    if(document.documentElement?.scrollTop > 20) {
      setUp(true)
    } else setUp(false)
  }
  

  const showExit = (e:any) => {
    if(e.y <= 0 && !f) {
      setExit(true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', getTop)
    document.addEventListener('mouseout', showExit)
    return () => {
      document.removeEventListener('scroll', getTop)
    }
  })

  return (
    <FancyboxWrapper options={{ infinite: false, autoFocus: false }}>
      <Component {...pageProps} />
      <ExitModal  
        open={exit}
        onCancel={() => {
          setExit(false)
          f = true
        }}
        />
      <GuideModal
        open={guide}
        onClose={() => setGuide(false)}
        />
      <AnimatePresence>
      {
        up ? <UpBtn/> : null
      }
      </AnimatePresence>
      
      
    </FancyboxWrapper>
  )
}
