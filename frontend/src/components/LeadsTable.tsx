import api from "../api/api";
import { useState } from "react";
import EditLeadModal from "./EditLeadModal";
import ViewLeadModal from "./ViewLeadModal";
import type { Lead } from "../pages/DashboardPage";

type Props = {
  leads: Lead[];
  refreshLeads: () => void;
  userRole?: string;
};

function LeadsTable({
  leads,
  refreshLeads,
  userRole,
}: Props) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [viewLead, setViewLead] = useState<Lead | null>(null);

  const handleDelete = async (
    id: string
  ) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) {
      return;
    }
    try {
      await api.delete(
        `/leads/${id}`
      );
      refreshLeads();
    } catch (error) {
      alert("Failed to delete lead. Please try again.");
      console.log(error);
    }
  };

  return (
    <>
      {selectedLead && (
        <EditLeadModal
          lead={selectedLead}
          closeModal={() => setSelectedLead(null)}
          refreshLeads={refreshLeads}
        />
      )}

      {viewLead && (
        <ViewLeadModal
          lead={viewLead}
          closeModal={() => setViewLead(null)}
        />
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-left p-5 font-semibold text-slate-700 text-sm tracking-wide">Name</th>
              <th className="text-left p-5 font-semibold text-slate-700 text-sm tracking-wide">Email</th>
              <th className="text-left p-5 font-semibold text-slate-700 text-sm tracking-wide">Status</th>
              <th className="text-left p-5 font-semibold text-slate-700 text-sm tracking-wide">Source</th>
              <th className="text-left p-5 font-semibold text-slate-700 text-sm tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center p-8 text-gray-500"
                >
                  No leads found
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr
                  key={lead._id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="p-5">{lead.name}</td>
                  <td className="p-5 text-slate-600">{lead.email}</td>
                  <td className="p-5">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        lead.status === "Qualified"
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : lead.status === "Lost"
                          ? "bg-red-100 text-red-800 border border-red-200"
                          : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-5 text-slate-600">{lead.source}</td>
                  <td className="p-5 flex gap-2 flex-wrap">
                    <button
                      onClick={() => setViewLead(lead)}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg transition-colors text-sm font-medium shadow-sm"
                    >
                      View
                    </button>
                    {userRole === "admin" && (
                      <>
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors text-sm font-medium shadow-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(lead._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg transition-colors text-sm font-medium shadow-sm"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LeadsTable;