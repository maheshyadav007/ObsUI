import { useState, useEffect } from "react";
import "./App.css";
import exchangeImage from "./assets/exchange_white.png";

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date());

  const [currentThemeIndex, setCurrentThemeIndex] = useState(5);

  // Multiple theme gradients
  const themes = [
    {
      name: "Sunset Bliss",
      main: "bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-500",
      footer1: "bg-purple-800",
      imageRect: "bg-purple-900 bg-opacity-90",
      timerColor: "text-gray-800",
      centerRectColor: "text-gray-800",
    },
    {
      name: "Ocean Breeze",
      main: "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500",
      footer1: "bg-teal-800",
      imageRect: "bg-indigo-900 bg-opacity-90",
      timerColor: "text-gray-800",
      centerRectColor: "text-gray-800",
    },
    {
      name: "Forest Mist",
      main: "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500",
      footer1: "bg-green-800",
      imageRect: "bg-emerald-900 bg-opacity-90",
      timerColor: "text-gray-800",
      centerRectColor: "text-gray-800",
    },
    {
      name: "Cherry Blossom",
      main: "bg-gradient-to-r from-pink-400 via-rose-500 to-fuchsia-500",
      footer1: "bg-rose-800",
      imageRect: "bg-fuchsia-900 bg-opacity-90",
      timerColor: "text-gray-800",
      centerRectColor: "text-gray-800",
    },
    {
      name: "Golden Hour",
      main: "bg-gradient-to-r from-amber-300 via-orange-500 to-red-600",
      footer1: "bg-amber-800",
      imageRect: "bg-red-900 bg-opacity-90",
      timerColor: "text-gray-800",
      centerRectColor: "text-gray-800",
    },
    {
      name: "Pink Passion",
      main: "bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500",
      footer1: "bg-purple-800",
      imageRect: "bg-purple-900 bg-opacity-90",
      timerColor: "text-gray-800",
      centerRectColor: "text-gray-800",
    },
  ];

  const currentTheme = themes[currentThemeIndex];

  // Function to cycle through themes
  const cycleTheme = () => {
    setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  useEffect(() => {
    if (socialMediaItems.length > 0) {
      const intervalId = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSocialMediaIndex(
            (prevIndex) => (prevIndex + 1) % socialMediaItems.length
          );
          setIsTransitioning(false);
        }, 500); // Duration of the transition
      }, 3000); // Interval between transitions

      return () => clearInterval(intervalId);
    }
  }, [socialMediaItems.length]);

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

          {/* Theme cycle button */}
          <button
            onClick={cycleTheme}
            className="absolute top-4 left-4 z-50 bg-white px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-gray-100"
          >
            Change Theme ({currentTheme.name})
          </button>

          {/* Time display */}
          <div className="absolute top-0 right-8 z-30">
            <div
              className={`${currentTheme.main} px-4 py-2 rounded-b-2xl shadow-xl relative overflow-hidden`}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-md rounded-b-2xl"></div>
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 shadow-inner rounded-b-2xl"></div>
              {/* Content */}
              <div className="relative z-10">
                <span
                  className={`${currentTheme.timerColor} text-xl font-mono font-semibold w-[200px] inline-block text-center drop-shadow-lg`}
                >
                  {formatTime(currentTime)}
                </span>
              </div>
            </div>
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
            <div
              className={`${currentTheme.footer1} h-8 w-full absolute bottom-14 left-0 right-0 overflow-hidden`}
            >
              <div className="scrolling-text-container">
                <p className="scrolling-text text-white text-lg whitespace-nowrap">
                  {scrollingText}
                </p>
              </div>
            </div>
            {/* Footer 2 */}
            <div
              className={`${currentTheme.main} h-16 w-full absolute bottom-0 left-0 right-0 flex items-center justify-between relative`}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm"></div>

              {/* Content */}
              <div className="relative z-10 w-full flex items-center justify-between">
                {/* New fun div */}
                <div className="ml-64 p-2 rounded-lg transform hover:rotate-0 transition-transform duration-300">
                  <p className="text-white text-sm font-bold leading-tight drop-shadow-md">
                    <span className="block">
                      🧠 Learned something today? 🚀
                    </span>
                    <span className="block"> Smash that 👍</span>
                    <span className="block">
                      Subscribe 🔔 & Share <i className="fas fa-share-alt"></i>
                    </span>
                  </p>
                </div>

                {/* Center rectangle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-10">
                  <div
                    className={`px-5 py-2 ${currentTheme.main} rounded-t-2xl shadow-xl relative overflow-hidden`}
                  >
                    {/* Enhanced glass effect overlay */}
                    <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-md rounded-t-2xl"></div>
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 shadow-inner rounded-t-2xl"></div>
                    {/* Content */}
                    <div className="flex justify-center items-center h-full relative z-10 rounded-t-2xl">
                      <span
                        className={`${currentTheme.centerRectColor} text-lg font-semibold drop-shadow-lg`}
                      >
                        1800/2000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Animated social media content */}
                {socialMediaItems.length > 0 && (
                  <div className="h-12 overflow-hidden w-56 mr-32">
                    <div
                      className={`flex items-center justify-end space-x-3 transition-transform duration-500 ${
                        isTransitioning ? "-translate-y-full" : "translate-y-0"
                      }`}
                    >
                      <span className="text-4xl drop-shadow-lg">
                        {socialMediaItems[currentSocialMediaIndex].icon}
                      </span>
                      <span
                        className="text-lg font-semibold drop-shadow-lg"
                        style={{
                          color:
                            socialMediaItems[currentSocialMediaIndex].color,
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
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
                      <span className="text-4xl drop-shadow-lg">
                        {
                          socialMediaItems[
                            (currentSocialMediaIndex + 1) %
                              socialMediaItems.length
                          ].icon
                        }
                      </span>
                      <span
                        className="text-lg font-semibold drop-shadow-lg"
                        style={{
                          color:
                            socialMediaItems[
                              (currentSocialMediaIndex + 1) %
                                socialMediaItems.length
                            ].color,
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        {
                          socialMediaItems[
                            (currentSocialMediaIndex + 1) %
                              socialMediaItems.length
                          ].handle
                        }
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Image rectangle */}
            <div
              className={`absolute left-8 bottom-8 ${currentTheme.imageRect} rounded-xl px-6 py-3 w-36 h-36 z-20`}
            >
              <span className="text-lg font-semibold text-white">Image</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
