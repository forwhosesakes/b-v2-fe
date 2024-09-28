import { useState } from "react";

type TProps < T extends ItemWithID>= {
  selectedItem: T;
  items: T[];
  onSelectionChange: (item:T)=>void
};



function ButtonGroup <T extends ItemWithID> (props: TProps<T>) {


const [selectedItem, setSelectedItem] = useState(props.selectedItem)


const onSelectionChange = (item:T)=>{
    setSelectedItem(item)
    props.onSelectionChange(item)

}
  return <ul className="button-group flex flex-row  h-fit border border-white/50 rounded-lg m-3">{
    props.items.map((item)=>{
        return <li
        onClick={()=>onSelectionChange(item)}
        className={`p-2
            [&:last]:border-red-300
            text-xs
            hover:bg-white/25
            text-white/80

            
            ${selectedItem.id === item.id&& 'bg-white/15'}`}
        key={item.id}>

            {item.content}

        </li>

    })


  }</ul>;
};

export default ButtonGroup;
