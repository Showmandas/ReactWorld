import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = [
    { id: 1, name: "Item 1", path: "/item1" },
    { id: 2, name: "Item 2", path: "/item2" },
    { id: 3, name: "Item 3", path: "/item3" },
    { id: 4, name: "Item 4", path: "/item4" },
    { id: 5, name: "Item 5", path: "/item5" },
  ];
  return (
    <nav>
        <h3>Hello re</h3>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-blue-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          )}
        </span>
      </div>

      <ul className={`md:flex absolute md:static bg-purple-400 text-white font-semibold duration-500 ${open ? 'top-6' : '-top-36'}`}>
        {items.map((item) => (
          <Link key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
