import React from "react";
import Header from "../componentes/Header";
import Content from "../componentes/Content";
import Footer from "../componentes/Footer";
import Aside from "../componentes/aside";



const home = () =>{
    
    return(
        <div >
           <Header />
           <Aside></Aside>
           <Content/>
           <Footer/>
        
        </div>
        
        
    );
}

export default home;