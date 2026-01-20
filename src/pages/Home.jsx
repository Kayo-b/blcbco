import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cadeira from '../assets/cadeira.svg';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <nav className="h-screen left-0 top-5">
      {/* Vertical Menu Container */}
      {/* <div className="flex flex-col p-2">
        <Link 
          to="/products" 
          className="nav-link w-auto h-20 text-start justify-center p-4 "
        >
        <span className='hover:border-b-1'>{t('nav.shop')}</span>
        </Link>
        <Link 
          to="/catering" 
          className="nav-link w-auto h-20 text-start justify-center p-4"
        >
        <span className='hover:border-b-1'>{t('nav.catering')}</span>
        </Link>
        <Link 
          to="/about" 
          className="nav-link w-auto h-20 text-start justify-center p-4"
        >
        <span className='hover:border-b-1 pb-0'>{t('nav.about')}</span>
        </Link>
      </div>
      <div className='flex justify-end'>
        <img src={cadeira} className="w-22 h-auto pr-2"/>
      </div> */}
    </nav>

  );
}

// export default function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-gray-200 h-[70vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
//         <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
//         </div>
//       </section>

//       {/* Brief Intro */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
//          Backed Goods 
//         </h2>
//         <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
//         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
//         </p>
//         <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
//         </p>
//       </section>
//     </div>
//   );
// }
