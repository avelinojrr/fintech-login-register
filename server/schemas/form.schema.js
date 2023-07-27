import {
    z
} from "zod";

export const createFormSchema = z.object({
    promotor: z.string({
        required_error: "Promotor is required",
    }),
    nombre: z.string({
        required_error: "Nombre is required",
    }),
    apellido: z.string({
        required_error: "Apellido is required",
    }),
    dni: z.number({
        required_error: "Cédula is required",
    }),
    estadoCivil: z.string({
        required_error: "Estado civil is required",
    }),
    numeroCuentaBanco: z.number({
        required_error: "Número de cuenta is required",
    }),
    celular: z.string({
        required_error: "Celular is required",
    }),
    telefono: z.string({
        required_error: "Teléfono is required",
    }).optional(),
    email: z.string({
        required_error: "Email is required",
    }),
    calle: z.string({
        required_error: "Calle is required",
    }),
    numeroCasa: z.string({
        required_error: "Número de casa is required",
    }),
    sector: z.string({
        required_error: "Sector is required",
    }),
    municipio: z.string({
        required_error: "Municipio is required",
    }),
    provincia: z.string({
        required_error: "Provincia is required",
    }),
    sueldoNeto: z.number({
        required_error: "Sueldo neto is required",
    }),
    nombreEmpresa: z.string({
        required_error: "Nombre de empresa is required",
    }),
    motivoPrestamo: z.string({
        required_error: "Motivo de préstamo is required",
    }),
    montoSolicitado: z.number({
        required_error: "Monto solicitado is required",
    }),
    cantidadCuotas: z.number({
        required_error: "Cantidad de cuotas is required",
    }),
    profesion: z.string({
        required_error: "Profesión is required",
    }),
    bancoNomina: z.string({
        required_error: "Banco de nómina is required",
    }),
    fechaNacimiento: z.string({
        required_error: "Fecha de nacimiento is required",
    }),
    sexo: z.string({
        required_error: "Sexo is required",
    }),

})
