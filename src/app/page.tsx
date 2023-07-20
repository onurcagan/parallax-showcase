import ParallaxHome from '@/components/ParallaxHome'

export default function Home() {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh]'>
      <header className='absolute top-0 flex flex-row justify-center w-full gap-2 mx-auto'>
        <button>placeHolder</button>
        <button>placeHolder</button>
        <button>placeHolder</button>
        <button>placeHolder</button>
      </header>
      <main className='flex items-center justify-center w-full my-auto text-center'>
        <ParallaxHome />
      </main>
    </div>
  )
}
