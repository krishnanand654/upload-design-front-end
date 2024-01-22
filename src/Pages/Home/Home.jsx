import DragDrop from '../../Components/DragDrop/DragDrop';
import './home.css';
import Uploadx from '../../Components/Upload/Upload';
import Navbarx from '../../Components/Navbarx/Navbarx';
export const Home = () => {
    return (
        <>
            <div className=''>
                {/* <h1 className='text-white font-medium text-[60px]  '>Ride Safe</h1> */}
                <div className='section'>
                    <div className='card'>
                        <div className='p-4 '>
                            <DragDrop />
                            <div className=' flex justify-center mt-10'>
                                <Uploadx />
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

