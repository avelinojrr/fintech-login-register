import {
    Router
} from "express";
import {
    authRequired
} from "../middlewares/validateToken.js";
import {
    getForms,
    getForm,
    createForm,
    updateForm,
    deleteForm
} from "../controllers/forms.controller.js";

// initialize router
const router = Router();

// define routes
router.get("/forms", authRequired, getForms);

router.get("/forms/:id", authRequired, getForm);

router.post("/forms", authRequired, createForm);

router.delete("/forms/:id", authRequired, deleteForm);

router.put("/forms/:id", authRequired, updateForm);

export default router;