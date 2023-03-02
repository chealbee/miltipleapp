import UserList from "@/components/UserList/UserList";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/reduxHooks";
import { getUsers } from "@/store/users/users";
export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <UserList />
    </>
  );
}
