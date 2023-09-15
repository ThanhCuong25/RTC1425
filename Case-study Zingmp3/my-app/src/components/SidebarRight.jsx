import React, { useEffect, useState } from "react";
import icons from '../ultis/icons'
import { useSelector } from "react-redux";
import { SongItem } from "./"
import { apiGetDetaiPlaylist } from "../apis";

const { ImBin } = icons

const SidebarRight = () => {

    const [isRecent, setIsRecent] = useState(false)
    const [playlist, setPlaylist] = useState()
    const { curSongData, curAlbumId } = useSelector(state => state.music)

    useEffect(() => {
        const fetchDetailPlaylist = async () => {
            const response = await apiGetDetaiPlaylist(curAlbumId)
            if (response.data?.err === 0) setPlaylist(response.data.data?.song.items)
        }
        if (curAlbumId) fetchDetailPlaylist()
    }, [curAlbumId])

    return (
        <div className="flex flex-col text-xs w-full">
            <div className="h-[70px] w-full flex-none py-[14px] px-2 gap-8 flex justify-between items-center">
                <div className="flex flex-auto justify-center bg-main-200 rounded-l-full rounded-r-full py-[6px] px-[6px] cursor-pointer">
                    <span
                        className={`py-[5px] ${!isRecent && 'bg-main-100'}  flex-1 flex justify-center rounded-l-full rounded-r-full items-center`}
                        onClick={() => setIsRecent(prev => !prev)}
                    >
                        Danh sách phát
                    </span>
                    <span
                        onClick={() => setIsRecent(prev => !prev)}
                        className={`py-[5px] ${isRecent && 'bg-main-100'}  flex-1 flex justify-center rounded-l-full rounded-r-full items-center`}
                    >
                        Nghe gần đây
                    </span>
                </div>
                <span className="p-2 rounded-full cursor-pointer hover:bg-main-100"><ImBin size={14} /></span>
            </div>
            <div className="w-full flex-col flex px-2">
                <SongItem
                    thumbnail={curSongData?.thumbnail}
                    title={curSongData?.title}
                    artists={curSongData?.artistsNames}
                    sid={curSongData?.encodeId}
                    size='w-[40px] h-[40px]'
                    style='bg-main-500 text-white'
                />
                <div className="flex flex-col text-black pt-[15px] px-2 pb-[5px]">
                    <span className=" text-sm font-bold">Tiếp theo</span>
                    <span className="opacity-70 text-xs flex gap-1">
                        <span>Từ playlist</span>
                        <span className="font-semibold text-main-500">{curSongData?.album?.title}</span>
                    </span>
                </div>
                {playlist && <div className="flex flex-col">
                    {playlist?.map(item => (
                        <SongItem
                        key={item.encodeId}
                            thumbnail={item?.thumbnail}
                            title={item?.title}
                            artists={item?.artistsNames}
                            sid={item?.encodeId}
                        />
                    ))}
                </div>}
            </div>
        </div>
    )
}
export default SidebarRight