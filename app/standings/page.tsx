import Wrapper from '@/components/Base/Wrapper'
import LeagueCard from '@/components/Shared/LeagueCard'
import TopFour from '@/components/Standings/TopFour'
import Image from 'next/image'

function Standings({}: propTypes) {
  return (
    <Wrapper>
      <label
        htmlFor='searchbox'
        className='rounded-[.875rem] bg-black-100 flex items-center gap-2 my-3 h-16'
      >
        <div className='p-4 flex justify-center items-center text-center'>
          <Image
            src='/icons/search.svg'
            height={32}
            width={32}
            alt='search icon'
          />
        </div>
        <input
          type='search'
          name='searchbox'
          title='searchbox'
          placeholder='Search your competition'
          className='w-full focus:outline-none h-full bg-transparent'
        />
      </label>
      <LeagueCard />
      <TopFour />
    </Wrapper>
  )
}

type propTypes = {}

export default Standings
