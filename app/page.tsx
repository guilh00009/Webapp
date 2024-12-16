import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Brain, Cloud, Lightbulb, PlayCircle, School, Globe, Video, Youtube } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Brain className="h-20 w-20 text-primary animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Inteligência Artificial na Educação
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra como IAs tradicionais e generativas estão transformando o ensino com ferramentas inovadoras.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/presentation">
              <Button size="lg" className="group">
                Começar Apresentação
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://www.youtube.com/channel/UCRX9Zdtou_YV_r0ugo485ZA" target="_blank">
              <Button size="lg" variant="outline" className="group">
                <Youtube className="mr-2 h-4 w-4" />
                Assista no YouTube
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">IA Tradicional</h3>
            </div>
            <p className="text-muted-foreground">
              Sistemas programados para tarefas específicas e previsíveis.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">IA Generativa</h3>
            </div>
            <p className="text-muted-foreground">
              Cria conteúdo original e se adapta às necessidades específicas.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Ferramentas Educacionais</h3>
            </div>
            <p className="text-muted-foreground">
              Duolingo, GPT Edu-diversão e Luma Dream Machine para ensino inovador.
            </p>
          </Card>
        </section>

        {/* Tools Preview Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">Ferramentas Disponíveis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Duolingo</h3>
              <p className="text-muted-foreground mb-4">
                Aprenda idiomas com IA generativa
              </p>
            </Card>
            
            <Card className="p-6">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">GPT Edu-diversão</h3>
              <p className="text-muted-foreground mb-4">
                Crie questões envolventes e atualizadas
              </p>
            </Card>
            
            <Card className="p-6">
              <Video className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Luma Dream Machine</h3>
              <p className="text-muted-foreground mb-4">
                Gere vídeos educacionais gratuitamente
              </p>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-primary/5">
            <School className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">
              Pronto para Transformar a Educação?
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore como as ferramentas de IA podem revolucionar sua forma de ensinar e aprender.
            </p>
            <Link href="/presentation">
              <Button variant="secondary" size="lg">
                Iniciar Apresentação
              </Button>
            </Link>
          </Card>
        </section>
      </div>
    </main>
  );
}