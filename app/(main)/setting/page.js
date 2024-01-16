export default function Settings() {
  return (
    <main className="px-4 lg:px-6 py-4 pt-0 md:pt-4">
      <h2 className="font-extrabold text-xl my-3">Account</h2>
      <ul className="space-y-2">
        <li className=" ml-4 list-disc font-bold">
          <button>Logout</button>
        </li>
        <li className="text-tert font-bold  ml-4 list-disc">
          <button>Delete My Account</button>
        </li>
      </ul>
    </main>
  );
}
