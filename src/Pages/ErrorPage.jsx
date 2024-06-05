import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-9xl font-bold mb-4">Error {status || 404}</h1>
      <p className="text-2xl mb-6">{error?.message}</p>
      <Link to="/" className="text-blue-500 text-xl hover:text-blue-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
