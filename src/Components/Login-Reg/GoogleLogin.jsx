
import useAuth from "../../Hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const token = localStorage.getItem('token')

  const handleGoogleSignIn = () => {
    googleLogin().then((data)=>{

      const name =(data.user.displayName);
      const email = (data.user.email);
      const result = {name,email}
      
      fetch('http://localhost:5000/create-user',{
        method:"POST",
        headers:{
          "Content-type": "application/json",
          authorization:`Bearer ${token}`
        },
        body:JSON.stringify(result)
      })
      .then((res)=>res.json())
      .then((data)=>{
        localStorage.setItem('token',data?.token)
      });

    });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-primary sm:w-96 lg:w-full">
      Continue With Google
    </button>
  );
};

export default GoogleLogin;
