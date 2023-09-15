import actionTypes from "../actions/actionTypes";

const initState = {
    banner:null,
    friday:null,
    newEveryday:null,
    top100: null,
    xone:null,
    newMusic:null,
    isLoading: false,
    newRelease: null,
    weekChart: null,
    favoritedArtist: null,
    chart: null,
    rank: null,
    singers: null
}
const appReducer = (state=initState, action)=>{
    switch (action.type) {
        case actionTypes.GET_HOME:
         return {
            ...state,
            banner: action.homeData?.find(item=> item.sectionId === 'hSlider')?.items || null,
            friday: action.homeData?.find(item=> item.sectionId === 'hEditorTheme2') || null,
            newEveryday: action.homeData?.find(item=> item.sectionId === 'hEditorTheme') || null,
            top100: action.homeData?.find(item=> item.sectionId === 'h100') || null,
            xone: action.homeData?.find(item=> item.sectionId === 'hLiveRadio') || null,
            newMusic: {...action.homeData?.find(item=> item.sectionId === 'hAlbum'), title:'Nhạc mới'} || null,
            newRelease: action.homeData?.find(item=> item.sectionType === 'new-release') || null,
            weekChart: action.homeData?.find(item=> item.sectionType === 'weekChart')?.items || null,
            favoritedArtist: action.homeData?.find(item=> item.sectionId === 'hArtistTheme') || null,
            chart: action.homeData?.find(item=> item.sectionId === 'hZC')?.chart || null,
            rank: action.homeData?.find(item=> item.sectionId === 'hZC')?.items || null,
            singers: action.homeData?.find(item=> item.sectionType === 'artistSpotlight')?.items || null,
         }
         case actionTypes.LOADING:
            return {
                ...state,
                isLoading: action.flag
            }
    
        default:
            return state
    }
}
export default appReducer