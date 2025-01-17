import { PageTitle } from "@/components/PageTitle";
import { EditProfile } from "@/components/profile/EditProfile";
import { UserInfo } from "@/components/profile/UserInfo";
import { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Profile" />
      {isEditing ? (
        <EditProfile /> 
      ) : (
        <UserInfo onEdit={handleEdit} /> // Pass a prop to handle editing
      )}
    </main>
  );
};

export default UserProfile;
