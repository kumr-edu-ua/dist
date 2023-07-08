import Meta from './meta';
import Nav from './nav';
import Image from 'next/image';

export default function LayoutWithBackground({ children, image, text, desc }) {
  return (
    <div>
      <Meta />
      <header>
        <div className='flex flex-col bg-cover bg-center' style={{ backgroundImage: `url(${image})` }}>
          <div className=''>
            <Nav dark={true} />
            <div className='flex items-center justify-center pt-10 pb-40 pl-5  text-white' >
              <div className='text-[50px]'>{text}</div>
              <div className='text-[30px]'>
                <div className='pt-40 pl-10' >{desc}</div></div>
            </div>
          </div>
        </div>

      </header>
      <main className='p-20 flex flex-col justify-center items-center'>
        {
          children
        }
      </main>
      <footer className='w-full h-16 border-t border-gray-300 flex justify-center items-center'>
        Створено&nbsp;
        <a className='flex justify-center items-center text-decoration-none text-current' href='http://creativelab.net.ua'>
          creativelab.net.ua
        </a>
      </footer>
    </div >
  );
}