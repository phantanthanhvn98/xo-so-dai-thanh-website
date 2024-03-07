import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "./createAppSlice";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterSliceState {
  username: string;
  password: string;
  role: string;
  isOn: boolean;
}

const initialState: CounterSliceState = {
  username: '',
  password: '',
  role: '',
  isOn: false
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSlice = createAppSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    login: create.reducer((state, action: PayloadAction<CounterSliceState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.username = action.payload.username
      state.password = action.payload.password
      state.role = action.payload.role
      state.isOn = action.payload.isOn
    }),
    // decrement: create.reducer((state) => {
    //   state.value -= 1;
    // }),
    // // Use the `PayloadAction` type to declare the contents of `action.payload`
    // incrementByAmount: create.reducer(
    //   (state, action: PayloadAction<number>) => {
    //     state.value += action.payload;
    //   },
    // ),
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectUserName: (counter) => counter.username,
    selectPassword: (counter) => counter.password,
    selectRole: (counter) => counter.role,
    selectIsOn: (counter) => counter.isOn
  },
});

// Action creators are generated for each case reducer function.
export const { login } =
  counterSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectUserName, selectPassword, selectRole, selectIsOn } = counterSlice.selectors;
