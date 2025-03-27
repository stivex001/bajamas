import { PageTitle } from "@/components/PageTitle";
import { EditProfile } from "@/components/profile/EditProfile";
import { UserInfo } from "@/components/profile/UserInfo";
import { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleExitEdit = () => setIsEditing(false); 

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Profile" />
      {isEditing ? (
        <EditProfile onExitEdit={handleExitEdit} /> 
      ) : (
        <UserInfo onEdit={handleEdit} />
      )}
    </main>
  );
};

export default UserProfile;
