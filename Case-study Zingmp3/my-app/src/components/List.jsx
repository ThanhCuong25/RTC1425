import React, { memo } from "react";
import icons from "../ultis/icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from '../store/actions';


const { BsMusicNoteBeamed } = icons
const List = ({ songData, isHideAlbum, isHideNode }) => {

    const dispatch = useDispatch()
    return (
        <div
            className="flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer"
            onClick={() => {
                dispatch(actions.setCurSongId(songData?.encodeId))
                dispatch(actions.play(true))
                dispatch(actions.playAlbum(true))
            }}
        >
            <div className="flex items-center gap-3 flex-1">
              {!isHideNode && <span><BsMusicNoteBeamed /></span>}
                <img src={songData?.thumbnail} alt="thumbnailM" className="w-10 h-10 object-cover rounded-md" />
                <span className="flex flex-col w-full">
                    <span className="text-sm font-semibold">{songData?.title?.length > 30 ? `${songData?.title?.slice(0, 30)}...` : songData?.title}</span>
                    <span className="text-xs opacity-70">{songData?.artistsNames}</span>
                </span>
            </div>
            {!isHideAlbum && <div className="flex-1 flex items-center justify-center">
                {songData?.album?.title?.length > 30 ? `${songData?.title?.slice(0, 30)}...` : songData?.title}
            </div>}
            <div className="flex-1 flex justify-end text-xs opacity-70">
                {moment.utc(songData?.duration * 1000).format('mm:ss')}
            </div>
        </div>
    )
}
export default memo(List)