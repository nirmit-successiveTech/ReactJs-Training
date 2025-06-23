import UserCard from "@/components/UserCard";


export default function UserDisplay() {
  return (
    <div className="card-wrapper">
      <UserCard
        name={"nirmit"}
        email={"mymail@gmail.com"}
        url={"https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"}
      />
        <UserCard
        name={"ajay"}
        email={"ajay@gmail.com"}
        url={"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740"}
      />
        <UserCard
        name={"rohan"}
        email={"ajay@gmail.com"}
        url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFK3aGpbIrBzfqB1Fxq8BNMfZJu70SwwhzwQ&s"}
      />
        <UserCard
        name={"suman"}
        email={"ajay@gmail.com"}
        url={"https://png.pngtree.com/png-clipart/20230930/original/pngtree-friendly-female-avatar-for-website-and-social-network-vector-png-image_12917752.png"}
      />
    </div>
  );
}
