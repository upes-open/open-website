import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from '../teampage/Breadcrumb';
import TeamArea from '../teampage/TeamArea'
import TeamGallery from '../teampage/TeamGallery'

function Team() {
  return (
	<>
	<Header/>
	<main>
	{/* <Breadcrumb/> */}
	<TeamGallery/>
    <TeamArea/>
	</main>
	<Footer/>
	</>
  )
}

export default Team
