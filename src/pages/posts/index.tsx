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

                </div>
            </main>
        </>
    )
}