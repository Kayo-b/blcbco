import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const form = useRef();
  const { t } = useTranslation();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_40efg74', 'template_7d3vrrs', form.current, 'pC6lsNGP7IGANeD6x')
      .then((result) => {
          console.log(result.text);
          alert(t('contactForm.successMessage'));
          form.current.reset();
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          alert(t('contactForm.errorMessage'));
          setIsSending(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-2xl p-2 rounded-lg"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
          {t('contactForm.name')} *
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={t('contactForm.namePlaceholder')}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
          {t('contactForm.email')} *
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={t('contactForm.emailPlaceholder')}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
          {t('contactForm.message')} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder={t('contactForm.messagePlaceholder')}
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className={`w-full py-3 px-6 font-bold text-lg transition-colors ${
          isSending
            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
            : 'bg-green-500 text-white hover:bg-green-700'
        }`}
      >
        {isSending ? t('contactForm.sending') : t('contactForm.send')}
      </button>
    </form>
  );
}
