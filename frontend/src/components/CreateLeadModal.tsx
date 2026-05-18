import { useState } from "react";
import api from "../api/api";

type Props = {
  closeModal: () => void;
  refreshLeads: () => void;
};

function CreateLeadModal({
  closeModal,
  refreshLeads,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("New");
  const [source, setSource] = useState("");
  
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!source.trim()) {
      setError("Source is required.");
      return;
    }

    try {
      await api.post("/leads", {
        name,
        email,
        status,
        source,
      });

      refreshLeads();
      closeModal();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create lead.");
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-xl relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Create Lead
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Lead Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Lead Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="New">New</option>
              <option value="Qualified">Qualified</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          <div>
            <select
              value={source}
              onChange={(e) =>
                setSource(e.target.value)
              }
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Source</option>
              <option value="Website">Website</option>
              <option value="Instagram">Instagram</option>
              <option value="Referral">Referral</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white w-full py-3 rounded mt-2 font-medium"
          >
            Create Lead
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateLeadModal;