"use client";
import BtnMain from "@/app/components/general/BtnMain";
import BtnSec from "@/app/components/general/BtnSec";
import { useAuthContext } from "@/app/components/hooks/useAuthContext";
import { useGetData } from "@/app/components/hooks/useFetchData";
import { postData } from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Notification() {
  const { data: friendReqs, error, isLoading } = useGetData(`/connect`);
  const [statusArray, setStatusArray] = useState([]);
  const {token,user}=useAuthContext()

  console.log(friendReqs);

  const handleAccept = async (e, id) => {
    const { data, error } = await postData(`/connect-accept/${id}`,null,token);
    // Update the statusArray with the accepted status for the corresponding friend request
    setStatusArray((prevStatusArray) => [
      ...prevStatusArray,
      { id, status: 'accepted' },
    ]);
  };

  const handleReject = async (e, id) => {
    const { data, error } = await postData(`/connect-reject/${id}`,null,token);
    // Update the statusArray with the rejected status for the corresponding friend request
    setStatusArray((prevStatusArray) => [
      ...prevStatusArray,
      { id, status: 'rejected' },
    ]);
  };

  return (
    <main className="px-4 lg:px-6 py-4 pt-0 md:pt-4">
      <h2 className="font-extrabold text-xl my-3">Friend Notifications</h2>
      {friendReqs && (
        <>
          {friendReqs.map((friend) => {
            const friendStatusObject = statusArray.find(
              (statusObj) => statusObj.id === friend._id
            );
            const isAccepted = friendStatusObject?.status === 'accepted';
            const isRejected = friendStatusObject?.status === 'rejected';

            return (
              <div key={friend._id} className="space-y-4">
                <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      className="w-10 md:w-14 h-10 md:h-14 rounded-full "
                      src={`/assets/friend1.png`}
                      width="150"
                      height="150"
                    />
                    <div className="flex flex-col">
                      <Link href={`/user-profile/${user._id}`} className="font-medium  text-base text-sec inline-block">
                        {friend.username}
                      </Link>
                      <span className="text-sm text-sec inline-block">
                        {friend.destinationLocation.address}
                      </span>
                    </div>
                  </div>

                  <div className="space-x-2 lg:space-x-4">
                    {isAccepted && (
                      <>
                        <span className="text-green-500 mr-2 md:scale-[1.5] inline-block">✅</span>
                      </>
                    )}
                    {isRejected && (
                      <>
                        <span className="text-red-500 mr-2 md:scale-[1.5] inline-block">❌</span>
                      </>
                    )}
                    {!isAccepted && !isRejected && (
                      <>
                        <button
                          onClick={(e) => handleAccept(e, friend._id)}
                          className="font-medium text-tert border-[1px] border-tert py-1 px-2 md:py-1.5 md:px-4 rounded-3xl hover:bg-tert hover:text-white"
                        >
                          Accept
                        </button>
                        <button
                          onClick={(e) => handleReject(e, friend._id)}
                          className="font-medium text-red-500 border-[1px] border-red-500 py-1 px-2 md:py-1.5 md:px-4 rounded-3xl hover:bg-red-500 hover:text-white"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </main>
  );
}
