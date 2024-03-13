import { useAuth } from 'src/auth'

const Avatar = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <div>
      {isAuthenticated ? (
        <div className="flex items-center -space-x-2">
          <div className="rounded-l-full bg-slate-300 py-0.5 pl-3 pr-4">
            {currentUser.name}
          </div>
          <img
            className="h-8 w-8 rounded-full"
            src={currentUser.avatar}
            alt="profile"
          />
        </div>
      ) : null}
    </div>
  )
}

export default Avatar
