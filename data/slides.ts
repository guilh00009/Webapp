import { Album, Brain, Globe, Lightbulb, Video, Sparkles } from "lucide-react";
import { Slide } from "@/types/slides";

export const slides: Slide[] = [
  {
    id: 0,
    title: "Quem somos nós...",
    icon: Album,
    content: "Somos do IFC Campus Brusque, e este foi um projeto criado por: Guilherme Keller De Souza(Bolsista); Fábio Lamartine Barbosa Toledo(Colaborador); Leonardo Felipe de Avila Calbusch(Coordenador); Júnior Cunha(Colaborador)"
  },
  {
    id: 1,
    title: "Inteligência Artificial Tradicional",
    icon: Brain,
    content: "IAs tradicionais são sistemas programados para tarefas específicas com regras predefinidas. Elas executam funções limitadas e previsíveis, como reconhecimento facial, sistemas de recomendação básicos ou assistentes virtuais simples. Não têm capacidade de criar conteúdo novo ou adaptar-se além de sua programação inicial."
  },
  {
    id: 2,
    title: "IA Generativa",
    icon: Lightbulb,
    content: "IAs generativas são sistemas avançados que podem criar conteúdo novo e original. Diferente das IAs tradicionais, elas aprendem padrões e geram resultados únicos, como textos, imagens, vídeos e músicas. São capazes de adaptar e personalizar conteúdo com base no contexto e necessidades específicas."
  },
  {
    id: 3,
    title: "Duolingo na Educação",
    icon: Globe,
    content: "O Duolingo utiliza IA generativa para criar diálogos dinâmicos e personalizados. Seus recursos de chamadas permitem prática real de conversação, onde estudantes interagem com a IA para aprimorar pronúncia e fluência em inglês e espanhol. Disponível na App Store e Google Play, oferece uma experiência gamificada de aprendizado.",
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/br/app/duolingo-aprenda-idiomas/id570060128"
      },
      {
        text: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.duolingo"
      }
    ]
  },
  {
    id: 4,
    title: "GPT Edu-diversão",
    icon: Sparkles,
    content: "Uma versão personalizada do ChatGPT focada em educação, o GPT Edu-diversão ajuda professores a criar questões mais envolventes e atualizadas. Ele pesquisa assuntos contemporâneos e adapta exercícios e avaliações, tornando o aprendizado mais relevante e interessante para os alunos.",
    link: {
      text: "Acessar GPT Edu-diversão",
      url: "https://chat.openai.com/g/g-YOUR-GPT-ID"
    }
  },
  {
    id: 5,
    title: "Luma Dream Machine",
    icon: Video,
    content: "Uma ferramenta gratuita de IA generativa para criar vídeos e representações visuais. Ideal para professores que desejam produzir conteúdo visual para suas aulas, permitindo a criação de cenas e animações que ilustram conceitos complexos de forma acessível.",
    link: {
      text: "Acessar Luma Labs",
      url: "https://lumalabs.ai"
    }
  }
];