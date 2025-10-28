"use client";

import Menu from "@/shared/ui/menu";
import { useMenuStore } from "@/shared/store";

export default function Home() {
  const { isMenuOpen } = useMenuStore();
  return (
    <main className="flex-1 relative px-6 items-center justify-items-center">
      <h1 className="text-label-100 text-display-1">Inventory For 사장님</h1>
      {isMenuOpen && <Menu />}
    </main>
  );
}
