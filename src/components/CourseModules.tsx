
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Introdução e Conceitos Básicos",
    description: "Primeiros passos na programação, ambiente de desenvolvimento e fundamentos do Portugol.",
    lessons: 4,
    duration: "2 horas",
    topics: ["O que é programação", "Instalação do VisualG", "Tipos de dados", "Entrada e saída"]
  },
  {
    id: 2,
    title: "Estruturas de Controle",
    description: "Aprenda a controlar o fluxo do seu programa com condicionais e laços de repetição.",
    lessons: 5,
    duration: "3 horas",
    topics: ["Operadores lógicos", "Condicionais se-então-senão", "Estrutura escolha-caso", "Laços para e enquanto"]
  },
  {
    id: 3,
    title: "Vetores e Matrizes",
    description: "Trabalhe com coleções de dados usando estruturas unidimensionais e bidimensionais.",
    lessons: 3,
    duration: "2.5 horas",
    topics: ["Declaração de vetores", "Operações em vetores", "Matrizes", "Algoritmos de ordenação"]
  },
  {
    id: 4,
    title: "Procedimentos e Funções",
    description: "Modularize seu código com procedimentos e funções para melhor organização.",
    lessons: 4,
    duration: "3 horas",
    topics: ["Criação de procedimentos", "Passagem de parâmetros", "Funções com retorno", "Escopo de variáveis"]
  },
  {
    id: 5,
    title: "Projeto Final",
    description: "Aplique todos os conceitos aprendidos em um projeto prático completo.",
    lessons: 2,
    duration: "4 horas",
    topics: ["Planejamento", "Desenvolvimento", "Depuração", "Documentação"],
    isProjectModule: true
  }
];

const CourseModules = () => {
  return (
    <section id="modulos" className="section-padding bg-white">
      <div className="container-curso">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-curso-azul-claro text-curso-azul-destaque">
            Programa do Curso
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-curso-azul-escuro mb-4">
            Módulos do Curso
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa metodologia progressiva foi desenvolvida para que mesmo iniciantes 
            consigam aprender programação de forma estruturada e prática.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Card key={module.id} className={`border-t-4 ${module.isProjectModule ? 'border-t-curso-azul-destaque' : 'border-t-curso-azul-claro'} hover:shadow-md transition-shadow`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                  <div className="text-2xl font-bold text-curso-azul-escuro">
                    {module.id}
                  </div>
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4 text-sm">
                  <div className="bg-curso-cinza-claro rounded-full px-3 py-1">
                    {module.lessons} aulas
                  </div>
                  <div className="bg-curso-cinza-claro rounded-full px-3 py-1">
                    {module.duration}
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-2">O que você vai aprender:</h4>
                <ul className="space-y-2">
                  {module.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <a href="#" className="text-curso-azul-destaque text-sm font-medium hover:underline">
                  Ver detalhes do módulo →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
