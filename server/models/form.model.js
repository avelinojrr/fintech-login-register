import mongoose from "mongoose";

const formsSchema = new mongoose.Schema({
        promotor: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        dni: {
            type: Number,
            required: true,
        },
        estadoCivil: {
            type: String,
            required: true
        },
        numeroCuentaBanco: {
            type: String,
            required: true
        },
        celular: {
            type: String,
            required: true
        },
        telefono: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        calle: {
            type: String,
            required: true
        },
        numeroCasa: {
            type: String,
            required: true
        },
        sector: {
            type: String,
            required: true
        },
        municipio: {
            type: String,
            required: true
        },
        provincia: {
            type: String,
            required: true
        },
        sueldoNeto: {
            type: Number,
            required: true
        },
        nombreEmpresa: {
            type: String,
            required: true
        },
        motivoPrestamo: {
            type: String,
            required: true
        },
        montoSolicitado: {
            type: Number,
        },
        cantidadCuotas: {
            type: Number,
            required: true
        },
        profesion: {
            type: String
        },
        bancoNomina: {
            type: String
        },
        fechaNacimiento: {
            type: Date,
            required: true
        },
        sexo: {
            type: String,
            required: true
        },
        /*foto: {
            data: Buffer,  
            contentType: String 
        },
        /*tieneCuentaPrevia: {
            type: Boolean,
            default: false
        }*/
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    });

export default mongoose.model("Form", formsSchema);