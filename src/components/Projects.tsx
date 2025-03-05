import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Scrappy",
    description: "A idéia deste projeto é ser um espaço virtual onde você pode deixar recados e notas para seus amigos. Você pode criar notas (Scrappies) clicando em qualquer lugar da tela, além de poder editar, excluir e arrastá-las para reordenar. Você pode conferir uma demonstração do projeto pelo link abaixo, mas ele ainda está em estágio inicial de desenvolvimento. Futuramente você poderá criar uma conta e compartilhar suas notas com seus amigos e o Scrappy deve ser uma rede social totalmente funcional! Se você gostou do projeto e quer contribuir com desenvolvimento ou design, fique a vontade para visitar o repositório no GitHub ou entrar em contato comigo!",
    technologies: ["React Router", "TypeScript", "Tailwind", "Dnd Kit"],
    screenshots: ["/scrappy-1.png", "/scrappy-2.png", "scrappy-3.png"],
    githubLink: "https://github.com/matheAlves/scrappy-react-router",
    liveLink: "https://scrappy-dev.vercel.app/",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="p-8 bg-2000-pattern min-h-svh bg-cover justify-around items-center flex-col z-10 flex relative">
      <h1 className="text-primary font-monumentBlack text-4xl md:text-5xl lg:text-5xl mb-5 sm:mb-0">
        projetos
      </h1>
      <div className="md:w-[1100px] bg-neutral-200 bg-opacity-60 backdrop-blur-md  min-h-[700px] rounded-3xl shadow-lg flex">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
