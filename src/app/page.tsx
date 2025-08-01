import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-background mx-auto flex h-dvh max-w-5xl flex-col text-center'>
      <Header />
      <div className='sm: mx-auto mt-24 flex w-4/5 max-w-96 flex-col gap-6 rounded-xl bg-black/90 p-12 text-2xl text-white'>
        <h1 className='text-4xl font-bold'>
          Dan&apos;s Computer
          <br />
          Repair Shop
        </h1>
        <address>
          555 Gateway Lane
          <br />
          Kansas City, KS 5555
        </address>
        <p>Open Daily: 9am to 5pm</p>
        <Link className='hover:underline' href='tel:5555555555'>
          555-555-5555
        </Link>

        <div className='mx-auto flex gap-6'>
          <span className='inline-block text-2xl'>👋 </span>
          <span>Hi There!</span>
        </div>
        <div className='animate-fadeIn'>...Modal Container</div>
      </div>
      <div className='absolute bottom-0 left-0'>
        <Footer />
      </div>
    </main>
  )
}
