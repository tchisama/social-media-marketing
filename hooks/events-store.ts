import { Event } from "@/types/types";
import {create} from "zustand";

interface useStoreModalStore {
    events:Event[];
    setEvents:(events:Event[])=>void;
    selectedDate:Date;
    setSelectedDate:(date:Date)=>void
}


export const useEventsStore = create<useStoreModalStore>((set)=>({
    events:[],
    setEvents:(events:Event[])=>set({events}),
    selectedDate:new Date(),
    setSelectedDate:(date:Date)=>set({selectedDate:date})
}))