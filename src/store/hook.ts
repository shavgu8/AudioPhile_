import store from "./store";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

 type AppDispach = typeof store.dispatch
 type Rootstate  = ReturnType<typeof store.getState>

export const useAppDispach = () => useDispatch<AppDispach>()
export const useAppSelector:TypedUseSelectorHook<Rootstate> = useSelector
