"use client";
import { useAuthContext } from "@/app/components/hooks/useAuthContext";
import { deleteData, postData } from "@/utils/fetchData";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();
  const { user,token, dispatch } = useAuthContext();

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

  const handleDelete = async () => {
    const { data, error } = await deleteData(
      `/users/${user._id}`,
      token
    );
    if (!error) {
      // Dispatch the logout action if the request is successful
      dispatch({ type: "LOGOUT" });

      // Wait for 10 seconds before redirecting to "/auth"

      router.push("/auth");
    } else {
      console.error("Account deletion failed:", error);
    }
  };
  return (
    <main className="px-4 lg:px-6 py-4 pt-0 md:pt-4">
      <h2 className="font-extrabold text-xl my-3">Account</h2>
      <ul className="space-y-2">
        <li className=" ml-4 list-disc font-bold">
          <button onClick={handleLogout}>Logout</button>
        </li>
        <li className="text-tert font-bold  ml-4 list-disc">
          <button onClick={handleDelete}>Delete My Account</button>
        </li>
      </ul>
    </main>
  );
}
