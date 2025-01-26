import Logo from "@/components/logo";
import LogoutButton from "@/components/signup-page/logout-button";
import { Link } from "@/navigation";
import React, { FC, ReactNode } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
  createProfileModal: ReactNode;
  editProfileModal: ReactNode;
}
const ProfileLayout: FC<ProfileLayoutProps> = ({
  children,
  createProfileModal,
  editProfileModal,
}) => {
  return (
    <main className="w-full max-w-screen-xl place-self-center">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <header className="w-full p-4 flex items-center justify-between">
          <div className="w-28 md:w-40">
            <Logo />
          </div>
          <Link href={"/logout"} prefetch={false}>
            Sign Out
          </Link>
        </header>
        <section className="flex-grow w-full p-4 flex items-center justify-center">
          {children}
        </section>
      </div>
      {createProfileModal}
      {editProfileModal}
    </main>
  );
};

export default ProfileLayout;
