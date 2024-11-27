import { atom } from "jotai";

const getRoleFromCookie = () => {
  if (typeof window !== "undefined") {
    const role = document.cookie
      .split("; ")
      .find((row) => row.startsWith("role="))
      ?.split("=")[1];
    return role
      ? JSON.parse(decodeURIComponent(role))
      : { is_admin: false, is_manager: false };
  }
  return { is_admin: false, is_manager: false };
};

export const roleAtom = atom(getRoleFromCookie());
