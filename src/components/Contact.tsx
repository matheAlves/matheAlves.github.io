import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { styles } from '@/styles';

const Contact = () => {

  const [loading, _setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const EMAILJS_SERVICE_ID = "service_dhglwes"
  const EMAILJS_TEMPLATE_ID = "contact_form"
  const EMAILJS_PUBLIC_KEY = "BruW3Lg8kN4IPFy6K"

  interface EmailFormElements extends HTMLFormControlsCollection {
    user_name: HTMLInputElement;
    user_email: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface EmailForm extends HTMLFormElement {
    readonly elements: EmailFormElements;
  }

  const sendEmail = (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();
    const elements = formRef.current?.elements as EmailFormElements;
    const { user_name, user_email, message } = elements;
    if (!user_name.value || !user_email.value || !message.value) {
      toast.error('por favor, preencha todos os campos', {
        duration: 5000,
      });
      return;
    }

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current ?? '', EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          toast.success('obrigado, sua mensagem foi recebida com sucesso! entrarei em contato assim que possível.', {
            duration: 5000,
          });
          formRef.current?.reset();
        },
        () => {
          toast.error('houve um erro ao enviar a mensagem, tente novamente mais tarde.', {
            duration: 5000,
          });
        },
      );
  };


  return (

    <motion.div className='min-h-svh flex flex-col items-center justify-around bg-black-100 p-8 rounded-2xl'>
      <h1
        className="text-primary font-monumentBlack text-4xl md:text-5xl lg:text-5xl"
      >contato</h1>
      <form className='flex flex-[0.2] flex-col justify-around  text-white' ref={formRef} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          className={`${styles.opacity} h-10 p-2`}
          placeholder="nome"
        />
        <input
          type="email"
          name="user_email"
          className={`${styles.opacity} h-10 p-2`}

          placeholder="email"
        />
        <textarea
          name="message"
          className={`${styles.opacity} h-32 p-2`}

          placeholder="mensagem"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'enviando...' : 'enviar'}
        </button>
      </form>

      <footer className="absolute bottom-0 text-center">
        <p className="text-primary text-xs">artwork: <a href="https://www.domcake.net/">DOMCAKE</a> · <a href="https://eyeondesign.aiga.org/">AIGA Eye on Design</a> · <a href='https://sketchfab.com/SketchyB0t_3D_Fabrication'>SketchyBot</a></p>

        <p className="text-primary text-xs">web development: © 2025 · Matheus Alves</p>
      </footer>
    </motion.div>

  );
};

export default Contact;