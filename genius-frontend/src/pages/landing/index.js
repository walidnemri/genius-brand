import React, { useState } from 'react'
import image from '../../assets/img1.webp'
import BlackSphere from "../../components/blackSphere";
import './styles.css'

const Landing = () => {
	const [showImg1, setShowImg1] = useState(false)
	//console.log(image)

	const showImage = (date) => {
		console.log('ok')
		setShowImg1(true) 
	}
  return(
    <>
      <div className="container">
				<div className="text">
					<h1>we're comming soon</h1>
					<h1>get notified when site goes live</h1>
					<div className="sphere"><BlackSphere showImage={showImage} showImg1={showImg1}/></div>
				</div>
				<div className="brand">
					<h1>genius brand</h1>
				</div>
				<div className="collection">
					<div>21</div>
				</div>
				<div className="images">
					
					<div className="image img1"><div className={showImg1 ? 'noblur':'blur'}></div></div>
					<div className="image img2"><div className='blur'></div></div>
					<div className="image img3"><div className='blur'></div></div>	
					<div className="image img4"><div className='blur'></div></div>
				</div>
				<div className="background"></div>
      </div>
    </>

  )
}

export default Landing

