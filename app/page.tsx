import Button from '@/components/UI/Button'
import Wrapper from '@/components/UI/Wrapper'

export default function Splash() {
  return (
    <Wrapper>
      <div className='mt-5'>
        <h1 className='text-4xl max-w-[16.6875rem] md:max-w-5xl font-semibold'>
          What leagues are you interested in ?
        </h1>
        <p className='text-base mt-2 mb-5 text-grey-200 font-normal'>
          You can choose more than one.
        </p>
      </div>
      <div className='min-h-[18.75rem] bg-blue mb-5'>
        {/*added different leagues*/}
      </div>
      <div className='flex flex-col lg:flex-row gap-3 lg:justify-center'>
        <Button type='primary'>Continue</Button>
        <Button type='secondary'>Skip</Button>
      </div>
    </Wrapper>
  )
}
