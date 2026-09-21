import users from "../../../constants/users.json";

interface userinfo {
  username: string | undefined;
  password: string | undefined;
}

const userExists = ({ username, password }: userinfo): object[] => {
  const userArray = users.filter(
    (user) =>
      (user.email == username || user.username == username) &&
      user.password == password,
  );
  return userArray
};

export default userExists;
