import React from "react";
const Table = ({ headers, children, hasCheckbox = false, headerClass }) => {
  return (
    <div className="  w-full">
      <div className=" overflow-hidden ">
        <table className="min-w-full bg-white">
          <thead className="bg-[#F3F3F3] ">
            <tr>
              {hasCheckbox && (
                <th className="w-4 bg-white px-3">
                  <input type="checkbox" className="h-[20px] w-[20px]" />
                </th>
              )}
              {headers.map((h) => (
                <th
                  className={`text-center py-3 px-4 uppercase font-semibold text-sm ${headerClass}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-normal text-sm">{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
