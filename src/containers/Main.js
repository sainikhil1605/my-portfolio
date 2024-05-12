import React, {useEffect, useRef, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import GitHubCalendar from "react-github-calendar";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const iframeRef=useRef();

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);
  useEffect(() => {
    // Function to handle clicking outside the iframe
    function handleClickOutside(event) {
        if (iframeRef.current && !iframeRef.current.contains(event.target)) {
            setShowIframe(false);  // Hide the iframe
        }
    }

    // Add the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        // Clean up the event listener
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, [iframeRef]);
  const changeTheme = () => {
    setIsDark(!isDark);
  };
  const [showIframe, setShowIframe] = useState(false);
  const [iframeUrl, setIframe] = useState("");
  const setIframeUrl = (url) => {
    window.scrollTo(0, 0,{behavior:"smooth"});
    setIframe(url);
  }
  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider
        value={{
          isDark: isDark,
          changeTheme: changeTheme,
          setIframeUrl,
          setShowIframe
        }}
      >
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            {showIframe && (
              <div style={{width:"100%",display:"flex",justifyContent:"center"}} ref={iframeRef}>
              <iframe
                style={{
                  top: 0,
                  position: "absolute",
                  zIndex: 1000,
                  margin: "auto",
                  backgroundColor: "gray",
                }}
                src={iframeUrl}
                title="Achievement"
                width="80%"
                height="100%"
              ></iframe>
              </div>
            
            )}
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />

            <Projects />
            <StartupProject />
            <div
              style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",

                alignItems: "center"
              }}
            >
              <h1 className="project-heading" style={{paddingBottom: "20px"}}>
                Days I <strong className="purple">Code</strong>
              </h1>
              <GitHubCalendar
                username="sainikhil1605"
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
              />
            </div>

            <WorkExperience />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
