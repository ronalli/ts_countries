import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import './App.css';
import Home from './pages/Home/Home';
import { Details } from './pages/Details/Details';
import { NotFound } from './pages/404/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
