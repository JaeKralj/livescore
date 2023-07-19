import Wrapper from '@/components/Base/Wrapper'
import MatchCard from '@/components/Shared/MatchCard'
import Image from 'next/image'

function MatchDetails({}: propTypes) {
  return (
    <Wrapper>
      <div className='flex items-center my-4'>
        <Image
          src='/images/arrow_left.svg'
          width={24}
          height={24}
          alt='arrow_left'
        />
        <h4 className='text-center mx-auto'>
          {/* competition */}
          UEFA Champions League
        </h4>
      </div>
      <div className='flex justify-between items-center text-center'>
        <div>
          <div className='w-14 aspect-square rounded-full bg-black-100'></div>
          <p>Arsenal</p>
        </div>
        <div>
          <div>2-0</div>
          <p>90:00</p>
        </div>
        <div>
          <div className='w-14 aspect-square rounded-full bg-black-100'></div>
          <p>Arsenal</p>
        </div>
      </div>
      {/* tabs */}
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Other match */}
      <div className='flex justify-between items-center'>
        <h4>Other Matches</h4>
        <span>see more</span>
      </div>
      <MatchCard />
    </Wrapper>
  )
}

type propTypes = {}

export default MatchDetails
