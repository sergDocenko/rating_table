export enum Color {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

export interface User {
  color: Color;
  name: string;
  speed: number;
  time: number;
}

export type RequestParams={
  [key:string]:string|number
}
