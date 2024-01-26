import React, { Component}  from 'react';
import {Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../styles/cards.css";

    
export default class Inicio extends Component { 
    render(){
        return (
            <div className="d-flex flex-column">
                {/* cards */}   
                <div className="container d-flex justify-content-around my-5 flex-wrap">
                    
                    <div className="card mb-3  notasin text-white" id='buttonI'>
                        <div className="card-body">
                            <Link><h4 className="card-title text-center  d-flex justify-content-center">Home</h4></Link>
                        </div>
                    </div>
                    <div className="card mb-3 text-white notasin  text-center "id='buttonI' >
                        <div className="card-body">
                            <Link><h4 className="card-title d-flex justify-content-center">Almacén</h4></Link>
                        </div>
                    </div>
                    <div className="card mb-3 text-white notasin text-center" id='buttonI'>
                        <div className="card-body">
                            <Link><h4 className="card-title d-flex justify-content-center">Laboratorios</h4></Link>
                        </div>
                    </div>
                    <div className="card mb-3 text-white notasin text-center" id='buttonI'>
                        <div className="card-body">{/* nose */ }
                            <Link><h4 className="card-title d-flex justify-content-center">Recursos Materiales</h4></Link>
                        </div>
                    </div>
                    <div className="card mb-3 text-white notasin text-center" id='buttonI'>
                        <div className="card-body">{/* nose */ }
                            <Link><h4 className="card-title d-flex justify-content-center">Directorio</h4></Link>
                        </div>
                    </div>
                </div>
                <div  className="container d-flex justify-content-around my-5 flex-wrap">
                    <div className="cardI mb-3  notasin text-white" id='buttonI'>
                        <div className="card-body">
                            <Link><h4 className="card-title text-center  d-flex justify-content-center">Home</h4></Link>
                        </div>

                    </div>

                </div>
                
    
            </div>
            
        )
    
    }
}
    