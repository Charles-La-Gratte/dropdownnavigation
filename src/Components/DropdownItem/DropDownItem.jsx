import React from 'react';
import "./DropdownItems.css";
function DropDownItem({children, onClick, iconClass}) {
  return (
    <div className="dropdown-item" onClick={onClick}>
       <i className={iconClass}></i>
      {children}
    </div>
  )
}

export default DropDownItem;