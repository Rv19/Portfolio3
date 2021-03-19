import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';

class Resume extends Component{
    render(){
        return(
            
            <div class="container" style={{width: '100%', margin: 'auto'}}>
            <div class="wrapper" style={{width: '100%', margin: 'auto'}}>
		<div class="resume" style={{width: '100%', margin: 'auto'}}>
			<div class="left" >
				<div class="img_holder">
					<img src="Rohit.png" alt="picture"/>
				</div>
				<div class="contact_wrap pb">
					<div class="title">
						Contact
					</div>
					<div class="contact">
						<ul>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-mobile" aria-hidden="true"></i></div>
									<div class="text">8428250621</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
									<div class="text">Rohityadavrv19@gmail.com</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-sitemap" aria-hidden="true"></i></div>
									<div class="text">tny.sh/Rohityadav</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-map-signs" aria-hidden="true"></i></div>
									<div class="text">236-A, Shyam Enclave, Jaipur, Rajasthan</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="skills_wrap pb">
					<div class="title">
						Skills
					</div>
					<div class="skills">
						<ul>
							<li>
								<div class="li_wrap">
									<div class="icon"><i className="fa fa-html5"></i></div>
									<div class="text">HTML</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-css3"></i></div>
									<div class="text">CSS</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-jsfiddle"></i></div>
									<div class="text">Javascript</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-globe"></i></div>
									<div class="text">React.JS</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="hobbies_wrap pb">
					<div class="title">
						hobbies
					</div>
					<div class="hobbies">
						<ul>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-book"></i></div>
									<div class="text">Reading</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-music"></i></div>
									<div class="text">Music</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-gamepad"></i></div>
									<div class="text">Gaming</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fa fa-tree"></i></div>
									<div class="text">Gardening</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="header">
					<div class="name_role">
                        <br/>
						<div class="name">
							Rohit Yadav
						</div><br/><br/>

						<div class="role">
							Full Stack Developer
						</div>
					</div>
					<div class="about">
						A Developer who started doing Development from Android Development and then shifted towards the web Development.I created many applications all for Web and Mobile both.I love to take part in hackathons and also worked with Publicis Sapient and enhanced my technical Knowledge</div>
				</div>
				<div class="right_inner">
					<div class="exp">
						<div class="title">
							PROJECTS
						</div>
						<div class="exp_wrap">
							<ul>
								<li>
								<div class="li_wrap">
										<div class="info">
											<p class="info_title">
												Helping Hands : Android Applicaton for old and physically disabled
											</p>
										</div>
									</div>
								</li>
								<li>
                                <div class="li_wrap">
										<div class="info">
											<p class="info_title">
												PaperMap : Online Study Material Platform
											</p>
										</div>
									</div>
								</li>
								<li>
									<div class="li_wrap">
										<div class="info">
											<p class="info_title">
												Agro-Aid : App for Supply Chain Management
											</p>
										</div>
									</div>
								</li>
                                <li>
									<div class="li_wrap">
										<div class="info">
											<p class="info_title">
											Location Sender
                                            </p>
										</div>
									</div>
								</li>
                                <li>
									<div class="li_wrap">
										<div class="info">
											<p class="info_title">
												SRMBLOG
											</p>
										</div>
									</div>
								</li>
                                <li>
									<div class="li_wrap">
										<div class="info">
											<p class="info_title">
											Musicplayer	</p>
										</div>
									</div>
								</li>
                                <li>
									<div class="li_wrap">
										<div class="info">
											<p class="info_title">
											Flashchat
                                            </p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="education">
						<div class="title">
							Education
						</div>
						<div class="education_wrap">
							<ul>
								<li>
									<div class="li_wrap">
										<div class="date">
											2016 - 2020
										</div>
										<div class="info">
											<p class="info_title">
												B.Tech
											</p>
											<p class="info_com">
												SRM IST
											</p>
											<p class="info_cont">
												91.2%
											</p>
										</div>
									</div>
								</li>
								<li>
									<div class="li_wrap">
										<div class="date">
										2015
										</div>
										<div class="info">
											<p class="info_title">
												Higher Education
											</p>
											<p class="info_com">
												Tagore Public School
											</p>
											<p class="info_cont">
												86.7%
											</p>
										</div>
									</div>
								</li>
								<li>
									<div class="li_wrap">
										<div class="date">
											2013
										</div>
										<div class="info">
											<p class="info_title">
												
                                            Senior Secondary
											</p>
											<p class="info_com">
												Tagore Public School
											</p>
											<p class="info_cont">
												9.4 cgpa	</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
            </div>
         
          
        )
    }
}
export default Resume;

