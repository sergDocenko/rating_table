"use client";
import { fetchUsers } from "@/app/services/userService";
import { User } from "@/app/types";
import { useEffect, useState } from "react";
import UserInfo from "./components/UserInfo/UserInfo";
import styles from "./userList.module.css";

const UserList = () => {
  const [activeUser, setActiveUser] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (fetching) {
      addUsers();
    }
  }, [fetching, addUsers]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSetActive(index: number) {
    setActiveUser(index);
  }

  function addUsers() {
    fetchUsers()
      .then((data) => {
        setUsers([...users, ...data]);
        setFetching(false);
      })
      .catch((error: Error) => {
        console.log("Error : ", error.message);
        setError("Ошибка загрузки данных!!! Попробуйте снова!");
      });
  }
  function handleScroll(e: any) {
    let documentBottom =
      e.target.documentElement.getBoundingClientRect().bottom;
    const clientheight = e.target.documentElement.clientHeight;

    const buffer = clientheight / 3;
    if (documentBottom <= clientheight + buffer) {
      setFetching(true);
    }
  }

  return (
    <section className={styles["user-list__container"]}>
      {error ? (
        // Может быть любой UI
        <h3>{error}</h3>
      ) : (
        <ul className={styles["user-list"]}>
          {users.map((user, index) => (
            <li key={index} onClick={handleSetActive.bind(null, index)}>
              <UserInfo
                number={index + 1}
                {...user}
                active={activeUser === index}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default UserList;
