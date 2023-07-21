import { User } from "@/app/types";
import clsx from "clsx";
import React, { FC } from "react";
import Helmet from "../../../../../../public/helmet.svg";
import styles from "./userInfo.module.css";
import { getNormalizeTimeToString } from "@/app/utils";

interface UserInfoProps extends User {
  number: number;
  active?: boolean;
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
          <span className={styles.time}>{getNormalizeTimeToString(time)}</span>
          <span className={styles.speed}> | {speed} км/ч</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserInfo);
