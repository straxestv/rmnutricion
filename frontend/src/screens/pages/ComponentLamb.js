
import React, {  useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ComponentLamb() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getNotes = async () => {
            console.log(`/api/rutina/adma/${notes.id}`);
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

                                                                        <Link to={"/contet/" + ruti._id} className="btn btn-sm">
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
                                                                        <p className='salto'>Numero de Monitores {ruti.NumMonitor} </p>
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
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS1} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha1} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus1} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="table-active">
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS2} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha2} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus2} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="table-active">
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS3} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha3} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus3} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="table-active">
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS4} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha4} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus4} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS5} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha5} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus5} </p>
                                                                    </td>
                                                                </tr>  
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS6} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha6} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus6} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS7} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha7} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus7} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS8} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha8} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus8} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS9} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha9} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus9} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS10} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha10} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus10} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS11} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha11} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus11} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS12} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha12} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus12} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS13} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha13} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus13} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS14} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha14} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus14} </p>
                                                                    </td>
                                                                </tr>
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS15} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha15} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus15} </p>
                                                                    </td>
                                                                </tr>
                                                                {/* Para el número 16 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS16} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha16} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus16} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 17 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS17} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha17} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus17} </p>
                                                                    </td>
                                                                </tr>
                                                                {/* Para el número 18 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS18} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha18} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus18} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 19 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS19} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha19} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus19} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 20 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS20} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha20} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus20} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 21 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS21} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha21} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus21} </p>
                                                                    </td>
                                                                </tr>
                                                                {/* Para el número 22 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS22} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha22} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus22} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 23 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS23} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha23} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus23} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 24 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS24} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha24} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus24} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 25 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS25} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha25} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus25} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 26 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS26} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha26} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus26} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 27 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS27} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha27} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus27} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 28 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS28} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha28} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus28} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 29 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS29} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha29} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus29} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 30 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS30} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha30} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus30} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 31 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS31} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha31} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus31} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 32 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS32} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha32} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus32} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 33 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS33} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha33} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus33} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 34 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS34} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha34} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus34} </p>
                                                                    </td>
                                                                </tr>

                                                                {/* Para el número 35 */}
                                                                <tr className={`table-active`}>
                                                                    <th scope="row">
                                                                        <p className='salto'>Numero de Monitor{ruti.CompS35} </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className='salto'>Ultima Fecha de mantenimiento {ruti.CompFecha35} </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className='salto'>Activo :{ruti.estatus35} </p>
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
                            <p className='salto'>Numero de serie {ruti.NumMonitor} </p>
                        </td>
                        <td>
                            <p className='salto'>Fecha de mantenimiento {ruti.NumMonitor} </p>
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
    

    <div className="col p-4">
                                    <div>
                                        <table className="table table-dark table-hover">
                                            <thead>
                                                <tr>
                                                    <th className='LambClas' colSpan="3">
                                                        <p  className='accordion-header" '>
                                                        <Link rel="stylesheet" to={`/contet/${ruti._id}`} >Laboratorio: {ruti.Laboratorio} </Link>
                                                        </p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <tr className="table-active">
                                                    <th scope="row">
                                                        <p className='salto'>Numero de Computadoras{ruti.NumComp} </p>
                                                    </th>
                                                    //
                                                    <td>
                                                        <p className='salto'>Numero de Serie {ruti.NumMonitor} </p>
                                                    </td> 
                                                    <td>
                                                      <p className='salto'>Fecha de mantenimiento {ruti.NumMonitor} </p>
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
</div>
}