import { FaPlus } from 'react-icons/fa';

export default function AddFAQ() {
    return (
        <div className="max-w-2xl rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Add FAQ</h2>
                <p className="mt-1 text-sm text-gray-500">Create a new frequently asked question.</p>
            </div>

            <form className="space-y-6">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Question</label>
                    <input
                        type="text"
                        placeholder="e.g. What is your return policy?"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Answer</label>
                    <textarea
                        placeholder="Enter the answer to the FAQ..."
                        rows="6"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="General">General</option>
                        <option value="Products">Products</option>
                        <option value="Shipping">Shipping</option>
                        <option value="Payment">Payment</option>
                        <option value="Returns">Returns</option>
                        <option value="Account">Account</option>
                    </select>
                </div>

                <div className="flex gap-4">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                    >
                        <FaPlus />
                        Save FAQ
                    </button>
                </div>
            </form>
        </div>
    );
}
