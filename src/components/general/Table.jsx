import React from "react";

const Table = ({ headers, children }) => {
  return (
    <div className=" pt-8 w-full">
      <div className=" overflow-hidden ">
        <table className="min-w-full bg-white">
          <thead className="bg-[#F3F3F3] ">
            <tr>
              {headers.map((h) => (
                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
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
