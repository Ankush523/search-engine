import React from 'react'
import { Link } from 'react-router-dom' 
const Home = () => {
  return (
    <div className='home'>

      <div className='home_head'>
            <div className='home_lefthead'>
                <Link to="/about">About</Link>
                <Link to="/store">Store</Link>
            </div>

            <div className='home_righthead'>
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
            </div>
      </div>

      <div className='home_body'>

      </div>

    </div>
  )
}

export default Home