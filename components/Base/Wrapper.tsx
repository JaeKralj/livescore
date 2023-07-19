function Wrapper({ children }: propTypes) {
  return <main className='p-6 max-w-4xl mx-auto'>{children}</main>
}

type propTypes = { children: React.ReactNode }

export default Wrapper
