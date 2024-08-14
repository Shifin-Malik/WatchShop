import { Button } from "@material-tailwind/react";
import { useState } from "react";

function ItemsList() {
  const menu = [
    { id: 1, name: "All" },
    { id: 2, name: "Trending" },
    { id: 3, name: "Popular" },
    { id: 4, name: "New" },
    { id: 5, name: "Best Sellers" },
    
  ];

  const [active, setActive] = useState(menu[0].id);

  return (
    <div className="md:mt-40 mt-36 flex w-full md:gap-4 gap-2 overflow-y-visible overflow-x-scroll px-4 py-2 xl:px-6 top-10">
      {menu.map(({ name, id }) => (
     <Button
     size="sm"
   
  
     className={`${active === id ? "bg-secondary rounded-lg h-12 pl-8 text-center pr-10" : "bg-primary text-black"} min-w-max`}
     onClick={() => setActive(id)}
     key={id}
     onPointerEnterCapture={() => {}}
     onPointerLeaveCapture={() => {}}
     placeholder={undefined} // if not applicable
   >
      
          {name}
        </Button>
      ))}
    </div>
  );
}

export default ItemsList;