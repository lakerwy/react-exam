import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import roleReducer from './slice/role'


export const store = configureStore({
  reducer: {
    role2: roleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;


const testData = [
  {
    name: 'A',
    price: 100,
    acount: 1.6,
  },
  {
    name: 'B',
    price: 100,
    acount: 1.5,
  },
  {
    type: 'account',
    radio: 0.8,
  },
  {
    type: 'zhekou',
    zhekou: 2,
  }
]
export type Role = {
  name?: string;
  price?: number;
  acount?: number;
  type?: string;
  radio?: number;
  zhekou?: number;
}
function getRole(role: Role[]):number {
  let total:number = 0;
  let radio: (number)[] = [];
  let zhekou:number = 0;
  role.forEach((item:Role) => {
    if (item.name) {
      total+= item.price! * item.acount!;
    } else if(item.type == 'account') {
      radio.push(item.radio!)
    } else if(item.type == 'zhekou') {
      zhekou+= item.zhekou!;
    }
  })
  radio.forEach((ra:number) => {
    total = total * ra;
  })
  return total
}
