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
