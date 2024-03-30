import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';
import {MenuDataKey} from "@/test_data/test";

export type Role = 'student' | 'admin' ;

export interface RoleState  {
  role: Role,
  menu: MenuDataKey[]
}
const initialState: RoleState = {
  role: 'admin',
  menu: []
}

export const roleSplice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    set_role(state, aciton) {
      state.role = aciton.payload
    },
    set_menu(state, aciton) {
      state.menu = aciton.payload
    }
  }
})

export const { set_role, set_menu } = roleSplice.actions;
export const select_role = (state: RootState) => {
  return state.role2
}
export default roleSplice.reducer;