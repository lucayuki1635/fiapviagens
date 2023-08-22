
import Image from 'next/image';
import NavBar from './components/layout/navbar';
import BasicExample from './components/layout/cards';


export default function Home() {
  return (
    <div>
      <NavBar/>
      <div>
        <BasicExample/>
      </div>
    
    </div>
    
  );
}
