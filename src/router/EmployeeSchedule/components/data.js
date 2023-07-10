import Morning from "../../../assets/image/morning.png";
import Afternoon from "../../../assets/image/afternoon.png";
import Night from "../../../assets/image/night.png";
import MorNoon from "../../../assets/image/mornoon.jpg";
export const data = [
    {
        shiftName: "Shift I",
        shiftType: "Morning",
        shiftTime: "6am-12am",
        coefficient: 1,
        droppableId: "morning",
        ItemDroppableId: "morningSlot",
        shiftImg: Morning,
    },
    {
        shiftName: "Shift II",
        shiftType: "Afternoon",
        shiftTime: "12am-6pm",
        coefficient: 1.25,
        droppableId: "afternoon",
        ItemDroppableId: "afternoonSlot",
        shiftImg: Afternoon,
    },
    {
        shiftName: "Shift III",
        shiftType: "Night",
        shiftTime: "6pm-6am",
        coefficient: 1.5,
        droppableId: "night",
        ItemDroppableId: "nightSlot",
        shiftImg: Night,
    },
];
export const userShifts = [
    {
        id: 1,
        shiftName: "Shift I",
        shiftType: "Morning",
        shiftTime: "6am-12am",
        coefficient: 1,

        shiftImg: Morning,
        pos: "Saler",
    },
    {
        id: 2,
        shiftName: "Shift II",
        shiftType: "Afternoon",
        shiftTime: "12am-6pm",
        coefficient: 1,
        pos: "Saler",
        shiftImg: Afternoon,
    },
    {
        id: 3,
        shiftName: "Shift III",
        shiftType: "Night",
        shiftTime: "6pm-6am",
        coefficient: 1.5,
        pos: "Saler",
        shiftImg: Night,
    },
    {
        id: 4,
        shiftName: "Shift I",
        shiftType: "Morning And Afternoon",
        shiftTime: "6am-6pm",
        coefficient: 1,
        shiftImg: MorNoon,
        pos: "Guard",
    },

    {
        id: 5,
        shiftName: "Shift III",
        shiftType: "Night",
        shiftTime: "6pm-6am",
        coefficient: 1.5,
        pos: "Guard",
        shiftImg: Night,
    },
];
