import UsersList from "@/components/UserList";



export default async function UsersPage() {
  let users = null;
  let error = false;

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await res.json();
  } catch (err) {
    error = true;
  }

  return <UsersList initialUsers={users} hasError={error} />;
}
