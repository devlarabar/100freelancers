"use client";
import React from "react";
import { Menu } from "@headlessui/react";

function DropdownCard() {
  return (
    <Menu.Items
      as="div"
      className=" absolute left-full z-[1] mt-2 w-40 origin-top-right rounded-lg border-secondary bg-primary px-1  pb-1 pt-1  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <Menu.Item>
        <a className="text-CCCFD2-700 group flex items-center px-4 py-2 text-sm hover:rounded-lg hover:bg-[rgb(205,213,224,0.1)] hover:text-white">
          <span>Add outreach</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="text-CCCFD2-700 group flex items-center px-4 py-2 text-sm hover:rounded-lg hover:bg-[rgb(205,213,224,0.1)] hover:text-white">
          <span>Edit</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="text-CCCFD2-700 group flex items-center px-4 py-2 text-sm hover:rounded-lg hover:bg-[rgb(205,213,224,0.1)] hover:text-white">
          <span>Archive</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="text-CCCFD2-700 group flex items-center px-4 py-2 text-sm hover:rounded-lg hover:bg-[rgb(205,213,224,0.1)] hover:text-white">
          <span>Delete</span>
        </a>
      </Menu.Item>
    </Menu.Items>
  );
}

export default DropdownCard;
