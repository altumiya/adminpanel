export default function AddProduct() {
    return (
        <div className="max-w-4xl rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Add Product</h2>
            </div>

            <form className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Product Name</label>
                    <input
                        type="text"
                        placeholder="e.g. Classic Cotton Shirt"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Product SKU</label>
                    <input
                        type="text"
                        placeholder="e.g. PRD-001"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Category</label>
                    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        <option>Select category</option>
                        <option>Men Fashion</option>
                        <option>Women Fashion</option>
                        <option>Kids Wear</option>
                    </select>
                </div>

                 <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">SubCategory</label>
                    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        <option>Select category</option>
                        <option>Men Fashion</option>
                        <option>Women Fashion</option>
                        <option>Kids Wear</option>
                    </select>
                </div>

                 <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">SubSubCategory</label>
                    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        <option>Select category</option>
                        <option>Men Fashion</option>
                        <option>Women Fashion</option>
                        <option>Kids Wear</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Material</label>
                    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        <option>Select material</option>
                        <option>Cotton Fabric</option>
                        <option>Denim Roll</option>
                        <option>Poly Bag</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Color</label>
                    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        <option>Select color</option>
                        <option>Primary Blue</option>
                        <option>Success Green</option>
                        <option>Danger Red</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Stock</label>
                    <input
                        type="number"
                        placeholder="50"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Price</label>
                    <input
                        type="number"
                        placeholder="999"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Sale Price</label>
                    <input
                        type="number"
                        placeholder="799"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-900">Product Image</label>
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
                        placeholder="Enter product description"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div className="md:col-span-2">
                    <button
                        type="button"
                        className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                    >
                        Save Product
                    </button>
                </div>
            </form>
        </div>
    );
}
