import DashboardLayout from "../layouts/DashboardLayout";
import StatsCard from "../components/StatsCard";
import LeadsTable from "../components/LeadsTable";
import CreateLeadModal from "../components/CreateLeadModal";

import { useEffect, useState } from "react";
import api from "../api/api";

export interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
  source: string;
  createdAt: string;
}

function DashboardPage() {
  const userRole = localStorage.getItem("userRole") || "";

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [stats, setStats] = useState({ totalLeads: 0, qualifiedLeads: 0, lostLeads: 0 });

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");
  const [sort, setSort] = useState("latest");
  
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Debounce search input: waits 500ms after the user stops typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // Reset page on new search
    }, 500);

    // Cleanup function to cancel the timeout if search changes before 500ms
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    fetchLeads();
  }, [debouncedSearch, status, source, sort, page]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await api.get(
        `/leads?search=${debouncedSearch}&status=${status}&source=${source}&sort=${sort}&page=${page}&limit=5`
      );
      setLeads(response.data.leads);
      
      const statsResponse = await api.get('/leads/stats');
      setStats(statsResponse.data);
    } catch (err: any) {
      setError("Failed to fetch leads. Please try again.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = async () => {
    try {
      setIsExporting(true);
      // Fetch all matched leads (no pagination limit) for export
      const response = await api.get(
        `/leads?search=${debouncedSearch}&status=${status}&source=${source}&sort=${sort}&limit=all`
      );
      
      const exportLeads: Lead[] = response.data.leads;
      
      // Generate CSV string
      const headers = ["Name", "Email", "Status", "Source", "Created At"];
      const csvRows = [
        headers.join(","),
        ...exportLeads.map((lead) => {
          return [
            `"${lead.name}"`,
            `"${lead.email}"`,
            `"${lead.status}"`,
            `"${lead.source}"`,
            `"${new Date(lead.createdAt).toLocaleDateString()}"`
          ].join(",");
        })
      ];
      
      const csvString = csvRows.join("\n");
      const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
      
      // Trigger download
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `leads_export_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert("Failed to export CSV. Please try again.");
      console.error("Export Error:", err);
    } finally {
      setIsExporting(false);
    }
  };

  // Stats are now fetched from backend
  
  if (loading && leads.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white px-8 py-6 rounded-xl shadow">
          <p className="text-xl font-semibold">
            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {showModal && (
        <CreateLeadModal
          closeModal={() => setShowModal(false)}
          refreshLeads={fetchLeads}
        />
      )}

      <DashboardLayout>
        <div>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              Leads Dashboard
            </h1>

            <div className="flex gap-3">
              {userRole === "admin" && (
                <>
                  <button
                    onClick={handleExportCSV}
                    disabled={isExporting}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-3 rounded-lg disabled:opacity-50"
                  >
                    {isExporting ? "Exporting..." : "Export CSV"}
                  </button>
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
                  >
                    + Add Lead
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Total Leads"
              value={String(stats.totalLeads)}
            />
            <StatsCard
              title="Qualified Leads"
              value={String(stats.qualifiedLeads)}
            />
            <StatsCard
              title="Lost Leads"
              value={String(stats.lostLeads)}
            />
          </div>

          {/* Search + Filter */}
          <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-3 rounded flex-1 min-w-[200px]"
            />

            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                setPage(1);
              }}
              className="border p-3 rounded"
            >
              <option value="">All Status</option>
              <option value="New">New</option>
              <option value="Qualified">Qualified</option>
              <option value="Lost">Lost</option>
            </select>

            <select
              value={source}
              onChange={(e) => {
                setSource(e.target.value);
                setPage(1);
              }}
              className="border p-3 rounded"
            >
              <option value="">All Sources</option>
              <option value="Website">Website</option>
              <option value="Instagram">Instagram</option>
              <option value="Referral">Referral</option>
            </select>

            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
              }}
              className="border p-3 rounded"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          {/* Leads Table */}
          <LeadsTable
            leads={leads}
            refreshLeads={fetchLeads}
            userRole={userRole}
          />

          {/* Pagination */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
              disabled={page === 1}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              {page}
            </button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default DashboardPage;