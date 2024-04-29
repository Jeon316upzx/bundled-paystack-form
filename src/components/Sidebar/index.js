import React from "react";
import Title from "./Title";
import Badge from "./Badge";

export const SideBar = ({ items, selectedMenu, setSelectedMenu }) => {
  return (
    <div className="flex flex-col h-full bg-[#f4f4f4] p-10">
      <Title title={"pay with"} />
      <div className="pt-5 flex flex-col">
        {items.map((item) => {
          return (
            <div
             key={item.title}
              className="flex flex-row items-center py-2 relative"
              onClick={() => setSelectedMenu(item.title)}
            >
              <span className="mr-4">{item.icon}</span>
              {selectedMenu === item.title ? (
                <span className=" transition-all ease-in-out text-green-300 text-xs whitespace-nowrap capitalize">
                  {" "}
                  {item.title}
                </span>
              ) : (
                <span className="transition-all ease-in-out delay-150 text-xs whitespace-nowrap capitalize">
                  {" "}
                  {item.title}
                </span>
              )}
              {item.badge !== "" && <Badge title={item.badge} />}

              {selectedMenu === item.title && (
                <span className="bg-green-300 h-[6px] w-[3px] rounded-l-full absolute right-[-40px] top-[50%]">
                  {" "}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
