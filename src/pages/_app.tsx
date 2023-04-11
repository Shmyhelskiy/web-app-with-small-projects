import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../../components/Layout";
import store from '../../store/store'
import { Provider } from 'react-redux'



const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} className="md-auto" />
    </Layout>
    </Provider>
  );
}


export default  App