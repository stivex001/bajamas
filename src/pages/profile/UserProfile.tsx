import { PageTitle } from "@/components/PageTitle";
import React from "react";

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Profile" />
    </main>
  );
};

export default UserProfile;
