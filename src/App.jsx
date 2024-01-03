import { styled } from "styled-components";
import PageProducts from "./pages/PageProducts"
 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./index.css"


const App = () => {
  return(
    <>
       <PageProducts />
    </>
  )
}

const PageProductsContainer = styled.div``;

export default App;