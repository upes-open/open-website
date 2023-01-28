import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';
import LatestMatch from './LatestProjects'
import DeployProjects from './DeployedProjects'


function Project() {
  return (
	<>
	<Header/>
	<main>
		<br /><br /><br /><br />
	{/* <Breadcrumb/> */}
    <DeployProjects />
	<LatestMatch/>	
	</main>
	<Footer/>
	</>
  )
}

export default Project
