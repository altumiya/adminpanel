import { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';

export default function Order() {
    const [selectedOrder, setSelectedOrder] = useState(null);

    const orders = [
        {
            id: 'ORD-1001',
            serialNumber: 1,
            buyerName: 'Amit Sharma',
            price: '3498',
            status: 'Delivered',
            products: [
                { name: 'Classic Cotton Shirt', sku: 'PRD-001', image: 'https://picsum.photos/seed/product-shirt/80/60', quantity: 2, price: '999' },
                { name: 'Canvas Tote Bag', sku: 'PRD-004', image: 'https://picsum.photos/seed/product-bag/80/60', quantity: 1, price: '1499' },
            ],
        },
        {
            id: 'ORD-1002',
            serialNumber: 2,
            buyerName: 'Priya Verma',
            price: '2499',
            status: 'Pending',
            products: [
                { name: 'Denim Jacket', sku: 'PRD-002', image: 'https://picsum.photos/seed/product-jacket/80/60', quantity: 1, price: '2499' },
            ],
        },
        {
            id: 'ORD-1003',
            serialNumber: 3,
            buyerName: 'Rahul Mehta',
            price: '1798',
            status: 'Processing',
            products: [
                { name: 'Kids Hoodie', sku: 'PRD-003', image: 'https://picsum.photos/seed/product-hoodie/80/60', quantity: 2, price: '899' },
            ],
        },
        {
            id: 'ORD-1004',
            serialNumber: 4,
            buyerName: 'Neha Singh',
            price: '3998',
            status: 'Cancelled',
            products: [
                { name: 'Denim Jacket', sku: 'PRD-002', image: 'https://picsum.photos/seed/product-jacket/80/60', quantity: 1, price: '2499' },
                { name: 'Canvas Tote Bag', sku: 'PRD-004', image: 'https://picsum.photos/seed/product-bag/80/60', quantity: 1, price: '1499' },
            ],
        },
    ];

    const statusClass = {
        Delivered: 'bg-green-100 text-green-800',
        Pending: 'bg-yellow-100 text-yellow-800',
        Processing: 'bg-blue-100 text-blue-800',
        Cancelled: 'bg-red-100 text-red-800',
    };

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Order</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-50 uppercase text-gray-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">Serial No</th>
                            <th scope="col" className="px-6 py-4">Order ID</th>
                            <th scope="col" className="px-6 py-4">Buyer Name</th>
                            <th scope="col" className="px-6 py-4">Price</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">{order.serialNumber}</td>
                                <td className="px-6 py-4 font-mono text-gray-700">{order.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{order.buyerName}</td>
                                <td className="px-6 py-4 text-gray-700">{order.price}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs font-semibold ${statusClass[order.status]}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedOrder(order)}
                                        className="inline-flex items-center gap-2 rounded-md bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-200"
                                    >
                                        <FaEye />
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
                        <div className="flex items-start justify-between border-b border-gray-200 px-6 py-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Order Products</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    {selectedOrder.id} by {selectedOrder.buyerName}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedOrder(null)}
                                className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="p-6">
                            <table className="min-w-full text-left text-sm">
                                <thead className="bg-gray-50 uppercase text-gray-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Image</th>
                                        <th scope="col" className="px-4 py-3">Product</th>
                                        <th scope="col" className="px-4 py-3">SKU</th>
                                        <th scope="col" className="px-4 py-3">Qty</th>
                                        <th scope="col" className="px-4 py-3">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedOrder.products.map((product) => (
                                        <tr key={`${selectedOrder.id}-${product.sku}`} className="border-b border-gray-100">
                                            <td className="px-4 py-3">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-12 w-16 rounded object-cover"
                                                />
                                            </td>
                                            <td className="px-4 py-3 font-medium text-gray-900">{product.name}</td>
                                            <td className="px-4 py-3 font-mono text-gray-700">{product.sku}</td>
                                            <td className="px-4 py-3 text-gray-700">{product.quantity}</td>
                                            <td className="px-4 py-3 text-gray-700">{product.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="mt-6 flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setSelectedOrder(null)}
                                    className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
