const tags = ["Hiking", "Education", "Sport", "Travelling"];
export default function ProfileCard({userData,isProfileOwner}) {

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div className="bg-white rounded-2xl p-6 px-2 lg:px-8">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg lg:text-xl font-semibold mb-2">
          User Information
        </h2>
        <button className="text-tert text-sm">Edit Profile</button>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg">
          <span className="font-medium text-base text-sec inline-block">
            Age
          </span>
          <span className="font-medium text-sec border-[1px] border-sec/20 py-1 px-3 text-sm rounded-3xl">
            {userData.age}
          </span>
        </div>
        <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg">
          <span className="font-medium text-base text-sec inline-block">
            Sex
          </span>
          <span className="font-medium text-sec border-[1px] border-sec/20 py-1 px-3 text-sm rounded-3xl">
            {userData.sex}
          </span>
        </div>
        <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg">
          <span className="font-medium text-base text-sec inline-block">
            Relationship
          </span>
          <span className="font-medium text-sec border-[1px] border-sec/20 py-1 px-3 text-sm rounded-3xl">
          {userData.relationship}
          </span>
        </div>
        {isProfileOwner && <>
        <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg">
          <span className="font-medium text-base text-sec inline-block">
            Current Location
          </span>
          <span className="font-medium text-sec border-[1px] border-sec/20 py-1 px-3 text-sm rounded-3xl">
          {userData.homeLocation.address}
          </span>
        </div>
        <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg">
          <span className="font-medium text-base text-sec inline-block">
            Destination Location
          </span>
          <span className="font-medium text-sec border-[1px] border-sec/20 py-1 px-3 text-sm rounded-3xl">
          {userData.destinationLocation.address}
          </span>
        </div>
        <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg">
          <span className="font-medium text-base text-sec inline-block">
            Travel Date
          </span>
          <span className="font-medium text-sec border-[1px] border-sec/20 py-1 px-3 text-sm rounded-3xl">
          {new Date(userData.travelDate).toLocaleDateString(undefined, dateOptions)}
          </span>
        </div>
        <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg">
          <span className="font-medium text-base text-sec inline-block">
            Travel ID
          </span>
          <span className="font-medium text-sec border-[1px] border-sec/20 py-1 px-3 text-sm rounded-3xl">
          {userData._id}
          </span>
        </div>
        <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg">
          <span className="font-medium text-base text-sec inline-block">
            Email
          </span>
          <span className="font-medium text-sec border-[1px] border-sec/20 py-1 px-3 text-sm rounded-3xl">
          {userData.email}
          </span>
        </div>
        </>}
      </div>
      <div className="mt-2 shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg">
        <span className="font-medium text-base text-sec inline-block">
          Interested In:
        </span>
        <div className="mt-2 flex flex-wrap">
          {userData.interests.map((tag, i) => {
            return (
              <span
                key={i}
                className="text-sm mr-2 my-1.5 text-tert border-[1px] border-tert  px-3 xl:px-5 py-1 md:py-2.5 rounded-3xl"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
