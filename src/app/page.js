import dynamic from 'next/dynamic'
import { Letters } from './Letters'

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
})

export function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900'>
      <Letters />
    </main>
  )
}
