import { Description, Image, LocalOffer,MoreVert,Search} from '@mui/icons-material'
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

                        <div className='flex items-center mr-[20px]'>
                            <Description/>
                            <Link to="/news">News</Link>
                        </div>

                        <div className='flex items-center mr-[20px]'>
                            <Image/>
                            <Link to="/images">Images</Link>
                        </div>

                        <div className='flex items-center mr-[20px]'>
                            <LocalOffer/>
                            <Link to="/shopping">Shopping</Link>
                        </div>

                        <div className='flex items-center mr-[20px]'>
                            <MoreVert/>
                            <Link to="/more">More</Link>
                        </div>
                    </div>

                    <div className='flex ml-[80px]'>
                        <div className='flex items-center mr-[20px]'>
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {term && (
            <div className='searchpage_results'>
                <p className='searchpage_resultcount'>
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                </p>
                {data?.items.map(item => (
                    <div className='searchpage_result'>
                        <a href={item.link}>

                            {item.displayLink}
                        </a>
                        <a className='searchpage_resultTitle' href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className='searchpage_resultsnippet'>
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