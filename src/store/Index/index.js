import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "../ItemsSlice/itemsSlice";
import fetchStatusSlice from "../fetchStatusSlice/fetchStatusSlice";
import bagSlice from "../bagSlice/bagSlice"
const myntraStore = configureStore({
    reducer: {
      items: itemsSlice.reducer,
      fetchStatus: fetchStatusSlice.reducer,
      bag: bagSlice.reducer,
    }
  });

export default myntraStore
