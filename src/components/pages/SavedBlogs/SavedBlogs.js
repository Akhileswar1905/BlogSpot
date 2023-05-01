import axios from "axios";
const SavedBlogs = () => {
  const accessToken = "fDbsjki46LpMOWUksnPub9GZ";

  const handleApi = async () => {
    const res = await axios.get(
      `https://api.vercel.com/v1/projects/prj_EqSGX7F2JylONkkax2E0toxGjEEv`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log(res.data);
  };

  return (
    <div>
      <button onClick={handleApi}>Get Projects</button>
    </div>
  );
};

export default SavedBlogs;
