import { create } from 'zustand';
import type { Product } from '../types/product';


interface CatalogState {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (id: string) => void;
}

export const useCatalogStore = create<CatalogState>((set) => ({
    products: [],
    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
    removeProduct: (id) =>
        set((state) => ({
            products: state.products.filter((p) => p.id !== id),
        })),
}))