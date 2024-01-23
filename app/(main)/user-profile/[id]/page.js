"use client";
import CoverSection from "@/app/components/user-profile/CoverSection";
import AboutSection from "@/app/components/user-profile/AboutSection";

import ProfileCard from "@/app/components/user-profile/ProfileCard";
import GallerySection from "@/app/components/user-profile/GallerySection";
import UserList from "@/app/components/dashboard/UserList";
import { useGetData } from "@/app/components/hooks/useFetchData";
import { useAuthContext } from "@/app/components/hooks/useAuthContext";
import { useEffect, useState } from "react";

export default function UserProfile({ params, searchParams }) {
  const { user,token, dispatch } = useAuthContext();
  const [isProfileOwner, setIsProfileOwner] = useState(false);
  const { data: friends, error:friendLoadingError, isLoading:friendLoading } = useGetData(`/connect-friends`,{token:token});
  const {
    data: userData,
    error,
    isLoading,
  } = useGetData(token &&`/users/${params.id}`);



  useEffect(() => {
    if(user && userData){
      console.log(user._id, userData._id);
    }
   
    if (user && userData && user._id == userData._id) {
      setIsProfileOwner(true);
    } else {
      setIsProfileOwner(false);
    }
  }, [user, userData]);

  return (
    <>
      {userData && (
        <main className="px-4 lg:px-6 py-4 pt-0 md:pt-4">
          <div>
            <CoverSection />
            <div className="w-full ">
              <AboutSection isProfileOwner={isProfileOwner} userData={userData} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
          <div className="lg:flex lg:flex-col lg:w-[48%]">
            {/* <div className="w-full">
              <AboutSection isProfileOwner={isProfileOwner} userData={userData} />
            </div> */}
            <div className="mt-4">
              <ProfileCard isProfileOwner={isProfileOwner} userData={userData} />
            </div>
            
          </div>
          <div className="lg:flex lg:flex-col lg:w-[48%]">
          {isProfileOwner && (
              <div className="mt-4">
                <UserList users={friends? friends : []} title="Buddies" />
              </div>
            )}
            <div className="mt-4">
              <GallerySection />
            </div>
          </div>
          </div>
        </main>
      )}
    </>
  );
}
