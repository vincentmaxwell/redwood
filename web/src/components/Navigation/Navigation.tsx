import { Link, routes } from '@redwoodjs/router'

const Navigation = () => {
  return (
    <div className="flex gap-2">
      <Link
        className="rounded-lg border border-gray-400 bg-gray-50 p-2 hover:bg-slate-300 hover:font-semibold"
        to={routes.terms()}
      >
        Terms
      </Link>
      <Link
        className="rounded-lg border border-gray-400 bg-gray-50 p-2 hover:bg-slate-300 hover:font-semibold"
        to={routes.articles()}
      >
        Articles
      </Link>
    </div>
  )
}

export default Navigation
