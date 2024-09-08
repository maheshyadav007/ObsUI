import { useState, useEffect } from "react";
import "./App.css";
import exchangeImage from "./assets/exchange_white.png";
// import exchangeImage from "./assets/exchange_black.png";

function App() {
  const [count, setCount] = useState(0);
  const scale = 0.8; // Adjust this value to scale the background (e.g., 0.5 for half size, 1 for full size)
  const exhange_image_path = "./assets/exchange_white.png";
  const socialMediaItems = [
    {
      icon: (
        <i
          className="fab fa-instagram text-3xl"
          style={{ color: "#E1306C" }}
        ></i>
      ),
      handle: "@instagram_handle",
      color: "#E1306C",
    },
    {
      icon: (
        <i
          className="fab fa-telegram text-3xl"
          style={{ color: "#0088cc" }}
        ></i>
      ),
      handle: "@telegram_channel",
      color: "#0088cc",
    },
  ];

  const [currentSocialMediaIndex, setCurrentSocialMediaIndex] = useState(0);
  const [prevSocialMediaIndex, setPrevSocialMediaIndex] = useState(
    socialMediaItems.length - 1
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setPrevSocialMediaIndex(currentSocialMediaIndex);
        setCurrentSocialMediaIndex(
          (prevIndex) => (prevIndex + 1) % socialMediaItems.length
        );
        setIsTransitioning(false);
      }, 500); // Duration of the transition
    }, 3000); // Interval between transitions

    return () => clearInterval(intervalId);
  }, [currentSocialMediaIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const scrollingText =
    "Welcome to our platform • Stay updated with the latest news • Enjoy your experience • Don't forget to check out our new features • Thank you for your support";

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="bg-white rounded-[40px] shadow-lg relative overflow-hidden"
          style={{
            width: `${1920 * scale}px`,
            height: `${1080 * scale}px`,
          }}
        >
          {/* Main content image */}
          <div className="absolute inset-0 z-10">
            <img
              src={exchangeImage}
              alt="Main content"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Time display */}
          <div className="absolute top-0 right-8 bg-gray-800 px-4 py-2 rounded-b-xl z-30">
            <span className="text-white text-xl font-mono font-semibold w-[180px] inline-block text-center">
              {currentTime.toLocaleTimeString()}
            </span>
          </div>

          {/* Header Navigation */}
          <nav className="flex justify-between items-center p-8"></nav>

          {/* Main Content */}
          <div className="flex justify-between items-center px-8">
            {/* Experience Card */}
            <div className="bg-white p-4 rounded-xl shadow-md text-center flex flex-col items-center">
              <span className="text-lg font-bold">Experience</span>
              <span className="text-4xl font-semibold mt-2">275</span>
              <span className="mt-1 text-blue-500">+23</span>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            {/* Footer 1 */}
            <div className="bg-gray-800 h-8 w-full absolute bottom-14 left-0 right-0 overflow-hidden">
              <div className="scrolling-text-container">
                <p className="scrolling-text text-white text-lg whitespace-nowrap">
                  {scrollingText}
                </p>
              </div>
            </div>
            {/* Footer 2 */}
            <div className="bg-gray-700 h-16 w-full absolute bottom-0 left-0 right-0 flex items-center justify-between">
              {/* New fun div */}
              {/* <div className="ml-64 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-2 rounded-lg shadow-lg transform  hover:rotate-0 transition-transform duration-300"> */}

              <div className="ml-64  p-2 rounded-lg shadow-lg transform  hover:rotate-0 transition-transform duration-300">
                <p className="text-white text-sm font-bold leading-tight">
                  <span className="block">🧠 Learned something today? 🚀</span>
                  <span className="block"> Smash that 👍</span>
                  <span className="block">
                    {" "}
                    Subscribe 🔔 & Share <i className="fas fa-share-alt"></i>
                  </span>
                </p>
              </div>

              {/* Center rectangle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-10">
                <div className="px-5 py-2 bg-gray-800 rounded-t-3xl">
                  <div className="flex justify-center items-center h-full">
                    <span className="text-white text-lg font-semibold">
                      1800/2000
                    </span>
                  </div>
                </div>
              </div>

              {/* Animated social media content */}
              <div className="h-12 overflow-hidden w-56 mr-32">
                <div
                  className={`flex items-center justify-end space-x-3 transition-transform duration-500 ${
                    isTransitioning ? "-translate-y-full" : "translate-y-0"
                  }`}
                >
                  <span className="text-4xl">
                    {socialMediaItems[currentSocialMediaIndex].icon}
                  </span>
                  <span
                    className="text-lg font-semibold"
                    style={{
                      color: socialMediaItems[currentSocialMediaIndex].color,
                    }}
                  >
                    {socialMediaItems[currentSocialMediaIndex].handle}
                  </span>
                </div>
                <div
                  className={`flex items-center justify-end space-x-3 transition-transform duration-500 ${
                    isTransitioning ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <span className="text-4xl">
                    {
                      socialMediaItems[
                        (currentSocialMediaIndex + 1) % socialMediaItems.length
                      ].icon
                    }
                  </span>
                  <span
                    className="text-lg font-semibold"
                    style={{
                      color:
                        socialMediaItems[
                          (currentSocialMediaIndex + 1) %
                            socialMediaItems.length
                        ].color,
                    }}
                  >
                    {
                      socialMediaItems[
                        (currentSocialMediaIndex + 1) % socialMediaItems.length
                      ].handle
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* Image rectangle */}
            <div className="absolute left-8 bottom-8 bg-black bg-opacity-100 rounded-xl px-6 py-3 w-36 h-36 z-20">
              <span className="text-lg font-semibold text-white">Image</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
