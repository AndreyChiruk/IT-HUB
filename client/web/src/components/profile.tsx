import { useEffect, useState } from "react";
import "../styles/profile.css";
import { type ProfileUser } from "../api/types/profile.types";
import avatar from "../static/user.png";
import Header from "./header";
function ProfilePage() {
  const [userData, setData] = useState<ProfileUser | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storageProfile = localStorage.getItem("user");
    if (storageProfile) {
      setData(JSON.parse(storageProfile));
    }
    console.log(storageProfile);
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div className="container-profile">
        <div className="box-container">
          <h1 className="loading-header">Загрузка ...</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="container-profile">
        <div className="box-container">
          <img className="profile-avatar" src={avatar} alt="" />
          <p>{userData?.name}</p>
          <p>{userData?.email}</p>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
