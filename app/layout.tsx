import NavBar from "@/components/NavBar"
import "./global.css"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'Flexxible',
  description: 'Showcase projects from aspiring professionals ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavBar/>
      <main>
        {children}
      </main>
      <Footer/>
    </html>
  )
}
