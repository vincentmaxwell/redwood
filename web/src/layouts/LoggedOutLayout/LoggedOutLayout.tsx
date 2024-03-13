type LoggedOutLayoutProps = {
  children?: React.ReactNode
}

const LoggedOutLayout = ({ children }: LoggedOutLayoutProps) => {
  return <>{children}</>
}

export default LoggedOutLayout
