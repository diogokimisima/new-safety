import { motion } from "framer-motion";
import { Banner } from "./components/banner";
import { Clients } from "./components/clients/clients";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Purpose } from "./components/purpose/purpose";
import { About } from "./components/about";
import { WhatsIcon } from "./components/whatsIcon";
import { Contact } from "./components/contacts/contact";
import { Services } from "./components/services/services";

// Variants para o contêiner principal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Tempo de espera entre cada animação de filho
      delayChildren: 0.7 // Atraso antes de iniciar a animação dos filhos
    }
  }
};

// Variants para cada componente filho
const childVariants = {
  hidden: { opacity: 0, y: 50 }, // Cada componente inicia fora de vista
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring', // Tipo de transição
      stiffness: 20, // Rigidez do movimento reduzida para suavidade
      damping: 10, // Controle do efeito de bouncing
      duration: 1 // Duração mais longa para uma transição lenta
    }
  }
};

function App() {
  return (
    <motion.div
      id="inicio"
      className="flex flex-col justify-center mx-auto relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Animação do contêiner principal
    >
      <Header />

      <motion.div className="space-y-20 mt-20">
        <motion.div 
          variants={childVariants} // Animação para cada componente filho
        >
          <Banner />
        </motion.div>

        <motion.div 
          id="about" 
          variants={childVariants}
          className="bg-[#f5f5f5]" // Animação para cada componente filho
        >
          <About />
        </motion.div>

        <motion.div 
          id="proposito" 
          variants={childVariants} // Animação para cada componente filho
        >
          <Purpose />
        </motion.div>

        <motion.div 
          id="services" 
          variants={childVariants} // Animação para cada componente filho
        >
          <Services />
        </motion.div>


        <motion.div 
          id="clients" 
          variants={childVariants} // Animação para cada componente filho
        >
          <Clients />
        </motion.div>

        <motion.div 
          id="contact" 
          variants={childVariants} // Animação para cada componente filho
        >
          <Contact />
          <Footer />
        </motion.div>
      </motion.div>
      
      <WhatsIcon />
    </motion.div>
  );
}

export default App;
