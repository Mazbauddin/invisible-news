import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Value } from "@radix-ui/react-select";

interface CategoryChangeProps {
  onCategoryChange: (category: string) => void;
}
const CategoryFilter = ({ onCategoryChange }: CategoryChangeProps) => {
  const categories = ["All", "Tech", "Health", "Sports", "Business"];
  return (
    <div className="flex gap-2 items-center justify-center mx-4">
      <h3 className="font-bold text-lg flex-shrink-0 mr-3">
        Filter By Category:
      </h3>
      <Select
        onValueChange={(value) =>
          onCategoryChange(value === "All" ? "" : value)
        }
      >
        <SelectTrigger className="w-[180px] capitalize rounded-md">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem className="capitalize" key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
