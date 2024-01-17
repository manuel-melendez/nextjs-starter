import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (

    <main>
      <h1>Hello, this is the home page.</h1>
      <Link href='/users'>Redirect to users page</Link>
      <ProductCard />
    </main>
  )
}
