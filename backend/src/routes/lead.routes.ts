import express from "express";

import { createLead,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead,
  getStats,
 } from "../controllers/lead.controller";

import {
  protect,
  authorizeRoles,
} from "../middleware/auth.middleware";

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  createLead
);

router.get(
  "/",
  protect,
  authorizeRoles("admin", "sales"),
  getLeads
);

router.get(
  "/stats",
  protect,
  authorizeRoles("admin", "sales"),
  getStats
);

router.get(
  "/:id",
  protect,
  authorizeRoles("admin", "sales"),
  getLeadById
);

router.put(
  "/:id",
  protect,
  authorizeRoles("admin"),
  updateLead
);

router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  deleteLead
);

export default router;