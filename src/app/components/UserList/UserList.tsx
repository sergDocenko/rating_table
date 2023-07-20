"use client";
import React, { useEffect, useState } from "react";
import UserInfo from "./components/UserInfo/UserInfo";
import { User, Color } from "@/app/types";
import styles from "./userList.module.css";
import { fetchUsers } from "@/app/services/userService";

const allUsers: User[] = [];
const limit = 50;

const UserList = () => {
  const [activeUser, setActiveUser] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    addUsers();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSetActive(index: number) {
    setActiveUser(index);
  }

  function addUsers() {
    fetchUsers({ limit }).then((data) => {
      allUsers.push(...data);
      setUsers([...data]);
    });
  }
  function handleScroll() {
    const clientheight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const currentScroll = window.pageYOffset;
    // console.log(clientheight, currentScroll, scrollHeight);

    
    const buffer = clientheight /10;
    if (scrollHeight < clientheight + currentScroll + buffer) {
      addUsers();
    }
  }

  return (
    <section className={styles["user-list__container"]}>
      <ul className={styles["user-list"]}>
        {allUsers.map((user, index) => (
          <li
            key={allUsers.length - limit + index}
            onClick={handleSetActive.bind(null, index)}
          >
            <UserInfo
              number={index + 1}
              {...user}
              active={activeUser === index}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;
