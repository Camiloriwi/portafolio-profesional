
const mongoose = require('mongoose');
// const { db } = require('../models/model');

let Nota;
// Notas = mongoose.model('notas',require('../models/model').schema);


const connectDB = async()=>{

    try {
        if (!Nota) {
             Nota = mongoose.model('notas',require('../models/model').schema);
        }
        await mongoose.connect('mongodb+srv://camilomanco2005:sfQWNKEibqAG58BA@camilo.wlx2kje.mongodb.net/')
        .then(()=>{console.log('connected database')})
        .catch(err=>{console.log(err)});
        await iniciarData();

    } catch (error) {
        console.error('Failed to connect database', error);
        process.exit(1);
    }
};

const iniciarData = async()=>{

    try {
        // await Nota.deleteMany();
        // await Nota.insertMany([
          
        //     { 
        //         nombre: 'David', 
        //         usuario: 103, 
        //         nota1: 4.5, 
        //         nota2: 3.9 
        //     },

        //     { 
        //         nombre: 'Elena', 
        //         usuario: 104, 
        //         nota1: 5.0, 
        //         nota2: 3.4 
        //     },
        //     { 
                
        //         nombre: 'ernando', 
        //         usuario: 105, 
        //         nota1: 5.0, 
        //         nota2: 4.5 
        //     },
        //     { 
        //         nombre: 'Gabriela', 
        //         usuario: 106, 
        //         nota1: 5.0, 
        //         nota2: 5.0 
        //     },
        //     { 
        //         nombre: 'Hugo', 
        //         usuario: 107, 
        //         nota1: 2.9, 
        //         nota2: 5.0 
        //     },
        //     { 
        //         nombre: 'Isabel', 
        //         usuario: 108, 
        //         nota1: 3.6, 
        //         nota2: 4.8
        //     },
        //     { 
        //         nombre: 'Javier', 
        //         usuario: 109, 
        //         nota1: 3.6, 
        //         nota2: 4.8 
        //     },
        //     { 
        //         nombre: 'Karla', 
        //         usuario: 110, 
        //         nota1: 3.7, 
        //         nota2: 4.7 
        //     },
        //     { 
        //         nombre: 'Luis', 
        //         usuario: 111, 
        //         nota1: 3.2, 
        //         nota2: 5.0 
        //     },
        //     { 
        //         nombre: 'María', 
        //         usuario: 112, 
        //         nota1: 3.2, 
        //         nota2: 4.8
        //     },

        // ]);


        // await Nota.inserMany(users);

        console.log('data successfully initialized');
    } catch (error) {
        
        console.error('data failed to connect database',error);
        process.exit(1);

    }
};




module.exports = connectDB;


















