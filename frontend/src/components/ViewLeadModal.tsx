import type { Lead } from "../pages/DashboardPage";

type Props = {
  lead: Lead;
  closeModal: () => void;
};

function ViewLeadModal({ lead, closeModal }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-xl relative">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Lead Details
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Name</span>
            <span className="text-lg font-medium text-gray-900">{lead.name}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Email</span>
            <span className="text-lg text-gray-900">{lead.email}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Status</span>
            <div>
              <span
                className={`inline-block px-3 py-1 mt-1 rounded-full text-sm font-medium
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
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Source</span>
            <span className="text-lg text-gray-900">{lead.source}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Created At</span>
            <span className="text-lg text-gray-900">
              {new Date(lead.createdAt).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t flex justify-end">
          <button
            onClick={closeModal}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewLeadModal;
