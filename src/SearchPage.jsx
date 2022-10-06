import { Description, Image, LocalOffer, More, MoreVert, PlayArrow, PlayArrowOutlined, PlayCircleFilledOutlined, Search, VideoCall, VideoCameraBack } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Searching from './components/Searching'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
const SearchPage = () => {
    const [{term}, dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)

    console.log(data)
  return (
    <div className='searchpage'>
        <div className='flex sticky top-0 bg-white z-100 items-start p-[30px] border-b'>
            <Link to="/">
                <img className='object-contain h-[50px] mr-[50px]' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
            </Link>

            <div className='searchpage_headerbody'>
                <Searching hideButtons/>

                <div className='flex items-center text-slate-400'>
                    <div className='flex'>
                        <div className='flex items-center mr-[20px]'>
                            <Search/>
                            <Link to="/all">All</Link>
                        </div>

                        <div className='searchpage_option'>
                            <Description/>
                            <Link to="/news">News</Link>
                        </div>

                        <div className='searchpage_option'>
                            <Image/>
                            <Link to="/images">Images</Link>
                        </div>

                        <div className='searchpage_option'>
                            <LocalOffer/>
                            <Link to="/shopping">Shopping</Link>
                        </div>

                        <div className='searchpage_option'>
                            <MoreVert/>
                            <Link to="/more">More</Link>
                        </div>
                    </div>

                    <div className='flex ml-[80px]'>
                        <div className='searchpage_option'>
                            <Link to="/settings">Settings</Link>
                        </div>

                        <div className='searchpage_option'>
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {term && (
            <div className='max-w-2xl mt-[20px] ml-[240px] mb-[100px]'>
                <p className='text-slate-300 text-[14px]'>
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                </p>
                {data?.items.map(item => (
                    <div className='m-[40px]'>
                        <a href={item.link}>

                            {item.displayLink}
                        </a>
                        <a className='no-underline hover:underline' href={item.link}>
                            <h2 className='font-medium'>{item.title}</h2>
                        </a>
                        <p className='mt-[10px]'>
                            {item.snippet}
                        </p>

                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default SearchPage