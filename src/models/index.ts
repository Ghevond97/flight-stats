import { Models } from "@rematch/core";
import { flights } from "./flights.model";

export interface RootModel extends Models {
  flights: typeof flights;
}

export const models: RootModel = {
  flights
};
