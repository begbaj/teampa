import { Router } from "express";
import { DatasetController } from "@/controllers/dataset.controller";

const router = Router();
const datasetController = new DatasetController();

router.get("/:id", datasetController.getByFilters);
router.post("/", datasetController.create);
router.put("/:id", datasetController.updateById);
router.delete("/:id", datasetController.deleteById);

// router.get("/stats", datasetController.getUserDatasetStats);
// router.get("/search", datasetController.searchDatasets);
// router.get("/:id", datasetController.getDatasetById);
// router.put("/:id", datasetController.updateDataset);
// router.patch("/:id/tags", datasetController.updateDatasetTags);
// router.delete("/:id", datasetController.deleteDataset);
// router.post("/:id/restore", datasetController.restoreDataset);

export default router;
