import React, { Dispatch, ReactNode, useEffect, useReducer } from "react";
import { DevSettings } from "react-native";

const DeveloperContext = React.createContext<ReducerState | undefined>(
  undefined,
);

const DeveloperUpdateContext = React.createContext<
  Dispatch<ReducerActions> | undefined
>(undefined);

type DeveloperProviderProps = {
  children: ReactNode;
};

type ReducerState = {
  menuItemAdded: boolean;
  visible: boolean;
};

type ReducerActions =
  | {
      type: "TOGGLE_VISIBILITY";
    }
  | { type: "ADD_MENU_ITEM" };

const initialState: ReducerState = {
  menuItemAdded: false,
  visible: false,
};

const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { ...state, visible: !state.visible };
    case "ADD_MENU_ITEM":
      return { ...state, menuItemAdded: true };
    default:
      return state;
  }
};

const DeveloperProvider = ({ children }: DeveloperProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    return () => {
      if (state.menuItemAdded) return;
      DevSettings.addMenuItem("Toggle Developer", () => {
        dispatch({ type: "TOGGLE_VISIBILITY" });
      });
      dispatch({ type: "ADD_MENU_ITEM" });
    };
  }, []);

  return (
    <DeveloperContext.Provider value={state}>
      <DeveloperUpdateContext.Provider value={dispatch}>
        {children}
      </DeveloperUpdateContext.Provider>
    </DeveloperContext.Provider>
  );
};

function useDeveloper() {
  const context = React.useContext(DeveloperContext);
  if (context === undefined) {
    throw new Error("useDeveloper must be used within a DeveloperProvider");
  }
  return context;
}

function useDeveloperUpdate() {
  const context = React.useContext(DeveloperUpdateContext);
  if (context === undefined) {
    throw new Error(
      "useDeveloperUpdate must be used within a DeveloperProvider",
    );
  }
  return context;
}

function useToggleDeveloper() {
  const dispatch = useDeveloperUpdate();
  return () => dispatch({ type: "TOGGLE_VISIBILITY" });
}
