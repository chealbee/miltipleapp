import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./index";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppselector: TypedUseSelectorHook<RootState> = useSelector;
