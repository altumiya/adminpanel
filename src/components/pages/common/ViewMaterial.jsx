import { FaFilter, FaPowerOff, FaTrash } from 'react-icons/fa';

export default function ViewMaterial() {
    const materials = [
        { id: 1, name: 'Cotton Fabric', code: 'MAT-001', category: 'Raw Material', quantity: '120 Meter', price: '250', status: 'Active' },
        { id: 2, name: 'Packing Box', code: 'MAT-002', category: 'Packaging', quantity: '500 Piece', price: '18', status: 'Active' },
        { id: 3, name: 'Poly Bag', code: 'MAT-003', category: 'Packaging', quantity: '900 Piece', price: '4', status: 'Inactive' },
        { id: 4, name: 'Denim Roll', code: 'MAT-004', category: 'Raw Material', quantity: '80 Meter', price: '420', status: 'Active' },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">View Material</h2>
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
                            <th scope="col" className="px-6 py-4">Code</th>
                            <th scope="col" className="px-6 py-4">Category</th>
                            <th scope="col" className="px-6 py-4">Quantity</th>
                            <th scope="col" className="px-6 py-4">Price</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {materials.map((material) => (
                            <tr key={material.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">{material.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{material.name}</td>
                                <td className="px-6 py-4 font-mono text-gray-700">{material.code}</td>
                                <td className="px-6 py-4 text-gray-600">{material.category}</td>
                                <td className="px-6 py-4 text-gray-700">{material.quantity}</td>
                                <td className="px-6 py-4 text-gray-700">{material.price}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs font-semibold ${
                                        material.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                                    }`}>
                                        {material.status}
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
