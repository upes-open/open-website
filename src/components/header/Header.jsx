import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import ScrollToTop from "react-scroll-to-top";
import logo from "../../assets/img/logo.png";



export default function Header() {

  
  useEffect(()=>{
    //SubMenu Dropdown Toggle
      if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

      }

      //Mobile Nav Hide Show
      if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.menu-area .push-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
          $(this).toggleClass('open');
          $(this).prev('ul').slideToggle(500);
        });


        $('.menu-backdrop, .mobile-menu .close-btn').click (()=>{
          $('body').removeClass('mobile-menu-visible');
        })


        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });
      }
      

  },[]);

  useEffect(()=>{
    
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $('.scroll-to-target').removeClass('open');
    
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $('.scroll-to-target').addClass('open');
      }
    });
    
  },[])


  
  return (
	 <header> 
     <ScrollToTop smooth top="500" color="#ffff"/>
          <div className="header-top-area s-header-top-area d-none d-lg-block">
            <div className="container-fluid s-container-full-padding">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="header-top-offer">
                    <p>Aware. Adopt. Contribute.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header-top-right">
                    <div className="header-social">
                      <ul>
                        <li><a href="https://twitter.com/UpesOpen"><span className="fab fa-twitter" /></a></li>
                        <li><a href="https://discord.gg/FyFgtY27Wf"><span className="fab fa-discord"/></a></li>
                        <li><a href="https://github.com/upes-open"><span className="fab fa-github"/></a></li>
                        <li><a href="https://www.instagram.com/upesopen_/"><span className="fab fa-instagram" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCxdpyRSNdAKQ6R6Jpv_-nKQ"><span className="fab fa-youtube" /></a></li>
                        <li><a href="https://www.linkedin.com/company/open-community/mycompany/"><span className="fab fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="header-top-action">
                      <ul>
                        <li>
                          <div className="header-top-mail">
                            <p><span>|</span><i className="far fa-envelope" /><Link to="/mailto:info@gmail.com">upesopen@gmail.com</Link></p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="sticky-header" className="transparent-header menu-area">
            <div className="container-fluid s-container-full-padding">
              <div className="row">
                <div className="col-12">
                <div className="mobile-nav-toggler two"><i className="fas fa-bars" /></div>
                  <div className="main-menu  menu-style-two">
                    <nav>
                      <div className="logo">
                        <Link to="/"><img src={logo} height="80px" alt="Logo" /></Link>
                      </div>
                      <div className="navbar-wrap push-menu d-none d-lg-flex">
                        <ul className="navigation">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About Us</Link></li>
                          <li><Link to="/project">Our Projects</Link></li>
                          <li><Link to="/event">Our Events</Link></li>
                          <li className='menu-item-has-children'><Link to="#">Our Team</Link>
                            <ul className="submenu">
                            <li><Link to="/mentor">Mentors</Link></li>
                              <li><Link to="/team">Core Members</Link></li>
                              <li><Link to="/contributor">Contributors</Link></li>
                              <li><Link to="/alumnus">alumnus</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                
                 <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn"><i className="fas fa-times" /></div>
                    <div className="nav-logo"><Link to="/"><img src={logo} alt="" title='true' /></Link>
                    </div>
                    <div className="menu-outer">
                  
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li><a href="https://twitter.com/UpesOpen"><span className="fab fa-twitter" /></a></li>
                        <li><a href="https://www.instagram.com/upesopen_/"><span className="fab fa-instagram" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCxdpyRSNdAKQ6R6Jpv_-nKQ"><span className="fab fa-youtube" /></a></li>
                        <li><a href="https://www.linkedin.com/company/open-community/mycompany/"><span className="fab fa-linkedin" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
              </div>
                {/* Modal Search */}
                <div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <form>
                        <input type="text" placeholder="Search here..." />
                        <button><i className="fa fa-search" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  )
}
