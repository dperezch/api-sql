import { Router } from "express";
import { methods as languajeController } from "../controllers/languaje.controller"

const router = Router();

router.get("/", languajeController.getLanguajes);
router.get("/:id", languajeController.getLanguaje);
router.post("/", languajeController.addLanguaje);
router.delete("/:id", languajeController.deleteLanguaje);
router.put("/:id", languajeController.updateLanguaje);

export default router;