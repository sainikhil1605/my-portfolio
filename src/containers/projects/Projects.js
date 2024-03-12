import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {
  chromeExtensions,
  mobileApps,
  npmPackages,
  openSource,
  socialMediaLinks
} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
// import response from "../../";
import response from "../../assets/profile.json";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);
  const imgRef = React.createRef();
  useEffect(() => {
    const getRepoData = () => {
      // fetch("./s/profile.json")
      //   .then(result => {
      //     if (result.ok) {
      //       return result.json();
      //     }
      //     throw result;
      //   })
      //   .then(response => {
      setrepoFunction(response.data.user.pinnedItems.edges);
      // })
      // .catch(function (error) {
      //   console.error(
      //     `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
      //   );
      //   setrepoFunction("Error");
      // });
    };
    getRepoData();
  }, []);
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="mobileapps">
          <h1 className="project-title">Mobile Apps</h1>
          <div className="repo-cards-div-main">
            {mobileApps.projects.map(app => {
              return (
                <div
                  className={
                    isDark ? "dark-mode certificate-card" : "certificate-card"
                  }
                >
                  <div className="mobile-apps-image-div">
                    <img
                      src={app.image}
                      alt={app.projectName || "Card Thumbnail"}
                      className="card-image"
                    ></img>
                  </div>
                  <div className="certificate-detail-div">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {app.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {app.projectDesc}
                    </p>
                  </div>
                  <div className="certificate-card-footer">
                    <span
                      className={
                        isDark ? "dark-mode certificate-tag" : "certificate-tag"
                      }
                      onClick={() =>
                        openUrlInNewTab(
                          app.projectLink.url,
                          app.projectLink.name
                        )
                      }
                    >
                      {app.projectLink.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main" id="mobileapps">
          <h1 className="project-title">Chrome Extensions</h1>
          <div className="repo-cards-div-main">
            {chromeExtensions.projects.map(app => {
              return (
                <div
                  className={
                    isDark ? "dark-mode certificate-card" : "certificate-card"
                  }
                >
                  <div className="mobile-apps-image-div">
                    <img
                      src={app.image}
                      alt={app.projectName || "Card Thumbnail"}
                      className="card-image"
                    ></img>
                  </div>
                  <div className="certificate-detail-div">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {app.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {app.projectDesc}
                    </p>
                  </div>
                  <div className="certificate-card-footer">
                    <span
                      className={
                        isDark ? "dark-mode certificate-tag" : "certificate-tag"
                      }
                      onClick={() =>
                        openUrlInNewTab(
                          app.projectLink.url,
                          app.projectLink.name
                        )
                      }
                    >
                      {app.projectLink.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main" id="mobileapps">
          <h1 className="project-title">NPM Packages</h1>
          <div className="repo-cards-div-main">
            {npmPackages.projects.map(app => {
              return (
                <div
                  className={
                    isDark ? "dark-mode certificate-card" : "certificate-card"
                  }
                >
                  <div className="mobile-apps-image-div">
                    <img
                      src={app.image}
                      alt={app.projectName || "Card Thumbnail"}
                      className="card-image"
                    ></img>
                  </div>
                  <div className="certificate-detail-div">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {app.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {app.projectDesc}
                    </p>
                  </div>
                  <div className="certificate-card-footer">
                    <span
                      className={
                        isDark ? "dark-mode certificate-tag" : "certificate-tag"
                      }
                      onClick={() =>
                        openUrlInNewTab(
                          app.projectLink.url,
                          app.projectLink.name
                        )
                      }
                    >
                      {app.projectLink.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main" id="opensource">
          <h1 className="project-title">My Best Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
