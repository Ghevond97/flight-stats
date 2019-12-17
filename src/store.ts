import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import selectPlugin from "@rematch/select";
import { models } from "models";
import { type } from "os";

const selectPlug = selectPlugin();

const store = init({
  models,
  plugins: [selectPlug]
});

const { select } = store;

export { select };

export default store;

export type IRootState = RematchRootState<typeof models>;
export type Dispatch = RematchDispatch<typeof models>;
export type IStore = typeof store & IRootState;
