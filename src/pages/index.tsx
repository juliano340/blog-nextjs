import Head from '../../node_modules/next/head';
import style from '../styles/Home.module.scss';
import Image from '../../node_modules/next/image';
import TechsImage from '../../public/images/techs.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Blog Sujeito Programador</title>
      </Head>

      <main className={style.container}>
        <div className={style.containerHeader}>

          <section className={style.ctaText}>
            <h1>Levando você ao próximo nível!</h1>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Modi nam atque earum architecto, officiis magnam blanditiis! 
              Labore officiis veniam enim repudiandae ea neque voluptate, 
              eius, atque temporibus id ducimus.
            </span>
            <a>
              <button>COMEÇAR AGORA!</button>
            </a>

          </section>

          <img src="/images/banner-conteudos.png" alt="Conteúdos Sujeito Programador"/>
        </div>

        <hr className={style.divisor} />

        <div className={style.sectionContent}>

          <section>
            <h2>Aprenda a criar aplicativos para Android e IOS</h2>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque a voluptatum consectetur aliquid perspiciatis voluptas animi doloribus incidunt fugit adipisci?</span>
          </section>
          <img src="/images/financasApp.png" alt="Conteúdos Mobile App" />

        </div>

        <hr className={style.divisor} />

        <div className={style.sectionContent}>
          
          <img src="/images/webDev.png" alt="Conteúdos Mobile App" />

          <section>

            <h2>Aprenda a criar sistemas online!</h2>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, fugiat?</span>
          </section>

        </div>

        <div className={style.nextLevelContent}>

          <Image src={TechsImage} alt="Tecnologias"></Image>
          <h2>Lorem ipsum <span className={style.alunos}> dolor sit amet </span> consectetur adipisicing elit. Ex, dignissimos!
          </h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <span>
            <a>
              <button>COMEÇAR AGORA!</button>
            </a>
          </span>

        </div>


      </main>
    </>
  )
}
