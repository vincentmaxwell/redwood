import Avatar from 'src/components/Avatar/Avatar'
import Navigation from 'src/components/Navigation/Navigation'
import Search from 'src/components/Search/Search'

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-200 p-2">
      <Navigation />
      <Search />
      <Avatar />
    </header>
  )
}

export default Header
