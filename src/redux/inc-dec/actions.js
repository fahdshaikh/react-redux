import { INC_1, DEC_1, INC_5, DEC_5 } from "./types";

export const increment_1 = () => ({
  type: INC_1,
});

export const decrement_1 = () => ({
  type: DEC_1,
});

export const increment_5 = () => ({
  type: INC_5,
});

export const decrement_5 = () => ({
  type: DEC_5,
});
