import { useState } from "react";
import Popup from "./components/Popup";
import Card from "./components/Card";
import Button from "./components/ui/Button";
export default function Home() {
  const [isPopup, setIsPopup] = useState({
    info: false,
    addUser: false,
    EditUser: false,
  });
  const [users, setUsers] = useState(["ibrahim"]);
  const [user, setUser] = useState("");
  const [indexEdit, setIndexEdit] = useState(null);
  return (
    <div className="container p-4 mx-auto ">
      <div className="flex items-center gap-5">
        <button onClick={() => setIsPopup({ ...isPopup, info: true })}>
          <img
            className="size-16"
            src="/icons/Info Square 02 Contained Filled.svg"
            alt=""
          />
        </button>
        <p className="text-center">
          Less Number Player to start game it's Five , You can add Plyer
        </p>
      </div>
      {users && (
        <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((e, i) => (
            <Card
              name={e}
              key={i}
              handleDelete={() => {
                setUsers([...users].filter((e, index) => i !== index));
              }}
              handleEdit={() => {
                setIndexEdit(i);
                setIsPopup({ ...isPopup, EditUser: true });
              }}
            />
          ))}
        </div>
      )}
      <div className="flex mt-16">
        <Button className="w-full rounded-r-none " text="Start" />
        <button onClick={() => setIsPopup({ ...isPopup, addUser: true })}>
          <img
            src="/icons/add-user.svg"
            alt=""
            className=" bg-main-100 rounded-r-2xl"
          />
        </button>
      </div>
      {isPopup.addUser && (
        <Popup
          title="loreem text"
          handleClick={() => {
            setIsPopup({ ...isPopup, addUser: false });
            setUsers([...users, user]);
            setUser("");
          }}
        >
          <input
            className="w-full p-2 bg-transparent border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-main-100 border-main-100"
            placeholder="Enter Player"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
          />
        </Popup>
      )}
      {isPopup.EditUser && (
        <Popup
          title={`Edit ${users[indexEdit]}`}
          handleClick={() => {
            setUsers(
              [...users, user].filter((e, index) => index !== indexEdit)
            );
            setIsPopup({ ...isPopup, EditUser: false });
            setUser("");
          }}
        >
          <input
            className="w-full p-2 bg-transparent border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-main-100 border-main-100"
            placeholder="Enter Player"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
          />
        </Popup>
      )}
      {isPopup.info && (
        <Popup
          title="Lorem ipsum"
          handleClick={() => setIsPopup({ ...isPopup, info: false })}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odit
          rerum officiis facere veniam fuga.
        </Popup>
      )}
    </div>
  );
}
