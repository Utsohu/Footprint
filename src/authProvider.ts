import { AuthProvider, HttpError } from "react-admin";
import data from "./users.json";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const user = data.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // eslint-disable-next-line no-unused-vars
      let { password, ...userToPersist } = user;
      localStorage.setItem("user", JSON.stringify(userToPersist));
      return Promise.resolve();
    }
    return Promise.reject(
      new HttpError("try username:guest, password:guest", 401, {
        message: "try username:guest, password:guest",
      })
    );
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
