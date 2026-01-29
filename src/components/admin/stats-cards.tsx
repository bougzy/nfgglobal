"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface StatsCardsProps {
  stats: {
    totalProducts: number;
    activeProducts: number;
    totalCategories: number;
    totalInventoryValue: number;
  };
  currencySymbol: string;
}

export function StatsCards({ stats, currencySymbol }: StatsCardsProps) {
  const cards = [
    {
      label: "Total Products",
      value: stats.totalProducts.toString(),
      color: "from-blue-400 to-blue-600",
    },
    {
      label: "Active Products",
      value: stats.activeProducts.toString(),
      color: "from-emerald-400 to-emerald-600",
    },
    {
      label: "Categories",
      value: stats.totalCategories.toString(),
      color: "from-purple-400 to-purple-600",
    },
    {
      label: "Inventory Value",
      value: `${currencySymbol}${stats.totalInventoryValue.toLocaleString("en-US")}`,
      color: "from-amber-400 to-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6">
            <p className="text-sm text-white/50">{card.label}</p>
            <p
              className={`text-2xl font-bold mt-1 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
            >
              {card.value}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
