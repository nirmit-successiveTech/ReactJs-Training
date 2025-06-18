import UserCard from "../components/UserCard";

export default function UserDisplay() {
  return (
    <div className="card-wrapper">
      <UserCard
        name={"nirmit"}
        email={"mymail@gmail.com"}
        url={"https://avatar.iran.liara.run/public"}
      />
        <UserCard
        name={"ajay"}
        email={"ajay@gmail.com"}
        url={"https://avatar.iran.liara.run/public/boy"}
      />
        <UserCard
        name={"rohan"}
        email={"ajay@gmail.com"}
        url={"https://avatar.iran.liara.run/public/boy"}
      />
        <UserCard
        name={"suman"}
        email={"ajay@gmail.com"}
        url={"https://avatar.iran.liara.run/public/girl"}
      />
    </div>
  );
}
