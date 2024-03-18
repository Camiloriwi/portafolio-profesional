
const Notas = require('../models/model');

const userNotas = {

    getNotas:async (req, res)=>{

        try {
            const notas= await Notas.find();
            res.json({  

                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/all/notes',
                data: notas

            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/all/notes',
                error: error.message
            })
            
        }
    },

    getNotas1:async (req, res)=>{

        try {
            const notas= await Notas.find({nota2:4.6});
            res.json({  

                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/all/notes',
                data: notas

            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/all/notes',
                error: error.message
            })
            
        }
    },


    createNotes: async (req, res)=>{
        try {
           
            
            const newUser = new Notas({
                nombre: req.body.nombre,
                usuario: req.body.usuario,
                nota1: req.body.nota1,
                nota2: req.body.nota2
            });
            await newUser.save();
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada method: post: /api/users',
                data: newUser
            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users',
                error: error.message
            });
            
        }
    }
};


module.exports = userNotas;