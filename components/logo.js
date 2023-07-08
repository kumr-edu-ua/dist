import Image from 'next/image'

export default function Logo() {
    return (
        <div className='flex items-center'>
            <div>
                <Image priority src='/logo.png' height={100} width={100} alt='Лого університету'/>
            </div>
            <div>
                <div>Київський університет</div>
                <div>ринкових відносин</div>
            </div>
        </div>
    )
}
