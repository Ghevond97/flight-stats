import { createModel } from "@rematch/core";

import { getFlightStatsRequest } from "api";
import { makeRequest } from "utils";

export const flights = createModel({
  state: {
    flights: {}
  },
  reducers: {
    setFlights: (state, flightsData) => ({
      ...state,
      flights: flightsData
    })
  },
  selectors: () => ({
    selectFlights() {
      return (rootState: any) => {
        return rootState.flights.flights;
      };
    }
  }),
  effects: dispatch => ({
    async getFlights() {
      await makeRequest(getFlightStatsRequest(), {
        success: (data: any) => {
          dispatch.flights.setFlights(data);
        },
        fail: (data: any) => console.log("fail", data)
      });
    }
  })
});
