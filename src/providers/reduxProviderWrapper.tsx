"use client";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
export default function ReduxProviderWrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
}