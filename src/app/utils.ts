import { User, Color } from "./types";
const initUsers: User[] = [
  {
    color: Color.BLUE,
    name: "DFwqyxc uwqxuwyq",
    time: 0,
    speed: 60,
  },
  {
    color: Color.RED,
    name: "Sjhb uwqxuwyq",
    time: 0,
    speed: 50,
  },
  {
    color: Color.GREEN,
    name: "Fwqyxc Twecwecwecwecwec wecwecwecwecwqxuwyq",
    time: 0,
    speed: 45,
  },
];
export function getUser(t: number): User {
  const userIndex = Math.floor(Math.random() * 3);
  const user: User = {...initUsers[userIndex]};
  user.time = t;
  return user;
}
