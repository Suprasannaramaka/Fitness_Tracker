/* eslint-disable react-refresh/only-export-components */
import {createContext,useContext, useEffect,useState,type ReactNode} from "react";
import {initialState,type User,type Credentials, type FoodEntry, type ActivityEntry,} from "../FitTrack_Assets/types";
import { useNavigate } from "react-router-dom";
import mockApi from "../FitTrack_Assets/assets/mockApi";

type AppContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isUserFetched: boolean;
  fetchUser: (token: string) => Promise<void>;
  signUp: (credentials: Credentials) => Promise<void>;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  onboardingCompleted: boolean;
  setOnboardingCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  allFoodLogs: FoodEntry[];
  setAllFoodLogs: React.Dispatch<React.SetStateAction<FoodEntry[]>>;
  allActivityLogs: ActivityEntry[];
  setAllActivityLogs: React.Dispatch<React.SetStateAction<ActivityEntry[]>>;
};

const AppContext = createContext<AppContextType>(initialState as unknown as AppContextType);

export const AppProvider = ({
  children,}: {
  children: ReactNode;}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isUserFetched, setIsUserFetched] = useState(() => !localStorage.getItem("token"));
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const [allFoodLogs, setAllFoodLogs] =useState<FoodEntry[]>([]);
  const [allActivityLogs, setAllActivityLogs] =useState<ActivityEntry[]>([]);
  const signUp = async (credentials: Credentials) => {
    const { data } = await mockApi.auth.register(credentials);
    setUser(data.user);
    if (
      data?.user?.age &&
      data?.user?.weight &&
      data?.user?.goal
    ) {
      setOnboardingCompleted(true);
    }
    localStorage.setItem("token", data.jwt);
  };
  const login = async (
    credentials: Credentials
  ) => {
    const { data } =
      await mockApi.auth.login(credentials);

    setUser({
      ...data.user,
      token: data.jwt,
    });

    if (
      data?.user?.age &&
      data?.user?.weight &&
      data?.user?.goal
    ) {
      setOnboardingCompleted(true);
    }

    localStorage.setItem("token", data.jwt);
  };

  const fetchUser = async (token: string) => {
    const { data } =
      await mockApi.user.me();

    setUser({
      ...data,
      token,
    });

    if (
      data?.age &&
      data?.weight &&
      data?.goal
    ) {
      setOnboardingCompleted(true);
    }
  };

  const fetchFoodLogs = async () => {
    const { data } =
      await mockApi.foodLogs.list();

    setAllFoodLogs(data as FoodEntry[]);
  };

  const fetchActivityLogs = async () => {
    const { data } =
      await mockApi.activityLogs.list();

    setAllActivityLogs(data as ActivityEntry[]);
  };

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);

    setAllFoodLogs([]);
    setAllActivityLogs([]);

    setOnboardingCompleted(false);

    navigate("/");
  };

  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          await fetchUser(token);
          await fetchFoodLogs();
          await fetchActivityLogs();
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      }

      setIsUserFetched(true);
    };

    initializeUser();
  }, []);

  const value = {
    user,
    setUser,

    isUserFetched,

    fetchUser,
    signUp,
    login,
    logout,

    onboardingCompleted,
    setOnboardingCompleted,

    allFoodLogs,
    setAllFoodLogs,

    allActivityLogs,
    setAllActivityLogs,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContext;