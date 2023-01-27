import React from "react";
import HeaderTwo from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RPA from "../../pages/events/RPA";
import Flutter from "../../pages/events/Flutter";
import Dehashed from "../../pages/events/Dehashed";
import Git from "../../pages/events/Git";
import SummerOfCode from "../../pages/events/SummerOfCode";

// import Breadcrumb from '../upcoming/Breadcrumb';

function GameSingle() {
  return (
    <>
      <HeaderTwo />
      <main>
        <RPA />
        {/* <Dehashed />
        <Flutter />
        <Git />
        <SummerOfCode /> */}
      </main>
      <Footer />
    </>
  );
}

export default GameSingle;
