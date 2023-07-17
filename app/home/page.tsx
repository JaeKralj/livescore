import Card from '@/components/UI/Card'
import Wrapper from '@/components/UI/Wrapper'
import Image from 'next/image'

function Home({}: propTypes) {
  return (
    <Wrapper>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-normal'>LiveScore</h1>
        <div className='flex gap-3 items-center'>
          {/* added search icon and notification icon */}
          <Image
            src='/icons/search.svg'
            height={32}
            width={32}
            alt='search icon'
          />
          <div className='flex relative'>
            <Image
              src='/icons/alarm.svg'
              height={32}
              width={32}
              alt='notification icon'
            />
            <p className='absolute right-1 text-white font-bold bg-red-700 rounded-full text-xs px-[.125rem] -top-1'>
              2
            </p>
          </div>
        </div>
      </div>
      <Card className='from-blue-100 from-0% to-[84.11%] to-blue-200 bg-gradient-138 flex justify-between'>
        <div className=''>
          <p className='bg-white p-2 text-xs rounded-xl max-w-fit text-black-200 font-semibold'>
            Interest
          </p>
          <h3 className='font-semibold text-lg mt-4 mb-2'>
            {/* title */}
            Liverpool UEFA Champion League Celebration
          </h3>
          <p className='text-xs'>
            {/* time */}
            Yesterday, 06.30 PM
          </p>
        </div>
        <div>
          {/* insert photo */}
          <Image
            src='/images/image-removebg-preview 4.png'
            height={177}
            width={223}
            // ! add image alt dynamically
            alt='img alt'
          />
        </div>
      </Card>
      <div>
        {/* categories_card */}
        <Card className='w-[6.75rem] h-28 bg-black-100 shadow-lg flex flex-col justify-center items-center gap-2 rounded-2xl'>
          <Image
            src='/images/image_3.png'
            width={40}
            height={40}
            alt='football'
          />
          Soccer
        </Card>
      </div>
      <div>
        <div>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
              {/* icon */}
              <Image
                src='/images/spain.png'
                width={24}
                height={24}
                alt='spain'
              />
              <div>
                <p className='text-base font-semibold'>La Liga</p>
                <span className='text-xs text-grey-200'>Spain</span>
              </div>
            </div>
            {/* right */}
            <Image
              src='/icons/arrow_right.svg'
              width={16}
              height={16}
              alt='arrow_right'
            />
          </div>
          <Card className='flex gap-5 items-center bg-[#2B2B3D] h-20 relative'>
            {/* club icons */}
            <div className='flex gap-1'>
              <div className='p-3 rounded-full bg-black-100 w-8 h-8'></div>
              <div className='p-3 rounded-full bg-black-100 w-8 h-8'></div>
            </div>
            <div className='flex text-center text-xs gap-1'>
              <div className=''>
                <p className='my-2'>Barcelona</p>
                <p>2</p>
              </div>
              <div className=''>
                <p className='my-2'>vs</p>
                <p>-</p>
              </div>
              <div className=''>
                <p className='my-2'>Real Madrid</p>
                <p>0</p>
              </div>
            </div>
            <div className='bg-black-100 h-full absolute right-0 p-4 text-center flex items-center justify-center rounded-r-2xl'>
              HT
            </div>
          </Card>
        </div>
      </div>
    </Wrapper>
  )
}

type propTypes = {}

export default Home
