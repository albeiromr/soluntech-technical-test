"use client";

import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: React.ReactNode
}

export const ReduxProvider = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
}
