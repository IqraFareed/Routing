import { useLoaderData } from "react-router-dom";

const Github = () => {
  const githubData = useLoaderData();
  console.log(githubData, "data");
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col justify-center items-center">
      Github followers: {githubData?.followers}
      <img
        src={githubData?.avatar_url}
        alt="profile"
        width={300}
        className="mt-6"
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/iqrafareed");

  return res.json;
};
