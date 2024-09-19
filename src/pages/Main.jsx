import MainFavorites from '../components/mainFavorites'
import MainHeader from '../components/mainHeader'
import Category from "../components/category"



export default function Main () {
    return (
        <>
        <div className='w-screen h-screen bg-[#111015]'>
            <MainHeader/>
            <MainFavorites />
            <Category/>
        </div>
        
        </>
    )
}