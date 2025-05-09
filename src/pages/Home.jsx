import GoogleSignIn from "../components/GoogleSignIn";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-200 text-center p-4">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">📸 Welcome to MemoStack</h1>
    <p className="mb-4">Sign in to start uploading your summer memories.</p>
    <GoogleSignIn />
    <Link to="/gallery" className="text-blue-600 mt-4 underline">View Gallery</Link>
  </div>
);

export default Home;
