import D1 from '../assets/images/ch.png'
import D2 from '../assets/images/ios.png'
import Girl from '../assets/images/banner-girl.png'
function Banner(title) {
  return (
    <main className='h-[594px] w-full  grid grid-cols-2 gap-[25px]'>
      <div className=" flex flex-col space-y-[16px] mt-20">
        <h1 className="text-[45px] font-bold leading-[60px]">Start your journey
          by one click, explore beautiful world!
          {title}
          </h1>
        <p>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!</p>

        <div className='flex flex-row gap-[29px]'>
          <img src={D1} className='h-[40px] w-[120px]' alt="" />
          <img src={D2} className='h-[40px] w-[120px]' alt="" />
        </div>
      </div>
      <div className="" >
        <img src={Girl} alt="" className='w-full' />
      </div>
    </main>
  )
}

export default Banner

