import { useState, useEffect } from "react";

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data?.length / rowsPerPage);

  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, rowsPerPage) => {
  if (data) return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  else return;
};

const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(data, page, rowsPerPage);
    slice && setSlice([...slice]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

export default useTable;