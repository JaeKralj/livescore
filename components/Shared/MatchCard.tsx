import Card from '../Base/Card'

function MatchCard({}: propTypes) {
  return (
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
  )
}

type propTypes = {}

export default MatchCard
