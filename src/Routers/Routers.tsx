import { Route, BrowserRouter, Routes  } from "react-router-dom";
import {Menu} from '../Pages/Menu/menu';
import { Members } from '../Pages/Members/members';

export function Routers() {
  return (
    <BrowserRouter>
        <Routes >
             <Route path="/" element={<Menu />} /> 
             <Route path="/membros" element={<Members />} /> 
        </Routes>
    </BrowserRouter>
  );
}