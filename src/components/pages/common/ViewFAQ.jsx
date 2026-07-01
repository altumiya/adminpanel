import { FaFilter, FaTrash, FaEdit, FaPowerOff } from 'react-icons/fa';

export default function ViewFAQ() {
    const faqs = [
        { id: 1, question: 'What is your return policy?', answer: 'We offer 30 days money-back guarantee on all products.', category: 'Returns', status: 'Active' },
        { id: 2, question: 'How long does shipping take?', answer: 'Standard shipping takes 5-7 business days. Express shipping available.', category: 'Shipping', status: 'Active' },
        { id: 3, question: 'Do you ship internationally?', answer: 'Yes, we ship to over 100 countries worldwide.', category: 'Shipping', status: 'Active' },
        { id: 4, question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and digital wallets.', category: 'Payment', status: 'Active' },
        { id: 5, question: 'How do I track my order?', answer: 'You will receive a tracking number via email once your order ships.', category: 'Shipping', status: 'Inactive' },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">View FAQs</h2>
                    <p className="mt-1 text-sm text-gray-500">Manage frequently asked questions.</p>
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
                            <th scope="col" className="px-6 py-4">Question</th>
                            <th scope="col" className="px-6 py-4">Answer</th>
                            <th scope="col" className="px-6 py-4">Category</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faqs.map((faq) => (
                            <tr key={faq.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">{faq.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 max-w-xs truncate">{faq.question}</td>
                                <td className="px-6 py-4 max-w-sm truncate text-gray-700">{faq.answer}</td>
                                <td className="px-6 py-4">
                                    <span className="rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                                        {faq.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs font-semibold ${faq.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                                        }`}>
                                        {faq.status}
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
