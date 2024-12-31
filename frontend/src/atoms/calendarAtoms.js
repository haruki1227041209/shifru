import { atom } from "jotai";

const today = new Date();

export const yearAtom = atom(today.getFullYear());
export const monthAtom = atom(today.getMonth());
export const isFirstHalfAtom = atom(today.getDate() <= 15);
