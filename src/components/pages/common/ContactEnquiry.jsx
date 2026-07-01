import { FaFilter, FaPowerOff, FaTrash } from 'react-icons/fa';

export default function ContactEnquiry() {
    const enquiries = [
        { id: 1, name: 'Amit Sharma', email: 'amit@example.com', phone: '+91 98765 43210', subject: 'Course Details', status: 'Active' },
        { id: 2, name: 'Priya Verma', email: 'priya@example.com', phone: '+91 87654 32109', subject: 'Fee Enquiry', status: 'Active' },
        { id: 3, name: 'Rahul Mehta', email: 'rahul@example.com', phone: '+91 76543 21098', subject: 'Batch Timing', status: 'Inactive' },
        { id: 4, name: 'Neha Singh', email: 'neha@example.com', phone: '+91 65432 10987', subject: 'Placement Support', status: 'Active' },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Enquiry</h2>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    <FaFilter />
                    Filter
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-50 uppercase text-gray-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">ID</th>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Email</th>
                            <th scope="col" className="px-6 py-4">Phone</th>
                            <th scope="col" className="px-6 py-4">Subject</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enquiries.map((enquiry) => (
                            <tr key={enquiry.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">{enquiry.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{enquiry.name}</td>
                                <td className="px-6 py-4 text-gray-600">{enquiry.email}</td>
                                <td className="px-6 py-4 text-gray-600">{enquiry.phone}</td>
                                <td className="px-6 py-4 text-gray-700">{enquiry.subject}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs font-semibold ${
                                        enquiry.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                                    }`}>
                                        {enquiry.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-2 rounded-md bg-amber-100 px-3 py-2 text-xs font-semibold text-amber-800 hover:bg-amber-200"
                                        >
                                            <FaPowerOff />
                                            Change Status
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-2 rounded-md bg-red-100 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-200"
                                        >
                                            <FaTrash />
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
