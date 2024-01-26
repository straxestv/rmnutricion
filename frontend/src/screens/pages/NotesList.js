
import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import {  useState } from "react";
import { Link } from 'react-router-dom';

// hacer fecha en calendario

export default function ComponentLamb() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getNotes = async () => {
        const res = await axios.get(`/api/rutina/adm`);
        console.log(res);
        setNotes(res.data);
        };
        getNotes();
    }, []);
    
    return (
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
                        {
                                
                                notes.map((ruti) => (
                            <div className="row g-0 rounded shadow-sm accordion" id="accordionExample" key={ruti._id}>
                                    
                                    <div className="col p-4">
                                                    <div>
                                                        <table className="table table-dark table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th className='LambClas' colSpan="3">
                                                                        <p  className='accordion-header" '>
                                                                            
                                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+ruti._id}  aria-expanded="false" aria-controls={ruti._id}>
                                                                        Laboratorio: {ruti.Laboratorio}
                                                                            </button>
                                                                        </p>
                                                                        <div className="card-header d-flex justify-content-between align-items-center">

                                                                        <Link to={"/edit/" + ruti._id} className="btn btn-sm">
                                                                            <i className="material-icons">Editar</i>
                                                                        </Link>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id={ruti._id} className="accordion-collapse collapse show" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                <tr className="table-active">
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Computadoras{ruti.NumComp} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> Ultima fecha de mantenimiento {ruti.NumMonitor} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Proyector :{ruti.Proyector} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Switch {ruti.Switch} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="table-active">
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS1} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha1} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus1} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="table-active">
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS2} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha2} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus2} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="table-active">
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS3} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha3} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus3} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="table-active">
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS4} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha4} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus4} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS5} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha5} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus5} </p>
                                                                    </td>
                                                                </tr>  
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS6} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha6} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus6} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS7} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha7} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus7} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS8} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha8} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus8} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS9} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha9} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus9} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS10} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha10} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus10} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS11} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha11} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus11} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS12} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha12} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus12} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS13} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha13} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus13} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS14} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha14} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus14} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS15} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha15} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus15} </p>
                                                                    </td>
                                                                </tr>
                                                                {/* Para el número 16 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS16} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha16} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus16} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 17 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS17} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha17} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus17} </p>
                                                                    </td>
                                                                </tr>
                                                                {/* Para el número 18 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS18} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha18} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus18} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 19 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS19} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha19} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus19} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 20 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS20} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha20} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus20} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 21 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS21} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha21} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus21} </p>
                                                                    </td>
                                                                </tr>
                                                                {/* Para el número 22 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS22} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha22} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus22} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 23 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS23} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha23} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus23} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 24 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS24} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha24} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus24} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 25 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS25} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha25} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus25} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 26 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS26} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha26} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus26} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 27 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS27} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha27} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus27} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 28 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS28} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha28} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus28} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 29 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS29} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha29} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus29} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 30 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS30} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha30} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus30} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 31 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS31} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha31} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus31} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 32 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS32} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha32} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus32} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 33 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS33} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha33} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus33} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 34 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS34} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha34} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus34} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 35 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de activo {ruti.CompS35} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'> ¿Tiene monitor? {ruti.CompFecha35} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Estatus: {ruti.estatus35} </p>
                                                                    </td>
                                                                </tr>


                                                                
                                                            </tbody>
                                                        </table>
                                            
                                                    </div>
                                                    
                                                </div>
                            </div>
                                ))
                                }
                        </div>
                    </div>

                </div>
        
        </div>
    );
}
function Rutina({ ruti }) {
    return <div className="row g-0 rounded shadow-sm">
    <div className="col p-4">
        <h2>Rutinas</h2>
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th colSpan="3"><p className='salto'>Laboratorio: {ruti.Laboratorio}</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>Numero de Computadoras{ruti.NumComp} </p>
                        </th>
                        <td>
                            <p className='salto'>Numero de activo es {ruti.NumMonitor} </p>
                        </td>
                        <td>
                            <p className='salto'>Proyector :{ruti.Proyector} </p>
                        </td>
                        <td>
                            <p className='salto'>Switch {ruti.Switch} </p>
                        </td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
        
    </div>
    <tbody id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <tr className="table-active">
                                                    <th scope="row">
                                                        <p className='salto'>Numero de Computadoras{ruti.NumComp} </p>
                                                    </th>
                                                    <td>
                                                        <p className='salto'>Numero de activo es {ruti.NumMonitor} </p>
                                                    </td>
                                                    <td>
                                                        <p className='salto'>Proyector :{ruti.Proyector} </p>
                                                    </td>
                                                    <td>
                                                        <p className='salto'>Switch {ruti.Switch} </p>
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
</div>
}