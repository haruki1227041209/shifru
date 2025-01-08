import { atomWithStorage } from "jotai/utils";

export const staffNameAtom = atomWithStorage("staffName", "");
export const staffRoleAtom = atomWithStorage("staffRole", "");
