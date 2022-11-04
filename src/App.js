
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
 
function App() {
 
 
          //di dalam router gunakan fungsi Routes
          //didalam Routes gunakan route yang di instal dari react router dom
          //di dalam route terdapat atribut path yaitu url
          //panggil komponen pada saat mengunjungi slash
  return (
    <div>
      <Router>
        <Routes>

          <Route exact path="/" element={<ProductList/>} />
          
          <Route path="/about" element={<About/>} />
            
          <Route path="/contact" element={<Contact/>} />
    
        </Routes>
      </Router>
    </div>
  );
}
 //7.JSON SERVER
    //membuai API palsu
    //buat file db.json dan isi filenya
    /*buka terminal baru dan jalankan perintah berikut:
npx json-server --watch db.json --port 8080
Kembali ke browser dan kunjungi URL berikut:
http://localhost:8080/products */
export default App;
