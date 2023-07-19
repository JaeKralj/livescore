import Image from 'next/image'

function LeagueCard({}: propTypes) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
        {/* icon */}
        <Image src='/images/spain.png' width={24} height={24} alt='spain' />
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
  )
}

type propTypes = {}

export default LeagueCard
