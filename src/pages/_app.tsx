import type {AppProps} from "next/app";
import Footer from "@/components/layout/Footer/Footer";
import {store} from "@/store/store";
import {Provider} from "react-redux";
import '@/pages/appStyles.scss'



export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <div className='main-container'>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </Provider>
  )
}
