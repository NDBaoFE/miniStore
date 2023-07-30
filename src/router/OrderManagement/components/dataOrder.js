
import{
    TbPackageExport,
    TbPackageImport,
    
}from "react-icons/Tb"

import{
    MdOutlineBorderColor
}from "react-icons/Md"

export const orderTypes = [
    {
        id: 1,
        name: "Total Order",
        color: ` #2980B9`,
        icon: MdOutlineBorderColor,
    },
    {
        id: 2,
        name: "Total Price Sale",
        color: `#16A085`,
        icon: TbPackageExport,
    },
    {
        id: 3,
        name: "Total Price Import",
        color: " #E74C3C",
        icon:   TbPackageImport,
    },
];

