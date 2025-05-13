import GoogleSignIn from "../components/GoogleSignIn";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-200 text-center p-4">
    <h1 className="text-5xl font-pacifico text-orange-600 mb-4">📸 MemoStack</h1>
    <p className="mb-6 text-lg text-gray-700">Sign in to share your favorite summer memories ☀️</p>
    <GoogleSignIn />
    <Link to="/gallery" className="mt-6 text-coral-700 font-semibold underline">View Public Gallery</Link>
  </div>
);

export default Home;
