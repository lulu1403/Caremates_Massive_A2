import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Beranda from "./pages/beranda";
import BeriDonasi from "./pages/BeriDonasi";
import Pusatbantuan from "./pages/Pusatbantuan";
import Tentangkami from "./pages/Tentangkami";
import Buatakun1 from "./pages/Buatakun1";
import Buatakun2 from "./pages/Buatakun2";
import Buatakun3 from "./pages/Buatakun3";
import Galeripanti from "./pages/Galeripanti";    
import Transaksi2 from "./pages/transaksi2";
import Login from "./pages/login";
import Pengajuanpenggalangan from "./pages/Pengajuanpenggalangan";
import Detailyayasan from "./pages/Detailyayasan";
import Homepanti from "./pages/Homepanti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beridonasi" element={<BeriDonasi />} />
        <Route path="/tentangkami" element={<Tentangkami />} />
        <Route path="/pusatbantuan" element={<Pusatbantuan />} />
        <Route path="/buatakun1" element={<Buatakun1 />} />
        <Route path="/buatakun2" element={<Buatakun2 />} />
        <Route path="/buatakun3" element={<Buatakun3 />} />
        <Route path="/galeripanti" element={<Galeripanti />} />
        <Route path="/transaksi2" element={<Transaksi2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pengajuanpenggalangan" element={<Pengajuanpenggalangan />} />
        <Route path="/detailyayasan" element={<Detailyayasan />} />
        <Route path="/homepanti" element={<Homepanti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
