
import{
    TbPackageExport,
    TbPackageImport,
    TbPackageOff
}from "react-icons/Tb"


export const ticketTypes = [
    {
        id: 1,
        name: "Imports",
        color: `#16A085`,
        icon:  TbPackageImport,
    },
    {
        id: 2,
        name: "Sold",
        color: `#E74C3C`,
        icon: TbPackageExport,
    },
    {
        id: 3,
        name: "Cancel",
        color: "#2980B9",
        icon: TbPackageOff,
    },
];
export const shiftStatus = {
    alert: {
        data: [
            "not checked in",
            "not checked in and not checked out",
            "not checked in and checked out",
            "not checked in and not checked out",
        ],
        color: "#ff9683",
    },
    warning: {
        data: [
            "checked in late",
            "checked in late and not checked out",
            "checked in late and checked out",
            "checked in late and not checked out",
            "checked in and not checked out",
            "checked in and checked out late",
        ],
        color: "#ffee93",
    },
    success: {
        data: ["checked in and checked out"],
        color: "#adf7b6",
    },
    notYet: {
        data: ["not yet"],
        color: "#44cbcd",
    },
    working: {
        data: ["working"],
        color: "red",
    },
};
