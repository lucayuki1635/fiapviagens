import Image from 'next/image'

export default function Home() {
return ( //JSX
  <nav className="flex p-4 bg-blue-700">
    <ul className="flex gap-20">
      <li>
        <a href="#">
            <h1>Fiap Viagens</h1>
        </a>
      </li>
      <li>
        <a href="#">
          Destinos
       </a>
      </li>
    </ul>
  </nav>
 )
}
