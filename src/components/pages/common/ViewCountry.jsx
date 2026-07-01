import { FaFilter, FaPowerOff, FaTrash } from 'react-icons/fa';

export default function ViewCountry() {
    const countries = [
        { id: 1, name: 'India', code: 'IN', dialCode: '+91', status: 'Active' },
        { id: 2, name: 'United States', code: 'US', dialCode: '+1', status: 'Active' },
        { id: 3, name: 'United Kingdom', code: 'GB', dialCode: '+44', status: 'Inactive' },
        { id: 4, name: 'Australia', code: 'AU', dialCode: '+61', status: 'Active' },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">View Country</h2>
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
                            <th scope="col" className="px-6 py-4">Country Name</th>
                            <th scope="col" className="px-6 py-4">Code</th>
                            <th scope="col" className="px-6 py-4">Dial Code</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country) => (
                            <tr key={country.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">{country.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{country.name}</td>
                                <td className="px-6 py-4 font-mono text-gray-700">{country.code}</td>
                                <td className="px-6 py-4 text-gray-700">{country.dialCode}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs font-semibold ${
                                        country.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                                    }`}>
                                        {country.status}
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
