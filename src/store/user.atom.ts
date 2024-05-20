import { persistentMap } from "@nanostores/persistent";
// import { Token, User } from "@/dto/user.ts";
// import { atom } from "nanostores";

// @ts-ignore
export const authToken = persistentMap("@thevalleytoken", null);

// @ts-ignore
export const userAtomMap = persistentMap("@thevalleyusermap", null);
export const saveUser = (user) => {
  if (!user) {
    localStorage.removeItem("thevalleyuser");
    return userAtomMap.set(null);
  }
  localStorage.setItem("thevalleyuser", JSON.stringify(user));
  userAtomMap.set(user as unknown);
};
