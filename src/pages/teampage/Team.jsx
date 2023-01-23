import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from '../teampage/Breadcrumb';
import TeamMem from '../teampage/TeamMem'
import TeamArea from '../teampage/TeamArea'
import TeamGallery from '../teampage/TeamGallery'

function AboutUs() {
  return (
	<>
	<Header/>
	<main>
	<Breadcrumb/>
	{/* <TeamGallery/> */}
    <TeamArea/>
	{/* <TeamMem/> */}
	
	</main>
	<Footer/>
	</>
  )
}

export default AboutUs
