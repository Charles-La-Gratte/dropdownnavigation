import React from 'react';
import "./DropdownItems.css";
function DropDownItem({children, onClick}) {
  return (
    <div className="dropdown-item" onClick={onClick}>{children}</div>
  )
}

export default DropDownItem;