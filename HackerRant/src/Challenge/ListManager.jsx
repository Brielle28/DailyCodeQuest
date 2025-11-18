import { useState } from "react";

const ListManager = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (input.trim() === "") return; // Do not add empty items
    setItems([...items, input]);
    setInput(""); // Clear input field
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full min-h-screen bg-black text-white">
      {/* Form Section */}
      <div className="w-full lg:w-3/5 p-8 flex flex-col items-start justify-start">
        <h2 className="text-3xl font-bold text-[#63ad58] mb-6">Item List Manager</h2>

        <div className="w-full flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter item"
            data-testid="input-field"
            className="flex-1 p-3 rounded-md border-2 border-[#63ad58] bg-black text-white placeholder-[#63ad58] focus:outline-none focus:ring-2 focus:ring-[#63ad58] transition"
          />
          <button
            onClick={handleAddItem}
            data-testid="add-button"
            className="bg-[#63ad58] text-white px-5 py-3 rounded-md hover:bg-green-700 transition-colors font-semibold"
          >
            Add Item
          </button>
        </div>

        <ul data-testid="item-list" className="w-full space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              data-testid="list-item"
              className="p-3 bg-gray-900 rounded-md border border-[#63ad58] hover:bg-[#63ad58] hover:text-black transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Question Section */}
      <div className="w-full lg:w-2/5 p-8 border-t-2 lg:border-t-0 lg:border-l-2 border-[#63ad58]">
        <h1 className="text-3xl font-bold text-[#63ad58] mb-6">Question</h1>
        <div className="max-w-xl space-y-4">
          <p className="leading-relaxed text-white">
            You are tasked with creating a simple REACT application called "Item List Manager" that displays a list of items and allows users to add new items to the list. The items will be displayed in an unordered list (<code>&lt;ul&gt;</code>), and there will be an input field along with a button to add new items to this list.
          </p>

          <h2 className="text-xl font-semibold text-white">Detailed Requirements</h2>
          <div className="space-y-2 text-white">
            <p>1. When the application loads, it should display an empty list.</p>
            <p>2. The input field should accept user text input.</p>
            <p>3. When the button is clicked, the text in the input field should be added to the list.</p>
            <p>4. The input field should be cleared.</p>
            <p>5. If the input field is empty and the button is clicked, nothing should be added to the list.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListManager;
