import React, { useContext, useState } from "react";
import bodyImage from "../images/bodyImage.jpg";
import { ThemeContext } from "./LandingPage";
const LandingBody = () => {
  const textDetail = useContext(ThemeContext);
  const initialText = `"It was so great to hear from you today and it was such weird timing,"
  he said. "This is going to sound funny and a little strange, but you
  were in a dream I had just a couple of days ago. I'd love to get
  together and tell you about it if you're up for a cup of coffee," he
  continued, laying the trap he'd been planning for years.`;
  const [textContent, setTextContent] = useState(initialText);
  return (
    <div
      style={{
        margin: "1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "black",
      }}
    >
      <div className="imagediv">
        <img src={bodyImage} alt="bodyImage" width="500px"></img>
      </div>
      <div className="randomText" style={{ padding: "1em" }}>
        <p
          onClick={() => setTextContent(textDetail.textDetails)}
          onDoubleClick={() => setTextContent(initialText)}
        >
          {textContent}
        </p>
      </div>
    </div>
  );
};

export default LandingBody;
