import style from './styles.module.scss';

import Image from '../../../node_modules/next/image';

import Logo from '../../../public/images/logo.svg';

import Link from '../../../node_modules/next/link';

import { useRouter } from '../../../node_modules/next/router';


export function Header() {

    const router = useRouter();
    const currentRouter = router.pathname;

    return(
        
        <header className={style.headerContainer}>

            <div className={style.headerContent}>
                <a>
                    <Image src={Logo} alt="Logotipo Sujeito Programador" />
                </a>

                <nav>
                    <Link href='/'>
                        <a className={currentRouter === '/' ? style.active : ''}>Home</a>
                    </Link>

                    <Link href='/conteudos'>
                        <a className={currentRouter === '/conteudos' ? style.active : ''}>Conteúdos</a>
                    </Link>

                    <Link href='/sobre'>
                        <a className={currentRouter === '/sobre' ? style.active : ''}>Sobre</a>
                    </Link>
                </nav>


                <a className={style.readyButton} type="button" href='https://juliano340.com'>COMEÇAR!</a>

            </div>



        </header>

    )


}