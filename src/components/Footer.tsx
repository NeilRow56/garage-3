const Footer = () => {
  return (
    <footer className='mt-12 mb-8 w-screen text-center'>
      <main className='mx-auto flex max-w-5xl justify-between gap-4 px-5'>
        <p className='text-sm'>Garage &copy; {new Date().getFullYear()}</p>
        <p className='text-sm'>
          Created by Neil Rowland with Next.js, Xata, and Clerk
        </p>
      </main>
    </footer>
  )
}

export default Footer
