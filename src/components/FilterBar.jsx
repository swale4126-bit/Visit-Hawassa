const FilterBar = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category
              ? 'bg-green-600 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
