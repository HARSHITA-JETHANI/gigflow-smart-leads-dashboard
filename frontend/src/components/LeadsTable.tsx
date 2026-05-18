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

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-700">Name</th>
              <th className="text-left p-4 font-semibold text-gray-700">Email</th>
              <th className="text-left p-4 font-semibold text-gray-700">Status</th>
              <th className="text-left p-4 font-semibold text-gray-700">Source</th>
              <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
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
                  <td className="p-4">{lead.name}</td>
                  <td className="p-4">{lead.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        lead.status === "Qualified"
                          ? "bg-green-100 text-green-800"
                          : lead.status === "Lost"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{lead.source}</td>
                  <td className="p-4 flex gap-2 flex-wrap">
                    <button
                      onClick={() => setViewLead(lead)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition-colors text-sm"
                    >
                      View
                    </button>
                    {userRole === "admin" && (
                      <>
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(lead._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors text-sm"
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