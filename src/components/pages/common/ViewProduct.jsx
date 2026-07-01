import { FaFilter, FaPowerOff, FaTrash } from 'react-icons/fa';

export default function ViewProduct() {
    const products = [
        { id: 1, name: 'Classic Cotton Shirt', sku: 'PRD-001', image: 'https://picsum.photos/seed/product-shirt/80/60', category: 'Men Fashion', price: '999', stock: 50, status: 'Active' },
        { id: 2, name: 'Denim Jacket', sku: 'PRD-002', image: 'https://picsum.photos/seed/product-jacket/80/60', category: 'Women Fashion', price: '2499', stock: 18, status: 'Active' },
        { id: 3, name: 'Kids Hoodie', sku: 'PRD-003', image: 'https://picsum.photos/seed/product-hoodie/80/60', category: 'Kids Wear', price: '899', stock: 0, status: 'Inactive' },
        { id: 4, name: 'Canvas Tote Bag', sku: 'PRD-004', image: 'https://picsum.photos/seed/product-bag/80/60', category: 'Accessories', price: '499', stock: 120, status: 'Active' },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">View Product</h2>
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
                            <th scope="col" className="px-6 py-4">SKU</th>
                            <th scope="col" className="px-6 py-4">Category</th>
                            <th scope="col" className="px-6 py-4">Price</th>
                            <th scope="col" className="px-6 py-4">Stock</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">{product.id}</td>
                                <td className="px-6 py-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-12 w-16 rounded object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                                <td className="px-6 py-4 font-mono text-gray-700">{product.sku}</td>
                                <td className="px-6 py-4 text-gray-600">{product.category}</td>
                                <td className="px-6 py-4 text-gray-700">{product.price}</td>
                                <td className="px-6 py-4 text-gray-700">{product.stock}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs font-semibold ${
                                        product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                                    }`}>
                                        {product.status}
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
