import React from "react";
import Title from "./Title";
import Badge from "./Badge";

export const SideBar = ({ items, selectedMenu, setSelectedMenu }) => {
  return (
    <div className="siderbar">
      <Title title={"pay with"} />
      <div className="sidebar-container">
        {items.map((item) => {
          return (
            <div
             key={item.title}
              className="sidebar-item"
              onClick={() => setSelectedMenu(item.title)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {selectedMenu === item.title ? (
                <span className="selected-sidebar-title">
                  {" "}
                  {item.title}
                </span>
              ) : (
                <span className="sidebar-title">
                  {" "}
                  {item.title}
                </span>
              )}
              {item.badge !== "" && <Badge title={item.badge} />}
         
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
