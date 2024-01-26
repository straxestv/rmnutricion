import React, { Component } from 'react'
//import { Link, useParams } from 'react-router-dom';
import axios from 'axios'



export default class CreateRutina extends Component {
    

    state = {
        Laboratorio:'',
        NumComp:'',
        NumMonitor:'',
        Proyector:'',
        Switch:'',
        estatus:'',

        CompS1:'',
        CompFecha1:'',
        CompS2:'',
        CompFecha2:'',
        CompS3:'',
        CompFecha3:'',
        CompS4:'',
        CompFecha4:'',
        CompS5:'',
        CompFecha5:'',
        CompS6:'',
        CompFecha6:'',
        CompS7:'',
        CompFecha7:'',
        CompS8:'',
        CompFecha8:'',
        CompS9:'',
        CompFecha9:'',

        //laboratorio 10-19
        CompS11:'',
        CompFecha11:'',
        CompS12:'',
        CompFecha12:'',
        CompS13:'',
        CompFecha13:'',
        CompS14:'',
        CompFecha14:'',
        CompS15:'',
        CompFecha15:'',
        CompS16:'',
        CompFecha16:'',
        CompS17:'',
        CompFecha17:'',
        CompS18:'',
        CompFecha18:'',
        CompS19:'',
        CompFecha19:'',
        //laboratorio 20-29
        CompS21:'',
        CompFecha21:'',
        CompS22:'',
        CompFecha22:'',
        CompS23:'',
        CompFecha23:'',
        CompS24:'',
        CompFecha24:'',
        CompS25:'',
        CompFecha25:'',
        CompS26:'',
        CompFecha26:'',
        CompS27:'',
        CompFecha27:'',
        CompS28:'',
        CompFecha28:'',
        CompS29:'',
        CompFecha29:'',
        //laboratorio 30-35
        CompS31:'',
        CompFecha31:'',
        CompS32:'',
        CompFecha32:'',
        CompS33:'',
        CompFecha33:'',
        CompS34:'',
        CompFecha34:'',
        CompS35:'',
        CompFecha35:'',

        correo: '',
        editing: false,
        _id: ''
    }

    onSubmit = async (e) => {
        console.log(this.state._id);
            console.log('holaaaaa');
        e.preventDefault();
        if (this.state.editing) {
            
            const updatedNote = {
                NumComp: this.state.NumComp,
                NumMonitor: this.state.NumMonitor,
                Proyector: this.state.Proyector,
                Switch: this.state.Switch,
                Laboratorio: this.state.Laboratorio,
                estatus:this.state.estatus,

                CompS1:this.state.CompS1,
                CompFecha1:this.state.CompFecha1,
                CompS2:this.state.CompS2,
                CompFecha2:this.state.CompFecha2,
                CompS3:this.state.CompS3,
                CompFecha3:this.state.CompFecha3,
                CompS4:this.state.CompS4,
                CompFecha4:this.state.CompFecha4,
                CompS5:this.state.CompS5,
                CompFecha5:this.state.CompFecha5,
                CompS6:this.state.CompS6,
                CompFecha6:this.state.CompFecha6,
                CompS7:this.state.CompS7,
                CompFecha7:this.state.CompFecha7,
                CompS8:this.state.CompS8,
                CompFecha8:this.state.CompFecha8,
                CompS9:this.state.CompS9,
                CompFecha9:this.state.CompFecha9,

                //laboratorio 10-19
                CompS11:this.state.CompS11,
                CompFecha11:this.state.CompFecha11,
                CompS12:this.state.CompS12,
                CompFecha12:this.state.CompFecha12,
                CompS13:this.state.CompS13,
                CompFecha13:this.state.CompFecha13,
                CompS14:this.state.CompS14,
                CompFecha14:this.state.CompFecha14,
                CompS15:this.state.CompS15,
                CompFecha15:this.state.CompFecha15,
                CompS16:this.state.CompS16,
                CompFecha16:this.state.CompFecha16,
                CompS17:this.state.CompS17,
                CompFecha17:this.state.CompFecha17,
                CompS18:this.state.CompS18,
                CompFecha18:this.state.CompFecha18,
                CompS19:this.state.CompS19,
                CompFecha19:this.state.CompFecha19,
                //laboratorio 20-29
                CompS21:this.state.CompS21,
                CompFecha21:this.state.CompFecha21,
                CompS22:this.state.CompS22,
                CompFecha22:this.state.CompFecha22,
                CompS23:this.state.CompS23,
                CompFecha23:this.state.CompFecha23,
                CompS24:this.state.CompS24,
                CompFecha24:this.state.CompFecha24,
                CompS25:this.state.CompS25,
                CompFecha25:this.state.CompFecha25,
                CompS26:this.state.CompS26,
                CompFecha26:this.state.CompFecha26,
                CompS27:this.state.CompS27,
                CompFecha27:this.state.CompFecha27,
                CompS28:this.state.CompS28,
                CompFecha28:this.state.CompFecha28,
                CompS29:this.state.CompS29,
                CompFecha29:this.state.CompFecha29,
                //laboratorio 30-35
                CompS31:this.state.CompS31,
                CompFecha31:this.state.CompFecha31,
                CompS32:this.state.CompS32,
                CompFecha32:this.state.CompFecha32,
                CompS33:this.state.CompS33,
                CompFecha33:this.state.CompFecha33,
                CompS34:this.state.CompS34,
                CompFecha34:this.state.CompFecha34,
                CompS35:this.state.CompS35,
                CompFecha35:this.state.CompFecha35,


        

                date: this.state.date,
                correo: this.state.correo
            };
            await axios.put('/api/rutina/adm' + this.state._id, updatedNote);
        } else {
            const newNote = {
                Laboratorio: this.state.Laboratorio,
                NumComp: this.state.NumComp,
                NumMonitor: this.state.NumMonitor,
                Proyector: this.state.Proyector,
                Switch: this.state.Switch,

                CompS1:this.state.CompS1,
                CompFecha1:this.state.CompFecha1,
                estatus1:this.state.estatus1,
                CompS2:this.state.CompS2,
                CompFecha2:this.state.CompFecha2,
                estatus2:this.state.estatus2,
                CompS3:this.state.CompS3,
                CompFecha3:this.state.CompFecha3,
                estatus3:this.state.estatus3,
                CompS4:this.state.CompS4,
                CompFecha4:this.state.CompFecha4,
                estatus4:this.state.estatus4,
                CompS5:this.state.CompS5,
                CompFecha5:this.state.CompFecha5,
                estatus5:this.state.estatus5,
                CompS6:this.state.CompS6,
                CompFecha6:this.state.CompFecha6,
                estatus6:this.state.estatus6,
                CompS7:this.state.CompS7,
                CompFecha7:this.state.CompFecha7,
                estatus7:this.state.estatus7,
                CompS8:this.state.CompS8,
                CompFecha8:this.state.CompFecha8,
                estatus8:this.state.estatus8,
                CompS9:this.state.CompS9,
                CompFecha9:this.state.CompFecha9,
                estatus9:this.state.estatus9,

                //laboratorio 10-19
                CompS10:this.state.CompS10,
                CompFecha10:this.state.CompFecha10,
                estatus10:this.state.estatus10,
                CompS11:this.state.CompS11,
                CompFecha11:this.state.CompFecha11,
                estatus11:this.state.estatus11,
                CompS12:this.state.CompS12,
                CompFecha12:this.state.CompFecha12,
                estatus12:this.state.estatus12,
                CompS13:this.state.CompS13,
                CompFecha13:this.state.CompFecha13,
                estatus13:this.state.estatus13,
                CompS14:this.state.CompS14,
                CompFecha14:this.state.CompFecha14,
                estatus14:this.state.estatus14,
                CompS15:this.state.CompS15,
                CompFecha15:this.state.CompFecha15,
                estatus15:this.state.estatus15,
                CompS16:this.state.CompS16,
                CompFecha16:this.state.CompFecha16,
                estatus16:this.state.estatus16,
                CompS17:this.state.CompS17,
                CompFecha17:this.state.CompFecha17,
                estatus17:this.state.estatus17,
                CompS18:this.state.CompS18,
                CompFecha18:this.state.CompFecha18,
                estatus18:this.state.estatus18,
                CompS19:this.state.CompS19,
                CompFecha19:this.state.CompFecha19,
                //laboratorio 20-29
                CompS21:this.state.CompS20,
                CompFecha21:this.state.CompFecha20,
                estatus21:this.state.estatus20,
                CompS21:this.state.CompS21,
                CompFecha21:this.state.CompFecha21,
                estatus21:this.state.estatus21,
                CompS22:this.state.CompS22,
                CompFecha22:this.state.CompFecha22,
                estatus22:this.state.estatus22,
                CompS23:this.state.CompS23,
                CompFecha23:this.state.CompFecha23,
                estatus23:this.state.estatus23,
                CompS24:this.state.CompS24,
                CompFecha24:this.state.CompFecha24,
                estatus24:this.state.estatus24,
                CompS25:this.state.CompS25,
                CompFecha25:this.state.CompFecha25,
                estatus25:this.state.estatus25,
                CompS26:this.state.CompS26,
                CompFecha26:this.state.CompFecha26,
                estatus26:this.state.estatus26,
                CompS27:this.state.CompS27,
                CompFecha27:this.state.CompFecha27,
                estatus27:this.state.estatus27,
                CompS28:this.state.CompS28,
                CompFecha28:this.state.CompFecha28,
                estatus28:this.state.estatus28,
                CompS29:this.state.CompS29,
                CompFecha29:this.state.CompFecha29,
                estatus29:this.state.estatus29,
                //laboratorio 30-35
                CompS30:this.state.CompS30,
                CompFecha30:this.state.CompFecha30,
                estatus30:this.state.estatus30,
                CompS31:this.state.CompS31,
                CompFecha31:this.state.CompFecha31,
                estatus31:this.state.estatus31,
                CompS32:this.state.CompS32,
                CompFecha32:this.state.CompFecha32,
                estatus32:this.state.estatus32,
                CompS33:this.state.CompS33,
                CompFecha33:this.state.CompFecha33,
                estatus33:this.state.estatus33,
                CompS34:this.state.CompS34,
                CompFecha34:this.state.CompFecha34,
                estatus34:this.state.estatus34,
                CompS35:this.state.CompS35,
                CompFecha35:this.state.CompFecha35,
                estatus35:this.state.estatus35,
                correo: this.state.correo
            };
            console.log(newNote);
            axios.post('/api/rutina/adm', newNote);
            

        }
        window.location.href = '/';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div className="tab-pane active" id="Rutinas">
                <div className="row g-0 rounded shadow-sm">
                    <form className="" onSubmit={this.onSubmit}>
                    <div className="col p-4">
                        <h2>Laboratorio</h2>
                        <div>
                            <div>
                                <table className="table table-dark table-hover">
                                    <thead>
                                        <tr>
                                            <th colSpan="3">
                                                <input 
                                                    type="text" 
                                                    className='form-control' 
                                                    placeholder='Usuario' 
                                                    name="correo"
                                                    onChange={this.onInputChange}
                                                    value={this.state.correo}
                                                    required/>
                                                </th>
                                        </tr> 
                                    </thead>  
                                </table>                          
                            </div>
                            <div>
                                <table className="table table-dark table-hover">
                                    <thead>
                                        <tr>
                                            <th colSpan="3">
                                                <input 
                                                    type="text" 
                                                    className='form-control' 
                                                    placeholder='Laboratorio' 
                                                    name="Laboratorio"
                                                    onChange={this.onInputChange}
                                                    value={this.state.Laboratorio}
                                                    required/>
                                                </th>
                                        </tr> 
                                    </thead>  
                                </table>                          
                            </div>
                            <table className="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th colSpan="3">
                                            <input 
                                            type="text" 
                                            className='form-control' 
                                            placeholder='Numero de Computadoras' name="NumComp" onChange={this.onInputChange} value={this.state.NumComp}
                                            />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Ultima fecha de mantenimiento'
                                            name="NumMonitor"
                                            onChange={this.onInputChange}
                                            value={this.state.NumMonitor}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene Proyector?'
                                            name="Proyector"
                                            onChange={this.onInputChange}
                                            value={this.state.Proyector}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                                className='form-control' 
                                                placeholder='Tiene Switch?'
                                                name="Switch"
                                                onChange={this.onInputChange}
                                                value={this.state.Switch}>

                                                </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS1"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS1}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha1"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha1}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus1"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus1}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS2"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS2}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha2"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha2}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus2"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus2}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS3"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS3}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha3"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha3}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus3"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus3}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS4"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS4}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha4"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha4}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus4"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus4}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS5"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS5}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha5"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha5}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus5"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus5}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS6"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS6}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha6"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha6}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus6"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus6}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS7"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS7}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha7"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha7}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus7"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus7}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS8"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS8}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha8"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha8}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus8"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus8}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS9"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS9}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha9"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha9}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus9"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus9}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    {/* Laboratrio de 10 - 19 */}
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS10"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS10}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha10"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha10}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus10"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus10}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS11"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS11}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha11"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha11}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus11"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus11}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS12"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS12}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha12"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha12}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus12"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus12}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS13"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS13}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha13"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha13}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus13"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus13}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS14"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS14}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha14"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha14}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus14"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus14}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS15"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS15}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha15"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha15}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus15"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus15}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS16"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS16}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha16"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha16}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus16"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus16}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS17"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS17}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha17"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha17}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus17"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus17}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS18"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS18}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha18"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha18}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus18"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus18}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS19"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS19}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha19"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha19}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus19"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus19}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    {/* Laboratrio de 20 - 29 */}
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS20"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS20}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha20"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha20}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus20"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus20}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS21"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS21}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha21"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha21}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus21"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus21}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS22"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS22}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha22"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha22}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus22"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus22}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS23"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS23}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha23"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha23}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus23"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus23}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS24"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS24}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha24"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha24}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus24"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus24}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS25"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS25}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha25"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha25}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus25"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus25}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS26"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS26}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha26"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha26}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus26"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus26}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS27"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS27}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha27"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha27}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus27"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus27}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS28"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS28}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha28"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha28}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus28"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus28}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS29"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS29}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha29"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha29}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus29"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus29}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    {/*Laboratorio de 30-35 */}

                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS30"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS30}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha30"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha30}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus30"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus30}>

                                            </textarea>
                                        </td>
                                    </tr>

                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS31"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS31}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha31"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha31}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus31"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus31}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS32"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS32}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha32"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha32}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus33"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus32}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS33"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS33}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha33"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha33}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus26"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus33}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS34"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS34}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha34"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha34}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus26"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus34}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='Numero de Activo'
                                            name="CompS35"
                                            onChange={this.onInputChange}
                                            value={this.state.CompS35}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='Tiene monitor?'
                                            name="CompFecha35"
                                            onChange={this.onInputChange}
                                            value={this.state.CompFecha35}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='estatus'
                                            name="estatus35"
                                            onChange={this.onInputChange}
                                            value={this.state.estatus35}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            </div>
                        
                    </div>
                    <button className="btn btn-primary my-3 ms-4">
                                        Save <i className="material-icons">
                                                assignment
                                        </i>
                                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
