import { FaFilter, FaPowerOff, FaTrash } from 'react-icons/fa';

export default function ViewColor() {
    const colors = [
        { id: 1, name: 'Primary Blue', hex: '#2563eb', status: 'Active' },
        { id: 2, name: 'Success Green', hex: '#15803d', status: 'Active' },
        { id: 3, name: 'Warning Amber', hex: '#d97706', status: 'Inactive' },
        { id: 4, name: 'Danger Red', hex: '#dc2626', status: 'Active' },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">View Color</h2>
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
                            <th scope="col" className="px-6 py-4">Preview</th>
                            <th scope="col" className="px-6 py-4">Hex Code</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colors.map((color) => (
                            <tr key={color.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">{color.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{color.name}</td>
                                <td className="px-6 py-4">
                                    <div className="h-9 w-14 rounded border shadow-sm" style={{ backgroundColor: color.hex }} />
                                </td>
                                <td className="px-6 py-4 font-mono text-gray-700">{color.hex}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs font-semibold ${
                                        color.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                                    }`}>
                                        {color.status}
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
