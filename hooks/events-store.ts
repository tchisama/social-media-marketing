import { Event } from "@/types/types";
import {create} from "zustand";

interface useStoreModalStore {
    events:Event[];
    setEvents:(events:Event[])=>void;
}


export const useStoreModal = create<useStoreModalStore>((set)=>({
    events:[],
    setEvents:(events:Event[])=>set({events})
}))