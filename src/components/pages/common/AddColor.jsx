import { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function AddColor() {
    const [color, setColor] = useState('#2563eb');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleColorChange = (newColor) => {
        setColor(newColor.hex);
    };

    return (
        <div className="max-w-2xl rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Add Color</h2>
            </div>

            <form className="space-y-6">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Color Name</label>
                    <input
                        type="text"
                        placeholder="e.g. Primary Blue"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Pick a Color</label>
                    <div className="flex items-center gap-4">
                        <div 
                            className="h-10 w-16 cursor-pointer rounded border border-gray-300 shadow-sm"
                            style={{ backgroundColor: color }}
                            onClick={() => setShowColorPicker(!showColorPicker)}
                        />
                        <span className="font-mono text-gray-700">{color}</span>
                    </div>
                    {showColorPicker && (
                        <div className="absolute z-10 mt-2">
                            <div className="fixed inset-0" onClick={() => setShowColorPicker(false)} />
                            <SketchPicker color={color} onChangeComplete={handleColorChange} />
                        </div>
                    )}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Order</label>
                    <input
                        type="text"
                        placeholder="e.g. Primary Blue"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                    >
                        Save Color
                    </button>
                </div>
            </form>
        </div>
    );
}
