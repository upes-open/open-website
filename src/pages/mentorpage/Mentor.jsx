import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MentorArea from '../mentorpage/MentorArea'

function Mentor() {
  return (
	<>
	<Header/>
	<main>
    <MentorArea/>
	</main>
	<Footer/>
	</>
  )
}

export default Mentor
