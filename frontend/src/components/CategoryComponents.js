// CategoryComponent.js

import React from "react";
import PropTypes from "prop-types";

function CategoryComponent({ category }) {
  // Use the category prop to display category information
  return (
    <div>
      <h2>{category.name}</h2>
      <p>{category.description}</p>
      {/* Add more category details as needed */}
    </div>
  );
}

CategoryComponent.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // Add more prop types for other category properties
  }).isRequired,
};

export default CategoryComponent;
