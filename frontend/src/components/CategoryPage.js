// CategoryPage.js

import React from "react";
import CategoryComponent from "./CategoryComponent";
import categoryData from "../path-to-categoryData/categoryData"; // Adjust the import path

function CategoryPage() {
  return (
    <div className="category-page">
      {categoryData.map((category) => (
        <CategoryComponent key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryPage;
