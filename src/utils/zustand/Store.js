import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        user: {
          token: null,
          email: null,
          first_name: null,
          last_name: null,
          phonenumber:null
        },
        setToken: (tkn) =>
          set((state) => ({ user: { ...state.user, token: tkn } })),
        
        setProfile: (email,first_name,last_name,phonenumber) =>
          set((state) => ({ user: { ...state.user, email,first_name,last_name,phonenumber} })),
      }),
      { name: "okapy_user" }
    )
  )
);

export default useUserStore;
// setProfile: (email,first_name,last_name,phonenumber) =>
// set((state) => ({ user: { ...state.user, token: tkn } })),
// })