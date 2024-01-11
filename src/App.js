import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/homes/Home";
import AboutUs from "./pages/aboutuspage/AboutUs";
import Project from "./pages/projectpage/Project";
import Event from "./pages/eventpage/Event";
import Team from "./pages/teampage/Team";
import Mentor from "./pages/mentorpage/Mentor";
import Alumnus from "./pages/aluminipage/Alumini";
import Contributor from "./pages/contributorspage/Contributors";
import Contact from "./pages/contact/Contact";
import Api from "./pages/events/Api";
import Anniversary from "./pages/events/Anniversary";

import ScrollToTopRoute from "./components/scrolltotop/ScrollToTopRoute";

import SingleEvent from "./pages/events/SingleEvent";

import UpcomingDetailedProjectExpo from "./pages/events/upcomingDetailed/UpcomingDetailedProjectExpo";
import CodeYourFuture from "./pages/events/CodeYourFuture";
import RPA from "./pages/events/RPA";
import Dehashed from "./pages/events/Dehashed";
import Flutter from "./pages/events/Flutter";
import SummerOfCode from "./pages/events/SummerOfCode";
import Learning from "./pages/events/Learning";
import Register from "./pages/register/Register";
import Technova from "./pages/events/Technova";
import OsocRegister from './pages/register/Osoc_register';
import Osoc23 from './pages/events/Osoc23';
import Feedback from './pages/events/Feedback';
import Leader from './pages/events/Leader';
import MediaMorph from './pages/MediaMorph/project';
import Privacy from './pages/MediaMorph/privacy';

import Timeline from './pages/timelinepage/timelinePage'

// import Loader from "react-js-loader";

function App() {
  //  const [loading,setLoading] = useState(false);

  //  useEffect(()=>{
  //   setLoading(true)
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },8000)
  //  },[])
  //  {
  //   loading ?(
  //     <MoonLoader color={color} loading={loading} css={override} size={150} />
  //   )

  // }

  return (
    <div className="App">
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path="/">
            <Home />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/about">
            <AboutUs />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/project">
            <Project />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/event">
            <Event />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/team">
            <Team />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/mentor">
            <Mentor />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/alumnus">
            <Alumnus />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/contributor">
            <Contributor />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/contact">
            <Contact />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/rpa">
            <SingleEvent>
              <RPA />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/dehashed">
            <SingleEvent>
              <Dehashed />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/flutter">
            <SingleEvent>
              <Flutter />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/learning">
            <SingleEvent>
              <Learning />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/osoc">
            <SingleEvent>
              <SummerOfCode />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/register">
            <Register />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/codeyourfuture">
            <SingleEvent>
              <CodeYourFuture />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/Technova">
            <SingleEvent> 
            <Technova />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/Osoc_register">
            <SingleEvent> 
            <OsocRegister/>
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/UpcomingDetailedProjectExpo">
            <SingleEvent>
              <UpcomingDetailedProjectExpo />
            </SingleEvent>
          </ScrollToTopRoute>

          <ScrollToTopRoute exact={true} path="/timeline">
            <SingleEvent>
              <Timeline />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/api">
          <SingleEvent>
            <Api />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/anniversary">
          <SingleEvent>
            <Anniversary />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/leaderboard">
            <SingleEvent> 
            <Leader/>
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/Osoc23">
            <SingleEvent> 
            <Osoc23/>
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/Feedback">
            <SingleEvent> 
            <Feedback/>
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/MediaMorph">
            <SingleEvent> 
            <MediaMorph/>
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/privacy">
            <SingleEvent> 
            <Privacy/>
            </SingleEvent>
          </ScrollToTopRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
