
import{
    TbPackageExport,
    TbPackageImport,
    TbPackageOff
}from "react-icons/Tb"


export const orderTypes = [
    {
        id: 1,
        name: "Total Order",
        color: `#16A085`,
        icon:  TbPackageImport,
    },
    {
        id: 2,
        name: "Total Price Income",
        color: `#E74C3C`,
        icon: TbPackageExport,
    },
    {
        id: 3,
        name: "Rollback",
        color: "#2980B9",
        icon: TbPackageOff,
    },
];

