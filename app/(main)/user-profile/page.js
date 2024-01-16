import CoverSection from "@/app/components/user-profile/CoverSection";
import AboutSection from "@/app/components/user-profile/AboutSection";

import ProfileCard from "@/app/components/user-profile/profileCard";
import GallerySection from "@/app/components/user-profile/GallerySection";
import UserList from "@/app/components/dashboard/UserList";

export default function page() {
  return (
    <main className="px-4 lg:px-6 py-4 pt-0 md:pt-4">
      <div>
        <CoverSection />
      </div>
      <div className="lg:flex gap-6">
        <div className="">
          <AboutSection />
        </div>
        {/* <div className="lg:w-[48%]">
          <UserList title="Buddies" />
        </div> */}
      </div>
      <div className="lg:flex gap-6">
        <div className="lg:w-[48%]">
          <ProfileCard />
        </div>
        <div className="lg:w-[48%] mt-6">
          <GallerySection />
        </div>
      </div>
    </main>
  );
}
