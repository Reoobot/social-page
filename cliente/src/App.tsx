
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import DetailPage from './pages/DetailPage';
import FormPage from './pages/FormPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Nofound from './pages/Nofound';
import Profile from './pages/Profile';
import RecetaListPage from './pages/RecetaListPage';
import SocialPage from './pages/SocialPage';
import StaticPage from './pages/StaticPage';

function App() {
  return (

    
   <Routes>
                    
              <Route path='/' element={<Home />} />
          <Route>
               <Route element={<Layout />} /> 
                  <Route path='/SocialPage' element={<SocialPage />} />
                  <Route path='/StaticPage' element={<StaticPage />} />
                  <Route path='/RecetaListPage' element={<RecetaListPage />} />
                  <Route path='/DetailPage' element={<DetailPage />} />
                  <Route path='/FormPage' element={<FormPage />} />
                  <Route path='/Login' element={<Login />} />
                  <Route path='/Profile' element={<Profile />} />
          </Route>
            <Route path='*' element={<Nofound />} />

   </Routes>

  );
}

export default App;
