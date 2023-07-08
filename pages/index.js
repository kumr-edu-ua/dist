import Link from 'next/link';
import Layout from '../components/layout';
import {AiOutlineRight} from 'react-icons/ai';

export default function Home() {

  return (
    <Layout>
      <h1 className='text-6xl text-center m-20'>Вступна кампанія 2024</h1>
      <Link className='text-2xl' href='/admission'>
        Детальніше <AiOutlineRight size={32} className='inline-block' />
      </Link>
    </Layout>
  )
}
