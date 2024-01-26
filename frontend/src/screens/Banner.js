import React, { Component}  from 'react';
import'./styles/Banner.css';

export default class Banner extends Component { 
    render(){
        return(
        
            <div>

                <header className="headerr">
                        <div className="bg-dark ">
                        </div>

                        <div className="text-header d-flex align-items-center">
                            <div className="container banner-text">

                                <div className=" classss">
                                    <div className="col-sm-8">
                                        <h1 className='classss'>Propuesta de sistema para administración de activos fijos electrónicos de laboratorios pertenecientes a la academia de cómputo en ICE de la ESIME Zacatenco</h1>
                                        <p className='my-2 classss'></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                </header>

            </div>
        
        )
    }
}
