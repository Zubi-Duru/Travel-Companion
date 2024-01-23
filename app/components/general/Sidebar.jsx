"use client";

import SidebarLg from "./SidebarLg";
import SidebarMobile from "./SidebarMobile";
import { useAuthContext } from "../hooks/useAuthContext";
import { postData } from "@/utils/fetchData";
import { useRouter } from "next/navigation";
import { useGetData } from "../hooks/useFetchData";

export default function Sidebar() {
  const router = useRouter();
  const { user, token, dispatch } = useAuthContext();

  const handleLogout = async () => {
    try {
      // Use the deleteData hook to send a request to your logout endpoint
      const { error } = await postData("/auth/logout", null, token);

      if (!error) {
        // Dispatch the logout action if the request is successful
        dispatch({ type: "LOGOUT" });

        // Wait for 10 seconds before redirecting to "/auth"

        router.push("/auth");
      } else {
        console.error("Logout failed:", error);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      {console.log(user,"p")}
      {user && (
        <nav>
          <div className="hidden md:block relative">
            <div className="fixed h-[112vh]">
              {console.log(user,"i")}
              <SidebarLg
                handleLogout={handleLogout}
                address={{
                  to: user.destinationLocation?.address,
                  fro: user.homeLocation?.address,
                }}
              />
            </div>
          </div>

          <div className="md:hidden">
            <SidebarMobile
              handleLogout={handleLogout}
              address={{
                to: user.destinationLocation.address,
                fro: user.homeLocation.address,
              }}
            />
          </div>
        </nav>
      )}
    </div>
  );
}
