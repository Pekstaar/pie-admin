import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserStore = create(
  devtools(
    persist((set) => ({
      user: {
        token: null,
      },
      setToken: () =>
        set((state) => ({ user: { ...state.user, token: state.user.token } })),
    }))
  )
);

export default useUserStore;
