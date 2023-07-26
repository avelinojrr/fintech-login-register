import Form from '../models/form.model.js'

export const getForms = async (req, res) => {
    const forms = await Form.find({
        user: req.user.id
    }).populate("user")
    res.json(forms)
}

export const createForm = async (req, res) => {
    const {
        promotor,
        nombre,
        apellido,
        dni,
        estadoCivil,
        numeroCuentaBanco,
        celular,
        telefono,
        email,
        calle,
        numeroCasa,
        sector,
        municipio,
        provincia,
        sueldoNeto,
        nombreEmpresa,
        motivoPrestamo,
        montoSolicitado,
        cantidadCuotas,
        profesion,
        bancoNomina,
        fechaNacimiento,
        sexo,
        //foto,
        //tieneCuentaPrevia
    } = req.body

    
    const newForm = new Form({
        promotor,
        nombre,
        apellido,
        dni,
        estadoCivil,
        numeroCuentaBanco,
        celular,
        telefono,
        email,
        calle,
        numeroCasa,
        sector,
        municipio,
        provincia,
        sueldoNeto,
        nombreEmpresa,
        motivoPrestamo,
        montoSolicitado,
        cantidadCuotas,
        profesion,
        bancoNomina,
        fechaNacimiento,
        sexo,
        //foto,
        //tieneCuentaPrevia
        user: req.user.id
    })
    const savedForm = await newForm.save()
    res.json(savedForm)

}

export const getForm = async (req, res) => {
    const form = await Form.findById(req.params.id).populate("user")
    if (!form) return res.status(404).json({
        message: "Form not found"
    })
    res.json(form)
}

export const deleteForm = async (req, res) => {
    const form = await Form.findByIdAndDelete(req.params.id)
    if (!form) return res.status(404).json({
        message: "Form not found"
    })
    return res.sendStatus(204)
}

export const updateForm = async (req, res) => {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!form) return res.status(404).json({
        message: "Form not found"
    })
    res.json(form)
}