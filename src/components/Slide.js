import rectangle1 from '../assets/images/rectangle1.png'
import rectangle2 from '../assets/images/rectangle 2.png'
import rectangle3 from '../assets/images/Rectangle 9.png'
import rectangle4 from '../assets/images/rectangle4.png'

import locationicon from '../assets/images/Location.png'

function Slide(props) {
    return (
        <div className="slide">
            <div className="">
                <h5 className="text-[30px] leading-[50px]">Popular Destinations</h5>
                <p>Vacations to make your experience enjoyable in Indonesia!</p>
            </div>
            <div className="grid grid-cols-4 mt-10 gap-[30px]">
                <div className="rounded-2xl">
                    <img src={rectangle1} className='w-full' alt="" />
                    <div className="pl-5 flex flex-nowrap">
                        <img src={locationicon} alt="" className='w-[8px] h-[10px] mt-1 mr-2' />
                        <p className='text-[12px]'>Manggarai Barat</p>
                    </div>
                    <div className="pl-5">
                        <p className="text-[18px] font-bold">Flores Road Trip 3D2N</p>
                        <p className=" text-zinc-600">3 Days</p>
                        <p className="text-cyan-500 text-[14px] pt-1 mb-4">Rp 6.705.000 /orang</p>
                    </div>
                </div>
                <div className=" rounded-2xl">
                    <img src={rectangle2} className='w-full' alt="" />
                    <div className="pl-5 flex flex-nowrap">
                        <img src={locationicon} alt="" className='w-[8px] h-[10px] mt-1 mr-2' />
                        <p className='text-[12px]'>Bogor</p>
                    </div>
                    <div className="pl-5">
                        <p className="text-[18px] font-bold">Forrester Glamping Co Bogor</p>
                        <p className=" text-zinc-600">1 Days</p>
                        <p className="text-cyan-500 text-[14px] pt-1 mb-4">Rp 1.205.000 /malam</p>
                    </div>
                </div>
                <div className=" rounded-2xl">
                    <img src={rectangle3} className='w-full' alt="" />
                    <div className="pl-5 flex flex-nowrap">
                        <img src={locationicon} alt="" className='w-[8px] h-[10px] mt-1 mr-2' />
                        <p className='text-[12px]'>Jakarta</p>
                    </div>
                    <div className="pl-5">
                        <p className="text-[18px] font-bold">Paket Tiket Pesawat <br></br>Jakarta Bali</p>
                        <p className="text-cyan-500 text-[14px] pt-1 mb-4">Rp 605.000 /person</p>
                    </div>
                </div>
                <div className=" rounded-2xl">
                    <img src={rectangle4} className='w-full' alt="" />
                    <div className="pl-5 flex flex-nowrap">
                        <img src={locationicon} alt="" className='w-[8px] h-[10px] mt-1 mr-2' />
                        <p className='text-[12px]'>Kota Semarang</p>
                    </div>
                    <div className="pl-5">
                        <p className="text-[18px] font-bold">Desa Wisata Kandri</p>
                        <p className=" text-zinc-600">14 Days</p>
                        <p className="text-cyan-500 text-[14px] pt-1 mb-4">Rp 1.400.000 /person</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Slide