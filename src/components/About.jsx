
const About = () => {

    // const [myStyle, setmyStyle] = useState({
    //     color : "black",
    //     backgroundColor: "white"
    // });

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color : "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable White Mode");
    //     }else{
    //         setmyStyle({
    //             color : "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

  return (
    <div className="container">
      <h2>Overview</h2>
      <p>🖥️ Compatible with your device ✅</p>
      <p>Various text utilities to help with daily tasks and improve your productivity.</p>
      <p>🚀 A quick and handy shortcut for various free text utilities to help with daily tasks and improve your productivity.</p>  
      <p>⚡Text-Utils.com provides tools for formatting source code, converters, tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others.</p>
      <p>🔥 See some of our text utilities below:</p>

      <ul>
        <li>Remove special characters</li>
        <li>Remove accents</li>
        <li>Remove line breaks</li>
        <li>Remove duplicate lines</li>
        <li>Remove lines containing</li>
        <li>Extract emails from text</li>
        <li>Extract numbers from text</li>
        <li>Extract URLs from text</li>
        <li>Extract IP addresses from text</li>
        <li>Extract hashtags from text</li>
      </ul> 

    </div>
  );
};

export default About;
