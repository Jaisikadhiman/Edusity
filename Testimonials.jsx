import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
const Testimonials = () => {
     const slider = useRef();
     let tx = 0;
    const backward = () => {
        if(tx < -50){
            tx += 25;
           }
  
   slider.current.style.transform =  `translateX(${tx}%)`
    }
    const forward = () => {
        alert("hello")
        console.log(tx+"%")
        if(tx > -50){
            tx -= 25;
           }
           console.log(tx+"%")
           slider.current.style.transform =  `translateX(${tx}%)`
    }
    return (
        <div className='testimonial'>

            <div className="image">
                <button className='btn back' onClick={backward}><img src={back} alt="" /></button>
                <button className='btn next' onClick={forward}> <img src={next} alt="" /></button>
            </div>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div className='main'>
                                    <h3>Williom Jackson 1</h3>
                                    <span>Edusity,USA</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi saepe adipisci facilis consequuntur iste doloremque pariatur. Laudantium, molestias ab tenetur eius ut praesentium provident nam quia officia, fugit nobis soluta?
                                </p>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div className='main'>
                                    <h3>Williom Jackson 2</h3>
                                    <span>Edusity,USA</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi saepe adipisci facilis consequuntur iste doloremque pariatur. Laudantium, molestias ab tenetur eius ut praesentium provident nam quia officia, fugit nobis soluta?
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="" />
                                <div className='main'>
                                    <h3>Williom Jackson 3</h3>
                                    <span>Edusity,USA</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi saepe adipisci facilis consequuntur iste doloremque pariatur. Laudantium, molestias ab tenetur eius ut praesentium provident nam quia officia, fugit nobis soluta?
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Williom Jackson 4</h3>
                                    <span>Edusity,USA</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi saepe adipisci facilis consequuntur iste doloremque pariatur. Laudantium, molestias ab tenetur eius ut praesentium provident nam quia officia, fugit nobis soluta?
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
