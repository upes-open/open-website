import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import Technova from "./pages/events/Technova";
import OsocRegister from './pages/register/Osoc_register';
import Osoc23 from './pages/events/Osoc23';
import Feedback from './pages/events/Feedback';
import Leader from './pages/events/Leader';
import MediaMorph from './pages/MediaMorph/project';
import Privacy from './pages/MediaMorph/privacy';

import Timeline from './pages/timelinepage/timelinePage';
import Discord from "./pages/discord/Discord";

import RegisterRedirect from "./components/RegisterRedirect";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <ScrollToTopRoute exact path="/">
            <Home />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/about">
            <AboutUs />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/project">
            <Project />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/event">
            <Event />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/team">
            <Team />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/mentor">
            <Mentor />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/alumnus">
            <Alumnus />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/contributor">
            <Contributor />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/contact">
            <Contact />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/rpa">
            <SingleEvent>
              <RPA />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/dehashed">
            <SingleEvent>
              <Dehashed />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/flutter">
            <SingleEvent>
              <Flutter />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/learning">
            <SingleEvent>
              <Learning />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/osoc">
            <SingleEvent>
              <SummerOfCode />
            </SingleEvent>
          </ScrollToTopRoute>
          <Route exact path="/register">
            <RegisterRedirect />
          </Route>
          <ScrollToTopRoute exact path="/codeyourfuture">
            <SingleEvent>
              <CodeYourFuture />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/Technova">
            <SingleEvent>
              <Technova />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/Osoc_register">
            <SingleEvent>
              <OsocRegister />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/UpcomingDetailedProjectExpo">
            <SingleEvent>
              <UpcomingDetailedProjectExpo />
            </SingleEvent>
          </ScrollToTopRoute>

          <ScrollToTopRoute exact path="/timeline">
            <SingleEvent>
              <Timeline />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/api">
            <SingleEvent>
              <Api />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/anniversary">
            <SingleEvent>
              <Anniversary />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/leaderboard">
            <SingleEvent>
              <Leader />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/Osoc23">
            <SingleEvent>
              <Osoc23 />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/Feedback">
            <SingleEvent>
              <Feedback />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/MediaMorph">
            <SingleEvent>
              <MediaMorph />
            </SingleEvent>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact path="/privacy">
            <SingleEvent>
              <Privacy />
            </SingleEvent>
          </ScrollToTopRoute>
          <Route exact path="/discord">
            <Discord />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
