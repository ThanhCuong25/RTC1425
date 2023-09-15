import React, { useEffect } from 'react';
import { Sliders, Section, NewRelease, ChartSection } from '../../components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Home = () => {
    const { friday, newEveryday, top100, xone, newMusic, weekChart, favoritedArtist, singers } = useSelector(state => state.app)
 console.log(singers)
    return (
        <div className='overflow-y-auto w-full'>
            <div>
        
                <Sliders />
                <Section data={friday} />
                <Section data={newEveryday} />
                <NewRelease />
                <Section data={top100} />
                <ChartSection/>
                <div className='flex items-center px-[43px] w-full mt-12'>
                    {weekChart?.map(item => (
                        <Link to={item?.link?.split('.')[0]} key={item.link} className='flex-1 px-4' >
                            <img src={item.cover} alt="cover" className='w-full object-cover rounded-md' />
                        </Link>
                    ))}
                </div>
                <div className='mt-12 px-[59px] flex flex-col gap-5'>
                    <div className="flex items-center justify-between">
                        <h3 className="text-[20px] font-bold">{favoritedArtist?.title}</h3>
                        <span className="text-xs">TẤT CẢ</span>
                    </div>
                    <div className='flex mx-[-16px]'>
                        {favoritedArtist?.items?.filter((i, index) => index <= 4).map(singer => {
                            return (
                                <div key={singer.encodeId} className='flex-1 px-4 relative'>
                                    <img src={singer.thumbnail} alt='singer' className='w-full object-contain rounded-md' />
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <Section data={xone} />
                <Section data={newMusic} />
                
        
                <div className='w-full h-[500px]'></div>
            </div>
        </div>
    )
}
export default Home