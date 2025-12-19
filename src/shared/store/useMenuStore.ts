import { create } from "zustand";

interface MenuStore {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}
export const useMenuStore = create<MenuStore>((set) => ({
    isMenuOpen: false,
    setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),
}));


interface ActiveViewStore {
    activeView: "tables" | "kitchen";
    setActiveView: (activeView: "tables" | "kitchen") => void;
}
export const useActiveViewStore = create<ActiveViewStore>((set) => ({
    activeView: "tables",
    setActiveView: (activeView: "tables" | "kitchen") => set({ activeView }),
}));