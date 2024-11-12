import { auth, signOut } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="text-3xl font-bold text-white">
        Welcome to the world of nextjs
      </h1>
    </>
  );
};

export default Home;
