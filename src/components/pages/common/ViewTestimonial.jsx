import { FaFilter, FaTrash, FaEdit, FaPowerOff } from 'react-icons/fa';

export default function ViewTestimonial() {
    const testimonials = [
        { id: 1, name: 'John Doe', title: 'CEO, Tech Company', message: 'Excellent service and great quality. Highly recommended!', rating: 5, status: 'Active' },
        { id: 2, name: 'Sarah Smith', title: 'Marketing Manager', message: 'Very satisfied with the products. Great customer support!', rating: 5, status: 'Active' },
        { id: 3, name: 'Michael Johnson', title: 'Business Owner', message: 'Good products but could improve delivery time.', rating: 4, status: 'Active' },
        { id: 4, name: 'Emma Wilson', title: 'Consultant', message: 'Outstanding experience from start to finish.', rating: 5, status: 'Inactive' },
    ];

    const renderStars = (rating) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-2">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">View Testimonials</h2>
                    <p className="mt-1 text-sm text-gray-500">Manage customer testimonials.</p>
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
                            <th scope="col" className="px-6 py-4">Title</th>
                            <th scope="col" className="px-6 py-4">Message</th>
                            <th scope="col" className="px-6 py-4">Rating</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials.map((testimonial) => (
                            <tr key={testimonial.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">{testimonial.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{testimonial.name}</td>
                                <td className="px-6 py-4 text-gray-700">{testimonial.title}</td>
                                <td className="px-6 py-4 max-w-xs truncate text-gray-700">{testimonial.message}</td>
                                <td className="px-6 py-4">
                                    {renderStars(testimonial.rating)}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs font-semibold ${testimonial.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                                        }`}>
                                        {testimonial.status}
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
