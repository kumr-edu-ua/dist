import Meta from './meta';
import Nav from './nav';
import Image from 'next/image';

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <header>
        <Nav />
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