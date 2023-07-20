import ParallaxHome from '@/components/ParallaxHome'

export default function Home() {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh]'>
      <header className='top-0 flex flex-row justify-center gap-2'>
        <div>button</div>
        <div>button</div>
        <div>button</div>
        <div>button</div>
      </header>
      <main className='flex items-center justify-center w-full my-auto text-center'>
        <ParallaxHome />
      </main>
    </div>
  )
}
