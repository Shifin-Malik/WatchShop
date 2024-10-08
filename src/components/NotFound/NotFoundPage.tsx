import { Link } from "react-router-dom";
import Watch2 from '/images/watch2.png'

function NotFoundPage() {
  
  return (
    <div
      style={{
        backgroundImage: `url(${Watch2})`,
        backgroundSize: "contain", // Adjust the size of the image
        backgroundPosition: "top", // Align the background image to the top
        backgroundRepeat: "no-repeat", // Prevent background image repetition
       
      }}
      className=" pr-[-0.5rem] shadow-gold prose prose-invert bg-secondary absolute left-0 top-0  flex h-full w-screen  max-w-none flex-col items-center justify-start [text-shadow:0px_0px_10px_rgba(0,0,0,1)] prose-p:text-white"
    >
      {/* Optional content can be placed here */}
      <h1 className="mt-10 mb-2">SonicTime</h1>
    
      <div className="flex  flex-col md:pt-40 pt-60 text-balance  ">
        <h2 className="text-center md:pt-40 pt-10 text-shadow-red mb-3 ">Sorry, Page is not found!</h2>
        <h1 className="text-center text-shadow-red mb-3">404</h1>
       
      </div>
      <Link to="/">
      <button className="bg-primary text-black font-semibold h-10 w-40 rounded-md border border-yellow-400 shadow-text-gold">
          Go To Home
        </button>
      </Link>
      
    </div>
  );
}

export default NotFoundPage;
