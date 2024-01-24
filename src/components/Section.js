import illustrasi from '../assets/images/illustrasi.png'
import fly from '../assets/images/fly.svg'
import hotel from '../assets/images/hotel.svg'
import group from '../assets/images/group.svg'

function Section() {
    return (
        <div className='h-[594px] mt-20 w-full  grid grid-cols-2 gap-[25px]' >
            <div>
                <img src={illustrasi} alt="" />
            </div>
            <div className='mt-10 ml-8'>
                <p className="text-[40px] font-bold leading-[50px]">Why Choose Us</p>
                <p className='mt-4 mb-6 w-[400px]'>Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
                <div>
                    <div className='bg-white shadow-md mb-5 h-[80px] w-[450px] flex flex-nowrap items-center rounded-xl'>
                        <img src={fly} className='w-[30px] m-5' alt="" />
                        <div>
                            <p className='font-bold'>Flight Ticket</p>
                            <p className='text-[14px]'>Vitae donec pellentesque a aliquam et ultricies auctor. </p>
                        </div>
                    </div>
                    <div className='  mb-5 h-[80px] w-[450px] flex flex-nowrap items-center'>
                        <img src={hotel} className='w-[30px] m-5' alt="" />
                        <div>
                            <p className='font-bold'>Accomodation</p>
                            <p className='text-[14px]'>Vitae donec pellentesque a aliquam et ultricies auctor. </p>
                        </div>
                    </div>
                    <div className=' mb-5 h-[80px] w-[450px] flex flex-nowrap items-center '>
                        <img src={group} className='w-[30px] m-5' alt="" />
                        <div>
                            <p className='font-bold'>Packaged Tour</p>
                            <p className='text-[14px]'>Vitae donec pellentesque a aliquam et ultricies auctor.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;