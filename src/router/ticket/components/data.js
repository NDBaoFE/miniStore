import {
    BsFillEnvelopeOpenFill,
    BsDoorClosedFill,
    BsFillDoorOpenFill,
} from "react-icons/Bs";

export const ticketTypes = [
    {
        id: 1,
        name: "All Tickets",
        color: `#16A085`,
        icon: BsFillEnvelopeOpenFill,
    },
    {
        id: 2,
        name: "Open Tickets",
        color: `#E74C3C`,
        icon: BsFillDoorOpenFill,
    },
    {
        id: 3,
        name: "Closed Tickets",
        color: "#2980B9",
        icon: BsDoorClosedFill,
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
