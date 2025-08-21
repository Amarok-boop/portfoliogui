import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center -space-x-4">
              <img 
                src="https://i.ibb.co/Jwz1S9dN/vetor-do-logotipo-da-camera-535345-915.jpg" 
                alt="Logo Câmera"
                className="w-20 h-20 rounded-full"
              />
              <h1 className="text-3xl font-bold text-gray-900 mt-2">AmaroFotografo</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#gallery" className="text-gray-700 hover:text-gray-900">Galeria</a>
              <a href="#videos" className="text-gray-700 hover:text-gray-900">Vídeos</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-72 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Capturando Momentos
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Transformando instantes em memórias eternas
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver Galeria
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Galeria de Fotos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                <img 
                  src="https://i.ibb.co/WNXDCt81/DILSINHO-1.jpg" 
                  alt="Dilsinho 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-900 text-lg">Dilsinho</h4>
                <p className="text-gray-600 text-sm">Rio de Janeiro, 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                <img 
                  src="https://i.ibb.co/yvVV1ty/DILSINHO-2.jpg" 
                  alt="Dilsinho 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-900 text-lg">Dilsinho</h4>
                <p className="text-gray-600 text-sm">Rio de Janeiro, 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                <img 
                  src="https://i.ibb.co/ywSzkmg/DILSINHO-3.jpg" 
                  alt="Dilsinho 3"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-900 text-lg">Dilsinho</h4>
                <p className="text-gray-600 text-sm">Rio de Janeiro, 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                <img 
                  src="https://i.ibb.co/mVPDXW7r/NALDO-1.jpg" 
                  alt="Naldo 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-900 text-lg">Naldo</h4>
                <p className="text-gray-600 text-sm">Angra dos Reis, 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                <img 
                  src="https://i.ibb.co/81BrChh/NALDO-2.jpg" 
                  alt="Naldo 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-900 text-lg">Naldo</h4>
                <p className="text-gray-600 text-sm">Angra dos Reis, 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                <img 
                  src="https://i.ibb.co/svp6d2Bt/NALDO-3.jpg" 
                  alt="Naldo 3"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-900 text-lg">Naldo</h4>
                <p className="text-gray-600 text-sm">Angra dos Reis, 2024</p>
              </div>
            </div>

          </div>

          {/* Pixote photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                <img 
                  src="https://i.ibb.co/hxMytsNK/PIXOTE-1.jpg" 
                  alt="Pixote 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-900 text-lg">Pixote</h4>
                <p className="text-gray-600 text-sm">Rio de Janeiro, 2025</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                <img 
                  src="https://i.ibb.co/VpbcLyVs/PIXOTE-2.jpg" 
                  alt="Pixote 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-900 text-lg">Pixote</h4>
                <p className="text-gray-600 text-sm">Rio de Janeiro, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Galeria de Vídeos
          </h3>
          
          {/* Vertical Videos */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Vídeos Verticais
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-[9/16] bg-gray-200 overflow-hidden">
                  <iframe 
                    src="https://player.vimeo.com/video/1112131720?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    className="w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Vídeo Vertical 1"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900">Lançamento Peninsula</h5>
                  <p className="text-gray-600 text-sm">Rio de Janeiro, 2025</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-[9/16] bg-gray-200 overflow-hidden">
                  <iframe 
                    src="https://player.vimeo.com/video/1105954636?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    className="w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Vídeo Vertical 2"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900">Retrato em Movimento</h5>
                  <p className="text-gray-600 text-sm">TikTok, 2025</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-[9/16] bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Vídeo Vertical 3</p>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900">Behind the Scenes</h5>
                  <p className="text-gray-600 text-sm">Instagram, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Videos */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Vídeos Horizontais
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <iframe 
                    src="https://player.vimeo.com/video/1105996377?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    className="w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Vídeo Horizontal 1"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900">Naldo</h5>
                  <p className="text-gray-600 text-sm">Angra dos Reis, 2024</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Vitória - Insônia</p>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900">Vitória - Insônia</h5>
                  <p className="text-gray-600 text-sm">Portfolio, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Sobre Mim</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Olá! Sou o Amaro, um fotógrafo apaixonado por capturar momentos únicos. 
            Minha jornada na fotografia começou como hobby e se transformou em uma 
            paixão que me permite contar histórias através das lentes.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Entre em Contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">guilhermeamaro67@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Telefone</h4>
              <p className="text-gray-600">(21) 96556-8323</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Instagram</h4>
              <p className="text-gray-600">@amarofotografo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Amaro Fotógrafo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
