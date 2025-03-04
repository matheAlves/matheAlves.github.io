import { motion, useScroll, useTransform } from 'framer-motion'

const Profile = () => {
  const isMobile = window.matchMedia('(max-width: 500px)').matches;
  const { scrollY } = useScroll();
  const textX = useTransform(scrollY, [0, isMobile ? 600 : 900], [-100, 0]);
  const textOpacity = useTransform(scrollY, [0, 900], [0, 1])
  const bulletPoints = [
    "Atuação em todas as etapas do desenvolvimento de software, desde a concepção e design de soluções até a implementação, testes e deploy.",
    "Colaboração com equipes multidisciplinares (designers, product managers) para entender as necessidades do negócio e entregar soluções de alta qualidade.",
    "Criação de novas funcionalidades e componentes reutilizáveis em React e React Native.",
    "Implementação de layouts responsivos e interfaces de usuário intuitivas.",
    "Integração de APIs RESTful (Node.js, Express) para comunicação entre front-end e back-end.",
    "Desenvolvimento de testes unitários e de integração para garantir a qualidade do código.",
    "Correção de bugs e implementação de melhorias em aplicações existentes.",
    "Monitoramento de aplicações em produção e resolução de problemas.",
    "Atualização de dependências e tecnologias utilizadas.",
    "Criação e manutenção de banco de dados PostgreSQL.",
    "Otimização de queries para melhorar o desempenho do banco de dados.",
    "Configuração e gerenciamento de pipelines de deploy (Heroku, Appcenter).",
  ]
  return (
    <motion.div
      style={{ x: textX, opacity: textOpacity }}

      className='min-h-svh flex flex-col justify-center items-center xs:flex-row'
    >
      <div className='flex flex-col lg:h-svh lg:w-1/2 justify-center items-center'>
        <img
          className='w-40 h-40 rounded-full mx-auto'
          src={"/math.png"}
          alt="a picture of Matheus"
          onClick={() => window.open('https://github.com/matheAlves', '_blank')}
        />
        <section
          className='text-white p-10 indent-5 tracking-wider justify-center text-justify flex flex-col'
        >
          <p>Desenvolvedor full stack com mais de 2 anos de experiência profissional atuando em todas as camadas de desenvolvimento de aplicações web e mobile.</p>
          <br></br>
          <p>Atualmente, estou cursando Ciência da Computação na Universidade La Salle, e sou formado no curso de desenvolvimento web full stack da Trybe, onde desenvolvi projetos que incluem, entre outras, tecnologias como JavasCript, React, Redux, Node.Js, Docker, Express, TypeScript, MySQL, MongoDB e Python, além de conceitos como SOLID, REST, padrões de projeto, raspagem de dados, algoritmos e estruturas de dados.</p>
          <br></br>
          <p>Um antigo entusiasta da tecnologia, desde onde ela nos diverte até onde facilita as nossas vidas.</p>
          <br></br>
          <p>Antes do desenvolvimento, atuei por 6 anos na área da educação como instrutor de inglês, e tive a oportunidade de trabalhar e estudar em Dublin, na Irlanda, onde residi por 1 ano e meio.</p>
        </section>
      </div>

      <section
        className='lg:w-1/2 lg:h-svh text-white p-10 indent-5 tracking-wider justify-center text-justify flex flex-col leading-relaxed'
      >
        <ul className='list-disc list-inside space-y-2 '>
          {bulletPoints.map((item, index) => (
            <li key={index}><span className="holographic">{item}</span></li>
          ))}
        </ul>
      </section>
    </motion.div>

  );
};

export default Profile;