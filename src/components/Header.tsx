import {
  //   OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { Button } from './ui/button'
import { NavButton } from './NavButton'
import { Database, File, Home, UsersRound } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

const Header = () => {
  return (
    <header className='mx-auto mt-8 mb-12 flex h-12 min-w-5xl items-center justify-between gap-4 px-5'>
      <div className='flex items-center gap-4'>
        <NavButton href='/' label='Garage 3' icon={Home} />
        <span className='text-slate-300'>/</span>
        <NavButton href='/dashboard' label='Dashboard' icon={Database} />
        <NavButton href='/tickets' label='Tickets' icon={File} />

        <NavButton href='/customers' label='Customers' icon={UsersRound} />

        {/* <SignedIn>
              <span className='-ml-2'>
                <OrganizationSwitcher afterCreateOrganizationUrl='/dashboard' />
              </span>
            </SignedIn> */}
      </div>
      <div className='flex items-center space-x-2'>
        <ModeToggle />
        <div className='items-center pt-2'>
          <SignedOut>
            <Button type='button' asChild>
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}

export default Header
