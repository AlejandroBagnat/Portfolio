import { makeStyles } from "@material-ui/core";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MyWork from "./Components/MyWork";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";


function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <About title="About me" id="about" dark={true}/>
      <Skills title="Linea de tiempo" id="skills" dark={false}/>
      <MyWork title="My work" id="work" dark={true}/>
      <Contact title="Get in touch" id="contact" dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme)=>({
  root: {

  }
}))

export default App;
