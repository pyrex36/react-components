import React from "react";

const PersonalTask = () => {
  return (
    <>
      <div className="font-['SF_Pro_Text_Bold'] p-4">
        <h1 className="font-['SF_Pro_Compact_Bold'] text-2xl font-bold mb-4">Personal</h1>
        <p className="mb-6">A board to keep track of personal tasks.</p>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="bg-gray-200 text-lg font-semibold mb-2">
                Not started
              </h2>
              <div className="bg-white p-4 rounded shadow">
                <p>Take Coco to a vet</p>
                <span className="bg-red-200 text-black-500 px-2 py-1 rounded">
                  Due 4/11
                </span>{" "}
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="bg-purple-100 text-lg font-semibold mb-2">
                In progress
              </h2>
              <div className="bg-white p-4 rounded shadow">
                <p>
                  Taxes{" "}
                  <span role="img" aria-label="worried face">
                    😟
                  </span>
                </p>
                <ul className="list-disc list-inside">
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Accountant contract
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Request work payslips
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Cancel VAT ID
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="bg-red-100 text-lg font-semibold mb-2">Blocked</h2>
              <div className="bg-white p-4 rounded shadow">
                <p>Move</p>
                <p>Survive moving places in the pandemic.</p>
                <ul className="list-disc list-inside">
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Request moving estimate
                  </li>
                  <li className="flex items-center line-through">
                    <input type="checkbox" className="mr-2" />
                    Order moving boxes
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="bg-green-100 text-lg font-semibold mb-2">Done</h2>
              <div className="bg-white p-4 rounded shadow">
                <p>
                  Nothing to be done{" "}
                  <span role="img" aria-label="upside-down smile">
                    🙃
                  </span>
                </p>
              </div>
              <img
                src="https://www.meme-arsenal.com/memes/76c5bf4f375e8e0ce1f3237828445b79.jpg"
                alt="This is fine meme"
                className="mt-4 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalTask;
