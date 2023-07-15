import { redirect } from "react-router-dom";
import { getUserFromLocalStorage } from "./localStorage";

export const checkAuthLoader = () => {
  const user = getUserFromLocalStorage();

  if (!user) {
    return redirect("/landing");
  }

  return null;
};
