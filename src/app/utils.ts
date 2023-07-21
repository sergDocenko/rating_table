import { User, Color } from "./types";
const initUsers: User[] = [
  {
    color: Color.BLUE,
    name: "Михаил Лихачёв",
    time: 0,
    speed: 60,
  },
  {
    color: Color.RED,
    name: "Дмитрий Иванов ",
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
  const user: User = { ...initUsers[userIndex] };
  user.time = t;
  return user;
}

export function getNormalizeTimeToString(time: number): string {
  const date = new Date(time);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliSeconds = date.getMilliseconds();
  const resultTime = `${minutes < 10 && "0" + minutes}:${
    seconds < 10 && "0" + seconds
  }.${milliSeconds} `;
  return resultTime;
}
