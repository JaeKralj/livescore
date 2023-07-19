import Card from '@/components/Base/Card'
import Wrapper from '@/components/Base/Wrapper'
import LeagueCard from '@/components/Shared/LeagueCard'
import MatchCard from '@/components/Shared/MatchCard'
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
      <Card className='from-blue-100 from-0% to-[84.11%] my-5 to-blue-200 bg-gradient-138 flex justify-between'>
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
          <LeagueCard />
          <MatchCard />
        </div>
      </div>
    </Wrapper>
  )
}

type propTypes = {}

export default Home
