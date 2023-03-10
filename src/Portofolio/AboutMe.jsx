import React from "react";
import { htmlLogo, cssLogo, javascriptLogo, bootstrapLogo, nodejsLogo, reactLogo } from "../assets/index"; 

function AboutMe() {
  return (
    <div className="aboutContainer text-center m-5 p-5">
      <h2>About</h2><hr />
					<p>Hello, I am Bangkit Setio Raharjo, usually called iyo.<br />
					I was born in Bandung on May 21, 1998, I have a dream to become a Fullstack Website Developer at the international level. With the incremental development method, I am able to create websites with various approaches according to the context and needs of the client, I am ready to contribute to an organization or startup in achieving it's vision and mission.</p>
          <br />

      <h2>Skills</h2><hr />
      <div className="container-fluid">
        <p>As a Junior Fullstack Web Developer, I have mastered several skills that I often use when building websites:</p>
        <div id="skills" className="d-flex flex-wrap justify-content-center">
          <span><img src={htmlLogo}  alt="html-logo.png"></img>HTML5</span>
          <span><img src={cssLogo}  alt="css-logo.png"></img>CSS3</span>
          <span><img src={javascriptLogo} alt="javascript-logo.png"></img>Javascript</span>
          <span><img src={bootstrapLogo} alt="bootstrap-logo.png"></img>Bootstrap</span>
          <span><img src={nodejsLogo} alt="nodejs-logo.png"></img>NodeJs</span>
          <span><img src={reactLogo} alt="react-logo.png"></img>React</span>
        </div>
      </div>
      
    </div>

  );
}

export default AboutMe;
