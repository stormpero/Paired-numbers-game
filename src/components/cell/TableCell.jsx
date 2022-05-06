import React from 'react';

import "./TableCell.css"
//2-200 4-150 6-100 8-80

const CELL_SIZE = {
  "2": 200,
  "4": 120,
  "6": 100,
  "8": 80
}

function cellStyles(size) {
  return {
    height: CELL_SIZE[size],
    width: CELL_SIZE[size],
  }
}


const TableCell = ({index, data, onClick, loading, boardSize}) => {
  return (
    <>
    {data && <div className={data.done ? "cell active" : "cell"} style={cellStyles(boardSize)} onClick={loading ? f=> f : () => onClick(index)}>
      <p>{data.open ? data.content : ""}</p>
    </div>
    }
    </>
  );
};

export default TableCell;