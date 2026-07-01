export default function AddSubSubCategory() {
    return (
        <div className="max-w-3xl rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Add Sub-Subcategory</h2>
            </div>

            <form className="grid gap-6 md:grid-cols-2">
                {/* Parent Category Dropdown */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Parent Category</label>
                    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Select Parent Category</option>
                        <option value="men-fashion">Men Fashion</option>
                        <option value="women-fashion">Women Fashion</option>
                        <option value="kids-wear">Kids Wear</option>
                    </select>
                </div>

                {/* Sub Category Dropdown */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Sub Category</label>
                    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Select Sub Category</option>
                        <option value="t-shirts">T-Shirts</option>
                        <option value="jeans">Jeans</option>
                        <option value="dresses">Dresses</option>
                    </select>
                </div>

                {/* Sub-Subcategory Name */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Sub-Subcategory Name</label>
                    <input
                        type="text"
                        placeholder="e.g. Graphic T-Shirts"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Display Order</label>
                    <input
                        type="number"
                        placeholder="1"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Status</label>
                    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-900">Sub-Subcategory Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 file:mr-4 file:border-0 file:bg-blue-700 file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-white hover:file:bg-blue-800"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-900">Description</label>
                    <textarea
                        rows="4"
                        placeholder="Enter sub-subcategory description"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div className="md:col-span-2">
                    <button
                        type="button"
                        className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                    >
                        Save Sub-Subcategory
                    </button>
                </div>
            </form>
        </div>
    );
}