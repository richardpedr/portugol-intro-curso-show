
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inscrição recebida!",
        description: "Obrigado pelo seu interesse. Entraremos em contato em breve com mais informações.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="inscricao" className="section-padding bg-curso-cinza-claro">
      <div className="container-curso">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-curso-azul-destaque p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Inscreva-se no Curso</h3>
              <p className="mb-6">
                Preencha o formulário ao lado para receber mais informações sobre o curso 
                de Introdução à Programação com Portugol.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Material didático completo</h4>
                    <p className="text-sm text-white/80">Acesso a todos os recursos de aprendizado</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Exercícios práticos</h4>
                    <p className="text-sm text-white/80">Aprenda fazendo com exercícios guiados</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Certificado de conclusão</h4>
                    <p className="text-sm text-white/80">Receba um certificado ao finalizar o curso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome completo" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="(00) 00000-0000" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experiência em programação</Label>
                  <select 
                    id="experience" 
                    name="experience" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="none">Nenhuma experiência</option>
                    <option value="basic">Conhecimentos básicos</option>
                    <option value="intermediate">Nível intermediário</option>
                    <option value="advanced">Nível avançado</option>
                  </select>
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-primary mt-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Informações'}
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Ao enviar este formulário, você concorda com nossa política de privacidade 
                  e termos de uso.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
