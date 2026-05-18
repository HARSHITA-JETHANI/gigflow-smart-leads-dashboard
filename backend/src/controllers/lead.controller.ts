import { Request, Response } from "express";
import Lead from "../models/Lead.model";

export const createLead = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, status, source } = req.body;

    const lead = await Lead.create({
      name,
      email,
      status,
      source,
    });

    res.status(201).json({
      message: "Lead created successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getLeads = async (
  req: Request,
  res: Response
) => {
  try {
    const search = req.query.search as string;
    const status = req.query.status as string;
    const source = req.query.source as string;
    const sort = req.query.sort as string;

    const page = Number(req.query.page) || 1;
    // Allow limit to be "all" for CSV export, otherwise default to 5
    const isExport = req.query.limit === "all";
    
    // RBAC: Only admins can export all leads
    if (isExport && (req as any).user.role !== "admin") {
      res.status(403).json({ message: "Access denied. Only admins can export." });
      return;
    }

    const limit = isExport ? 0 : (Number(req.query.limit) || 5);

    const skip = (page - 1) * limit;

    let query: any = {};

    // Search
    if (search) {
      query.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    // Filter by Status
    if (status) {
      query.status = status;
    }

    // Filter by Source
    if (source) {
      query.source = source;
    }

    // Sort: Latest (-1) or Oldest (1)
    const sortOrder = sort === "oldest" ? 1 : -1;

    let leadsQuery = Lead.find(query).sort({ createdAt: sortOrder });

    // Apply pagination only if not exporting
    if (!isExport) {
      leadsQuery = leadsQuery.skip(skip).limit(limit);
    }

    const leads = await leadsQuery;

    const total = await Lead.countDocuments(query);

    res.status(200).json({
      total,
      currentPage: isExport ? 1 : page,
      totalPages: isExport ? 1 : Math.ceil(total / (limit || 1)),
      leads,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getLeadById = async (
  req: Request,
  res: Response
) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const updateLead = async (
  req: Request,
  res: Response
) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    res.status(200).json({
      message: "Lead updated successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteLead = async (
  req: Request,
  res: Response
) => {
  try {
    const lead = await Lead.findByIdAndDelete(
      req.params.id
    );

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    res.status(200).json({
      message: "Lead deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getStats = async (req: Request, res: Response) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const qualifiedLeads = await Lead.countDocuments({ status: "Qualified" });
    const lostLeads = await Lead.countDocuments({ status: "Lost" });

    res.status(200).json({
      totalLeads,
      qualifiedLeads,
      lostLeads,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};