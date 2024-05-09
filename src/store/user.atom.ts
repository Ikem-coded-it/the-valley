import { persistentMap } from "@nanostores/persistent";
// import { Token, User } from "@/dto/user.ts";
// import { atom } from "nanostores";

// @ts-ignore
export const authToken = persistentMap("@", null);

// @ts-ignore
export const userAtomMap = persistentMap("@chreestis", null);
export const saveUser = (user) => {
  if (!user) {
    localStorage.removeItem("persistentMapUser");
    return userAtomMap.set(null);
  }
  localStorage.setItem("persistentMapUser", JSON.stringify(user));
  userAtomMap.set(user as unknown);
};
