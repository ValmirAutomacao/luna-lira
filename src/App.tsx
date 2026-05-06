import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, Star, ShieldCheck, Lock, ChevronDown, Sparkles } from 'lucide-react';
import ParticleNetworkBackground from './components/ParticleNetworkBackground';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_20px_rgba(212,175,55,0.1)]' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-8 py-4 h-20 max-w-[1200px] mx-auto">
        <div className="font-headline text-2xl text-primary tracking-widest uppercase">Luna Lyra</div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-primary border-b-2 border-primary pb-1 font-bold text-sm tracking-wide hover:opacity-80 transition-opacity" href="#big3">Três Astros grátis</a>
          <a className="text-on-surface-variant text-sm tracking-wide hover:text-primary transition-colors" href="#mapa-natal">Mapa Natal</a>
          <a className="text-on-surface-variant text-sm tracking-wide hover:text-primary transition-colors" href="#casal">Mapa do Casal</a>
          <a className="text-on-surface-variant text-sm tracking-wide hover:text-primary transition-colors" href="#tarot">Tarot</a>
          <a className="text-on-surface-variant text-sm tracking-wide hover:text-primary transition-colors" href="#faq">FAQ</a>
        </nav>
        <button className="hidden md:flex bg-primary-container text-on-primary-container font-semibold text-xs tracking-[0.1em] uppercase px-6 py-3 rounded hover:bg-primary transition-colors">
          Ver leituras
        </button>
        <button className="md:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-8 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img className="h-full w-full scale-[1.55] object-cover object-[68%_42%] opacity-80 md:scale-100 md:object-center" alt="Mulher em ambiente mistico segurando um caderno" src="/hero-mobile.png"/>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-6 leading-[1.1] tracking-[-0.02em] font-bold">
            Seu mapa não é uma previsão. É uma <span className="text-primary italic font-light drop-shadow-[0_0_15px_rgba(242,202,80,0.4)]">planta baixa</span> de quem você veio ser.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-light">
            Descubra os segredos cósmicos gravados no momento do seu nascimento. Uma leitura profunda, sem astrologia genérica, desenhada para sua verdadeira essência.
          </p>
          <a className="inline-flex items-center justify-center bg-primary-container text-on-primary-container font-semibold text-xs tracking-[0.1em] uppercase px-8 py-4 rounded-full hover:bg-primary transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]" href="#big3">
            Descobrir meus Três Astros grátis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const TrustMicrobar = () => {
  return (
    <section className="border-y border-outline-variant/20 bg-surface-container-low/30 backdrop-blur-sm py-6 relative z-10">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-primary w-5 h-5" />
          <span className="font-semibold text-xs tracking-[0.1em] text-on-surface-variant uppercase">Cálculo Real</span>
        </div>
        <div className="flex items-center gap-3">
          <Lock className="text-primary w-5 h-5" />
          <span className="font-semibold text-xs tracking-[0.1em] text-on-surface-variant uppercase">Pagamento Seguro</span>
        </div>
        <div className="flex items-center gap-3">
          <Star className="text-primary w-5 h-5" />
          <span className="font-semibold text-xs tracking-[0.1em] text-on-surface-variant uppercase">Design Premium</span>
        </div>
      </div>
    </section>
  );
};

const FormSection = () => {
  return (
    <section className="py-24 px-8 relative" id="big3">
      <div className="glow-radial absolute inset-0 z-0"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4 font-semibold">A Porta de Entrada</h2>
          <p className="text-on-surface-variant max-w-lg mx-auto leading-relaxed">Insira seus dados de nascimento exatos para revelar seu Sol, Lua e Ascendente.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 opacity-[0.07] mix-blend-screen pointer-events-none">
            <img className="w-80 h-80 object-cover" alt="Zodiac symbols bg" src="https://lh3.googleusercontent.com/aida/ADBb0ugCWvf-5Ytb0pGq-7_-4-2zVL9GvhkuPU-9QNCkeMrbjcDN3hKvM-0KH5kj26eFZngGobJXN3etlqYH7PHp_TiIkT0Ceik0VnDRo2UShbUTo2BE1uswYrGP22ympbJ0czVmmsm4jb7vOxrDO7T7RIRnXG_PY0tK57GGxxtpaPA2_DtzLfmztM_DJ-jP0rjOPj0p7zm6GRqMkyZIbT67STVAPmOj3OxMRHinC9IiUnRfP_BklST-NgPwH1jlfRvLF9CkqMbIgrjerEs"/>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="col-span-1 md:col-span-2">
              <label className="block font-semibold text-xs tracking-[0.1em] text-on-surface-variant uppercase mb-3">Nome Completo</label>
              <input className="w-full bg-surface-dim/40 border-b border-outline-variant text-on-surface px-4 py-4 focus:outline-none focus:border-primary focus:bg-surface-dim/60 transition-all rounded-t-md" placeholder="Seu nome" type="text"/>
            </div>
            <div>
              <label className="block font-semibold text-xs tracking-[0.1em] text-on-surface-variant uppercase mb-3">Data de Nascimento</label>
              <input className="w-full bg-surface-dim/40 border-b border-outline-variant text-on-surface px-4 py-4 focus:outline-none focus:border-primary focus:bg-surface-dim/60 transition-all rounded-t-md [color-scheme:dark]" type="date"/>
            </div>
            <div>
              <label className="block font-semibold text-xs tracking-[0.1em] text-on-surface-variant uppercase mb-3">Hora de Nascimento</label>
              <input className="w-full bg-surface-dim/40 border-b border-outline-variant text-on-surface px-4 py-4 focus:outline-none focus:border-primary focus:bg-surface-dim/60 transition-all rounded-t-md [color-scheme:dark]" type="time"/>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block font-semibold text-xs tracking-[0.1em] text-on-surface-variant uppercase mb-3">Cidade de Nascimento</label>
              <input className="w-full bg-surface-dim/40 border-b border-outline-variant text-on-surface px-4 py-4 focus:outline-none focus:border-primary focus:bg-surface-dim/60 transition-all rounded-t-md" placeholder="Ex: São Paulo, SP" type="text"/>
            </div>
            <div className="col-span-1 md:col-span-2 mt-6 text-center">
              <button className="bg-gradient-to-r from-on-secondary-fixed-variant/80 to-surface-container border border-primary/50 text-primary font-semibold text-xs tracking-[0.1em] uppercase px-10 py-5 rounded hover:border-primary transition-all w-full md:w-auto flex items-center justify-center gap-2 mx-auto hover:shadow-[0_0_15px_rgba(242,202,80,0.2)]" type="button">
                Revelar Meus Três Astros
                <Sparkles className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const IdentitySection = () => {
  return (
    <section className="py-24 px-8 bg-surface-container-low/30 backdrop-blur-sm relative z-10 border-y border-outline-variant/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-8 font-semibold leading-tight">Talvez não seja falta de força. <br/><span className="text-on-surface-variant font-light italic mt-2 inline-block">Talvez seja falta de bússola.</span></h2>
        <p className="text-lg text-on-surface-variant mb-8 font-light max-w-2xl mx-auto leading-relaxed">Você sente que há um potencial adormecido? Que seus relacionamentos seguem os mesmos padrões? A astrologia real não diz o que vai acontecer com você. Ela diz do que você é feito.</p>
      </motion.div>
    </section>
  );
};

const ComparisonSection = () => {
  return (
    <section className="py-32 px-8 relative z-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h3 className="font-headline text-3xl md:text-4xl text-primary mb-6 font-semibold">Não é um horóscopo de jornal.</h3>
          <p className="text-lg text-on-surface-variant leading-relaxed font-light">Esqueça aquelas previsões rasas que servem para milhões de pessoas. Seu mapa é tão único quanto sua impressão digital. Analisamos graus exatos, casas, aspectos e trânsitos para entregar um manual detalhado da sua psique.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:gap-6 relative"
        >
          <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full z-0"></div>
          <img className="w-full h-auto rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-90 border border-outline-variant/30 relative z-10" alt="Mystical interpretation" src="https://lh3.googleusercontent.com/aida/ADBb0uhRlXcsSESZQ59q1c6s8ApfRg2kpaOUWoAwyQjBHYJ3L_QJ32UvVd_emNjUwBFcRv4yXaguF-2_UKUfy69Wov1y0bryVTCRYOHI13x_DhC4DkQCiCTAJYmvuI31NgCIXIZRaAVXV9Nl_Py0KRv8JHTBqdREE21xRkAN6KIb81O3LMuS1573EjVXeDi2q4tOV7YxEc0_KXCUtKhDVJ-oLaqzicvXPl-hXZLSc5ERmyJXSMOOQBQ9sSNLc-k7-TnRYhuqqMIXwx3dlA"/>
          <img className="w-full h-auto rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-90 border border-outline-variant/30 mt-8 md:mt-12 relative z-10" alt="Zodiac map details" src="https://lh3.googleusercontent.com/aida/ADBb0uio4YS5tK_rmNEWvrcfIejFFLne7pWNESI7jskq91UuEJx5nA2qPLve6JXKkDQxwZlglrPBhk50kHGgYc5atvEL0Qs4SC3XzSK6UoBpu0ck60nCyOgCHGnWWwQWo2Ax2c4B1Xsme6qs5gqiTn0vwvoWOgCMWbv0DtflpOxRUaZSKvw0bVkOFg4yHw3TBoFFS-NZi7BnKj3i8U1kXwR7cJ7mHPi1a6NkOpEMkd1qEi4M-lSPN18BHWq8Jz7IGAgIOI8wNakHuufJ4xs"/>
        </motion.div>
      </div>
    </section>
  );
};

const MainProductSection = () => {
  return (
    <section className="py-32 px-8 bg-surface-container/30 backdrop-blur-sm relative z-10 border-y border-outline-variant/20" id="mapa-natal">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="text-tertiary-fixed-dim font-semibold text-xs tracking-[0.2em] uppercase mb-6 block">Produto Principal</span>
        <h2 className="font-headline text-4xl md:text-6xl text-white mb-6 font-bold leading-tight drop-shadow-md">O Livro da Sua Vida: <br/><span className="italic font-light">Mapa Astral Completo</span></h2>
        <p className="text-lg text-on-surface-variant mb-14 max-w-2xl mx-auto leading-relaxed font-light">Mais de 40 páginas detalhando sua personalidade, karma, vocação e dinâmica familiar. Tudo diagramado como um verdadeiro livro de arte.</p>
        <div className="text-5xl font-headline text-primary mb-10 font-bold drop-shadow-[0_0_15px_rgba(242,202,80,0.3)]">R$ 37,00</div>
        <button className="bg-primary-container text-on-primary-container font-semibold text-xs tracking-[0.1em] uppercase px-12 py-5 rounded-full hover:bg-primary transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
          Gerar meu Mapa Natal Completo
        </button>
      </motion.div>
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      title: "Mapa Natal",
      desc: "Autoconhecimento profundo. Entenda seus bloqueios e potências essenciais.",
      price: "37",
      link: "#mapa-natal"
    },
    {
      title: "Mapa do Casal",
      desc: "Sinastria amorosa. Entenda a dinâmica, pontos de contato e atrito entre você e seu parceiro.",
      price: "47",
      link: "#casal",
      featured: true
    },
    {
      title: "Tarot Sagrado",
      desc: "Respostas imediatas para o momento atual. Orientação focada nas suas sombras.",
      price: "27",
      link: "#tarot"
    }
  ];

  return (
    <section className="py-32 px-8 relative z-10 border-b border-outline-variant/10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl text-center text-primary mb-20 font-semibold">Qual portal deseja cruzar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={plan.title} 
              className={`glass-panel p-10 rounded-2xl transition-all duration-300 relative ${plan.featured ? 'border-primary/50 shadow-[0_0_30px_rgba(212,175,55,0.1)] -translate-y-2' : 'hover:border-primary/30'}`}
            >
              {plan.featured && (
                 <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-2xl"></div>
              )}
              <h3 className="font-headline text-2xl text-on-surface mb-3 font-semibold">{plan.title}</h3>
              <p className="text-on-surface-variant font-light leading-relaxed mb-8 min-h-[80px]">{plan.desc}</p>
              <div className="text-3xl text-primary font-bold mb-8 font-headline flex items-baseline gap-1">
                <span className="text-lg font-light text-on-surface-variant">R$</span>{plan.price}
              </div>
              <a className={`block w-full text-center border py-3 rounded text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${plan.featured ? 'bg-primary border-primary text-on-primary hover:bg-primary-container' : 'border-outline-variant text-on-surface hover:border-primary hover:text-primary'} `} href={plan.link}>
                Ver Detalhes
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecificServicesSection = () => {
  return (
    <>
      <section className="py-32 px-8 bg-surface-container-low/30 backdrop-blur-sm relative z-10 border-t border-outline-variant/10" id="casal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl text-on-surface mb-6 font-semibold">Sinastria: O Encontro de Dois Mapas</h2>
          <p className="text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed font-light">Descubra os pontos de atrito e as áreas de profunda conexão cósmica no seu relacionamento.</p>
          <button className="bg-surface-dim border border-primary/50 text-primary font-semibold text-xs tracking-[0.1em] uppercase px-12 py-4 rounded hover:bg-primary/5 transition-all">
            Fazer Mapa do Casal
          </button>
        </div>
      </section>
      
      <section className="py-32 px-8 relative z-10 border-t border-outline-variant/10" id="tarot">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl text-on-surface mb-6 font-semibold">Tarot: O Espelho da Alma</h2>
          <p className="text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed font-light">Luz sobre as sombras do momento presente. Obtenha clareza imediata para suas próximas grandes decisões.</p>
          <button className="bg-surface-dim border border-on-secondary text-on-secondary-container font-semibold text-xs tracking-[0.1em] uppercase px-12 py-4 rounded hover:bg-on-secondary/10 transition-all">
            Tirar as Cartas
          </button>
        </div>
      </section>
    </>
  );
};

const StepsSection = () => {
  const steps = [
    { title: "Insira seus dados", img: "card-01.jpg" },
    { title: "Escolha sua leitura", img: "card-02.jpg" },
    { title: "Pagamento seguro", img: "card-03.jpg" },
    { title: "Cálculo astronômico", img: "card-04.jpg" },
    { title: "Receba no email", img: "card-05.jpg" }
  ];

  return (
    <section className="py-32 px-8 bg-surface-container/20 relative z-10 border-y border-outline-variant/10 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="font-headline text-3xl text-primary mb-20 font-semibold">Como Funciona</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
          {steps.map((step, i) => (
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               key={i} 
               className="flex flex-col items-center"
            >
              <div className="w-full aspect-[3/4] relative rounded-xl overflow-hidden border border-outline-variant/20 shadow-lg mb-6 group cursor-pointer transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-2">
                 {/* Altere os src para as URLs reais ou faça o upload como card-01.jpg na pasta public */}
                 <img src={`/${step.img}`} alt={step.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section className="py-32 px-8 relative z-10" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl text-center text-primary mb-16 font-semibold">Perguntas Frequentes</h2>
        <div className="space-y-10">
          <div className="border-b border-outline-variant/30 pb-8">
            <h4 className="font-headline text-xl text-on-surface mb-4 font-semibold">Qual a diferença entre isso e um site gratuito?</h4>
            <p className="text-on-surface-variant font-light leading-relaxed">Sites gratuitos geram textos descritivos rasos. Nós combinamos cálculo astronômico preciso com uma narrativa psicológica profunda e uma diagramação editorial de luxo (como um verdadeiro livro sobre você).</p>
          </div>
          <div className="border-b border-outline-variant/30 pb-8">
            <h4 className="font-headline text-xl text-on-surface mb-4 font-semibold">E se eu não souber a hora exata?</h4>
            <p className="text-on-surface-variant font-light leading-relaxed">A hora exata é crucial para calcular seu Ascendente e as posições das Casas. Se tiver dúvida, recomendamos fortemente consultar sua certidão de nascimento original.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 px-8 bg-primary-container/10 border-y border-outline-variant/10 backdrop-blur-md relative z-10 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-primary-container/10 to-transparent opacity-50"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-10 font-bold drop-shadow-sm">As estrelas aguardam.</h2>
        <a className="inline-block border-2 border-primary text-primary font-semibold text-xs tracking-[0.1em] uppercase px-12 py-5 rounded-full hover:bg-primary hover:text-on-primary-container transition-colors shadow-lg" href="#big3">
          Começar minha jornada
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest/40 backdrop-blur-lg w-full pt-16 pb-8 border-t border-outline-variant/20 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-[1200px] mx-auto gap-8 mb-12">
        <div className="font-headline text-2xl text-primary opacity-80 uppercase tracking-widest">Luna Lyra</div>
        <p className="text-sm text-on-surface-variant font-light text-center md:text-left">
          © {new Date().getFullYear()} Luna Lyra. O cosmos guia, mas a vontade é sua.
        </p>
      </div>
      <nav className="flex gap-x-8 gap-y-4 flex-wrap justify-center border-t border-outline-variant/10 pt-8 max-w-[1200px] mx-auto px-8">
        <a className="font-semibold text-[10px] tracking-[0.1em] text-on-surface-variant uppercase hover:text-primary transition-colors" href="#">Termos de Uso</a>
        <a className="font-semibold text-[10px] tracking-[0.1em] text-on-surface-variant uppercase hover:text-primary transition-colors" href="#">Política de Privacidade</a>
        <a className="font-semibold text-[10px] tracking-[0.1em] text-on-surface-variant uppercase hover:text-primary transition-colors" href="#">Aviso Legal</a>
        <a className="font-semibold text-[10px] tracking-[0.1em] text-on-surface-variant uppercase hover:text-primary transition-colors" href="#">Suporte</a>
      </nav>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen text-on-surface font-body scroll-smooth">
      <div className="theme-gradient-bg"></div>
      <div className="noise-bg"></div>
      <ParticleNetworkBackground />
      <Navbar />
      <Hero />
      <TrustMicrobar />
      <FormSection />
      <IdentitySection />
      <ComparisonSection />
      <MainProductSection />
      <PricingSection />
      <SpecificServicesSection />
      <StepsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
