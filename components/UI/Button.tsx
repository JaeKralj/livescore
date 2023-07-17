import clsx from 'clsx'

function Button({ children, type }: propTypes): JSX.Element {
  return (
    <button
      className={clsx(
        'py-5 px-16 rounded-2xl border-8 border-transparent font-semibold text-lg',
        type === 'primary' ? 'bg-blue' : 'bg-transparent'
      )}
    >
      {children}
    </button>
  )
}

type propTypes = {
  children: React.ReactNode
  type: 'primary' | 'secondary'
}

export default Button
