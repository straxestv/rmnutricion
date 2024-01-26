import express from "express";
import Rutina from "../models/rutina.js";
import { isAuthFactory }  from "../utils.js";

const router = express.Router();

router.post("/adm",async (req, res) => {
    const newRutina = new Rutina({
        Laboratorio:req.body.Laboratorio,
        NumComp:req.body.NumComp,
        NumMonitor:req.body.NumMonitor,
        Proyector:req.body.Proyector,
        Switch:req.body.Switch,
        correo: req.body.correo,
        

        CompS1:req.body.CompS1,
        CompFecha1:req.body.CompFecha1,
        estatus1:req.body.estatus1,
        CompS2:req.body.CompS2,
        CompFecha2:req.body.CompFecha2,
        estatus2:req.body.estatus2,
        CompS3:req.body.CompS3,
        CompFecha3:req.body.CompFecha3,
        estatus3:req.body.estatus3,
        CompS4:req.body.CompS4,
        CompFecha4:req.body.CompFecha4,
        estatus4:req.body.estatus4,
        CompS5:req.body.CompS5,
        CompFecha5:req.body.CompFecha5,
        estatus5:req.body.estatus5,
        CompS6:req.body.CompS6,
        CompFecha6:req.body.CompFecha6,
        estatus6:req.body.estatus6,
        CompS7:req.body.CompS7,
        CompFecha7:req.body.CompFecha7,
        estatus7:req.body.estatus7,
        CompS8:req.body.CompS8,
        CompFecha8:req.body.CompFecha8,
        estatus8:req.body.estatus8,
        CompS9:req.body.CompS9,
        CompFecha9:req.body.CompFecha9,
        estatus9:req.body.estatus9,

        //laboratorio 10-19
        CompS10:req.body.CompS10,
        CompFecha10:req.body.CompFecha10,
        estatus10:req.body.estatus10,
        CompS11:req.body.CompS11,
        CompFecha11:req.body.CompFecha11,
        estatus11:req.body.estatus11,
        CompS12:req.body.CompS12,
        CompFecha12:req.body.CompFecha12,
        estatus12:req.body.estatus12,
        CompS13:req.body.CompS13,
        CompFecha13:req.body.CompFecha13,
        estatus13:req.body.estatus13,
        CompS14:req.body.CompS14,
        CompFecha14:req.body.CompFecha14,
        estatus14:req.body.estatus14,
        CompS15:req.body.CompS15,
        CompFecha15:req.body.CompFecha15,
        estatus15:req.body.estatus15,
        CompS16:req.body.CompS16,
        CompFecha16:req.body.CompFecha16,
        estatus16:req.body.estatus16,
        CompS17:req.body.CompS17,
        CompFecha17:req.body.CompFecha17,
        estatus17:req.body.estatus17,
        CompS18:req.body.CompS18,
        CompFecha18:req.body.CompFecha18,
        estatus18:req.body.estatus18,
        CompS19:req.body.CompS19,
        CompFecha19:req.body.CompFecha19,
        estatus19:req.body.estatus19,
        //laboratorio 20-29
        CompS20:req.body.CompS20,
        CompFecha20:req.body.CompFecha20,
        estatus20:req.body.estatus20,
        CompS21:req.body.CompS21,
        CompFecha21:req.body.CompFecha21,
        estatus21:req.body.estatus21,
        CompS22:req.body.CompS22,
        CompFecha22:req.body.CompFecha22,
        estatus22:req.body.estatus22,
        CompS23:req.body.CompS23,
        CompFecha23:req.body.CompFecha23,
        estatus23:req.body.estatus23,
        CompS24:req.body.CompS24,
        CompFecha24:req.body.CompFecha24,
        estatus24:req.body.estatus24,
        CompS25:req.body.CompS25,
        CompFecha25:req.body.CompFecha25,
        estatus25:req.body.estatus25,
        CompS26:req.body.CompS26,
        CompFecha26:req.body.CompFecha26,
        estatus26:req.body.estatus26,
        CompS27:req.body.CompS27,
        CompFecha27:req.body.CompFecha27,
        estatus27:req.body.estatus27,
        CompS28:req.body.CompS28,
        CompFecha28:req.body.CompFecha28,
        estatus28:req.body.estatus28,
        CompS29:req.body.CompS29,
        CompFecha29:req.body.CompFecha29,
        estatus29:req.body.estatus29,
        //laboratorio 30-35
        CompS30:req.body.CompS30,
        CompFecha30:req.body.CompFecha30,
        estatus30:req.body.estatus30,
        CompS31:req.body.CompS31,
        CompFecha31:req.body.CompFecha31,
        estatus31:req.body.estatus31,
        CompS32:req.body.CompS32,
        CompFecha32:req.body.CompFecha32,
        estatus32:req.body.estatus32,
        CompS33:req.body.CompS33,
        CompFecha33:req.body.CompFecha33,
        estatus33:req.body.estatus33,
        CompS34:req.body.CompS34,
        CompFecha34:req.body.CompFecha34,
        estatus34:req.body.estatus34,
        CompS35:req.body.CompS35,
        CompFecha35:req.body.CompFecha35,
        estatus35:req.body.estatus35,

        
    });
    const newOrderRutina = await newRutina.save();
    res.status(201).send({ message: "se creo una rutina", data: newOrderRutina });
    
});


router.get('/adm',async (req, res) => {
    const rut = await Rutina.find();
        //res.json(rut);
        console.log(rut);
        res.send(rut);
}); 
router.get('/adma/:id',async (req, res) => {
    const rut = await Rutina.findById(req.params.id);
        console.log(rut);
        res.send(rut);
}); 
router.get('/signin:correo', async (req, res) => {

    const rut = await Rutina.find();
    
        res.json(rut);

});
export default router;