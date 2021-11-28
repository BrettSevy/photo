import React from 'react';
// import  { motion } from 'framer-motion';
import './Modal.css'

const Modal = ({ selectedImg , setSelectedImg }) => {

    const handleClick =(e) => {
        if(e.target.classList.contains('backdrop')){
        setSelectedImg(null);
    }
}

    return (
        <div className='backdrop' onClick= {handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
            <img src={selectedImg} alt='enlarged pic' 
            inital={{ y:'-100vh'}}
            animate={{y: 0 }}
            />
        </div>
    )
}

export default Modal;