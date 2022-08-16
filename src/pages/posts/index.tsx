import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from "../../../node_modules/react-icons/fi/index";

import styles from './styles.module.scss';
import Head from '../../../node_modules/next/head';
import Link from '../../../node_modules/next/link';
import Image from '../../../node_modules/next/image';
import thumbImg from '../../../public/images/thumb.png';





export default function Posts() {
    return(
        <>
            <Head>
                <title>Blog | Sujeito Programador</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <Link href="/">
                        <a>
                            <Image src={thumbImg} 
                                alt="Post título 1"
                                width={720}
                                height={410}
                                quality={100}
                            />
                            <strong>Criando meu primeiro aplicativo</strong>
                            <time>15 AGOSTO 2022</time>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Corporis voluptatem officia explicabo maxime eius cupiditate.
                            </p>
                        </a>
                    </Link>

                    <div className={styles.buttonsNavigate}>

                        <div>
                            <button>
                                <FiChevronsLeft size={25} color="#fff"/>
                            </button>

                            <button>
                                <FiChevronLeft size={25} color="#fff"/>
                            </button>
                        </div>

                         <div>
                            <button>
                                <FiChevronsRight size={25} color="#fff"/>
                            </button>

                            <button>
                                <FiChevronRight size={25} color="#fff"/>
                            </button>
                        </div>
                       

                    </div>

                   
                </div>
            </main>
        </>
    )
}