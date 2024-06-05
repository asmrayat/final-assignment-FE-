import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const EditProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [userDataFetched, setUserDataFetched] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/get-user/${user?.email}`
        );
        const data = await response.json();
        setName(data?.name);
        setAge(data?.age);
        setNumber(data?.number);
        setUserDataFetched(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (!userDataFetched) {
      fetchUserData();
    }
  }, [user, userDataFetched]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const number = form.number.value;
    const email = user.email;
    const editResult = { name, age, number, email };
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch("http://localhost:5000/edit-profile", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(editResult),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        form.reset();
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // If userDataFetched is false, you can render a loading state
  if (!userDataFetched) {
    return (
      <div className="h-screen flex justify-center mt-10">
        <div className="flex flex-col gap-4 w-80 ">
          <div className="skeleton h-80 w-full"></div>
          <div className="skeleton h-10 w-28"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen ">
      <div className="avatar flex justify-center items-center mt-10">
        <div className="w-24 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product name"
              className="input input-bordered w-80"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Description"
              className="input input-bordered w-80"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Number</span>
            </label>
            <input
              type="text"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Description"
              className="input input-bordered w-80"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              value={user.email}
              disabled
              className="input input-bordered w-80"
            />
          </div>

          <button className="btn btn-success mt-5 flex w-80 text-white ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
