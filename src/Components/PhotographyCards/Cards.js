import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              // label=''
              // path='/services'
            />
            <CardItem
              src='images/img2.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              label='Luxury'
              // path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              label='Mystery'
              // path='/services'
            />
            <CardItem
              src='images/img4.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              label='Adventure'
              // path='/products'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img11.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              label='Adventure'
              // path='/services'
            />
            <CardItem
              src='images/img6.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              label='Luxury'
              // path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img7.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              label='Mystery'
              // path='/services'
            />
            <CardItem
              src='images/img8.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              label='Adventure'
              // path='/products'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img9.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              label='Adventure'
              // path='/services'
            />
            <CardItem
              src='images/img10.jpg'
              text='Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
              label='Luxury'
              // path='/services'
            />
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default Cards;