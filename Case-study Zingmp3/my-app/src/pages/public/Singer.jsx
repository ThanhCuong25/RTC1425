import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetArtist } from "../../apis";
import icons from "../../ultis/icons";

const { AiOutlineUserAdd } = icons
const Singer = () => {
    const { singer } = useParams
    // console.log(singer)
    const [artistData, setArtistData] = useState(null)
    useEffect(() => {
        const fetchArtistData = async () => {
            const res = await apiGetArtist(singer)
            if (res.data.err === 0) {
                setArtistData(res.data.data)
            }
        }
        singer && fetchArtistData()
    }, [singer]);
    return (
        <div className="flex flex-col w-full ">
            <div className="relative">
                <img src={artistData?.cover} alt="background" className="h-[400px] object-cover w-full" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black text-white to-transparent px-[60px]">
                    <div className="absolute bottom-0 pb-6 px-[40px]">
                        <div className="flex gap-8 items-center">
                            <h1 className='text-[60px] font-bold'>{artistData?.name}</h1>
                            <span>Play</span>
                        </div>
                        <div>
                            <span>{`${artistData?.totalFollow} người quan tâm`}</span>
                            <button
                                type="button"
                                className="bg-main-500 px-4 py-1 text-white text-sm rounded-l-full rounded-r-full flex items-center justify-center gap-1"
                            >
                                <span><AiOutlineUserAdd /></span>
                                <span className="text-xs opacity-70">QUAN TÂM </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Singer