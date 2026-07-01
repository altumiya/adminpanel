import { FaFilter, FaPowerOff, FaTrash } from 'react-icons/fa';

export default function ViewSubCategory() {
    const subcategories = [
        { id: 1, name: 'T-Shirts', parentCategory: 'Men Fashion',  image: 'https://picsum.photos/seed/t-shirts/80/60', order: 1, status: 'Active' },
        { id: 2, name: 'Dresses', parentCategory: 'Women Fashion',  image: 'https://picsum.photos/seed/dresses/80/60', order: 2, status: 'Active' },
        { id: 3, name: 'Toys', parentCategory: 'Kids Wear', image: 'https://picsum.photos/seed/toys/80/60', order: 3, status: 'Inactive' },
        { id: 4, name: 'Watches', parentCategory: 'Accessories',  image: 'https://picsum.photos/seed/watches/80/60', order: 4, status: 'Active' },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">View Subcategory</h2>
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
                            <th scope="col" className="px-6 py-4">Image</th>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Parent Category</th>
                            <th scope="col" className="px-6 py-4">Order</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subcategories.map((subcategory) => (
                            <tr key={subcategory.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">{subcategory.id}</td>
                                <td className="px-6 py-4">
                                    <img
                                        src={subcategory.image}
                                        alt={subcategory.name}
                                        className="h-12 w-16 rounded object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{subcategory.name}</td>
                                <td className="px-6 py-4 text-gray-700">{subcategory.parentCategory}</td>
                                <td className="px-6 py-4 text-gray-700">{subcategory.order}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs font-semibold ${
                                        subcategory.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                                    }`}>
                                        {subcategory.status}
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