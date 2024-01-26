import React, { Component}  from 'react';
import { Helmet } from 'react-helmet-async';


export default class Directorio extends Component { 
    render(){
    return (
        <div>
            <div>
                <Helmet>
                    <title>Contenido exclusivo</title>
                </Helmet>
                    <div className="post-img">
                    {/* Post */}
                        <div className="text-white text-center rgba-stylish-strong">
                            <div className="py-3">
                
                                <h1>Laboratorios</h1>
                            </div>
                        </div>
                    </div>   
                    <div className="rgbcolor1 container mt-2 text-white  rounded-top">
                                    
                        <div className="">
                            <div className="tab-pane" id="Dietas">
                                    {/* .map*/}
                                                <div className="row g-0 rounded shadow-sm" >
                                                    
                                                <div className="col p-4">
                                                    <h2>Rutinas</h2>
                                                    <div>
                                                        <table className="table table-dark table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan="3"><p className='salto'>Laboratorio: </p></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="table-active">
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Computadoras </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Numero de Monitores  </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Proyector : </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Switch </p>
                                                                    </td>
                                                                </tr>
                                                                
                                                            </tbody>
                                                        </table>
                                            
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                               
                                        </div>
                                    </div>
                
                    </div>
                        
            </div>
        </div>

    );
}}



