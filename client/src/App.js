import AppRoutes from './AppRoutes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import { useLoading } from './hooks/useLoading';
import { setLoadingInterceptor } from './interceptors/loadingInterceptor';
import { useEffect } from 'react';

function App() {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, []);

  return (
    <div className="app">
      <Loading />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;