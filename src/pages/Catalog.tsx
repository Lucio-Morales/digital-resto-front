// src/pages/Catalog.tsx
import { useState } from "react";
import { useCatalogStore } from "../store/useCatalogStore";

export default function Catalog() {
    const { products, addProduct, removeProduct } = useCatalogStore();
    const [name, setName] = useState("");

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Mi Catálogo</h1>

            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <button
                    onClick={() => {
                        if (!name) return;
                        addProduct({
                            id: Date.now().toString(),
                            name,
                            description: "Producto demo",
                            price: Math.floor(Math.random() * 1000),
                        });
                        setName("");
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Agregar
                </button>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="border rounded-lg p-4 shadow bg-white flex flex-col"
                    >
                        <h2 className="font-semibold text-lg">{p.name}</h2>
                        <p className="text-sm text-gray-600">{p.description}</p>
                        <span className="text-blue-600 font-bold mt-2">
                            ${p.price}
                        </span>
                        <button
                            onClick={() => removeProduct(p.id)}
                            className="mt-auto bg-red-500 text-white px-3 py-1 rounded text-sm"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
