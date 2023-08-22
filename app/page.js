import Image from 'next/image';
import NavBar from './components/layout/navbar';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex p-4 bg-transparent">
        <div className="flex items-center gap-20">
          <a href="#" className="text-white font-bold text-xl">
            FiapViagens
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white">Passagens</a>
            </li>
            <li>
              <a href="#" className="text-white">Hotéis</a>
            </li>
            <li>
              <a href="#" className="text-white">Sobre</a>
            </li>
            <li>
              <a href="#" className="text-white">Agende sua viagem</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Meu Card</h2>
          <p>Conteúdo do card aqui.</p>
        </div>
      </div>
    </div>
  );
}
