import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type LoggedInLayoutProps = {
  children?: React.ReactNode
}

const LoggedInLayout = ({ children }: LoggedInLayoutProps) => {
  return (
    <root className="flex h-screen flex-col">
      <Header />
      <main className="mb-auto flex justify-center">{children}</main>
      <Footer />
    </root>
  )
}

export default LoggedInLayout
