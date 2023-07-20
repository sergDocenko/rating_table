import { User } from "@/app/types";
import clsx from "clsx";
import { FC } from "react";
import Helmet from "../../../../../../public/helmet.svg";
import styles from "./userInfo.module.css";

interface UserInfoProps extends User {
  number: number;
  active?: boolean;
}

function getNormalizeTime(time: number): string {
  const date = new Date(time);
  return `${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()} `;
}

const UserInfo: FC<UserInfoProps> = (props) => {
  const { number, color, name, speed, time, active } = props;

  return (
    <div
      className={clsx({ [styles["user-info"]]: true, [styles.active]: active })}
    >
      <span className={styles.number}>{number}</span>
      <div className={styles.avatar}>
        <Helmet className={styles.img} fill={color} />
      </div>
      <div className={styles["info-block"]}>
        <h3 className={styles.name}>{name}</h3>
        <div>
          <span className={styles.time}>{getNormalizeTime(time)}</span>
          <span className={styles.speed}> | {speed} км/ч</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
