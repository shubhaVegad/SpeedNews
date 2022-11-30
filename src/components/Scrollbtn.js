import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const Scrollbtn = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button className='topbtn' style={{display: visible ? 'inline' : 'none', borderRadius:'30%', backgroundColor:'3971ff' }}>
        <img style={{display: visible ? 'inline' : 'none', width:'1.2cm', height:'1.2cm', borderRadius:'30%'}} onClick={scrollToTop} className='mysize' src="https://cdn-icons-png.flaticon.com/512/892/892692.png" alt="" />
	</button>
    
);
}

export default Scrollbtn;
