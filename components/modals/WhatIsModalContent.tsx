import React, { useState } from 'react';
import { LuteIcon, HammerIcon, ThematicDivider, ScrollIcon } from '../icons';

type Stage = 'intro' | 'choice' | 'bardPath' | 'artisanPath' | 'conclusion';

const WhatIsModalContent: React.FC = () => {
  const [stage, setStage] = useState<Stage>('intro');
  const [showBardSecret, setShowBardSecret] = useState(false);
  const [showArtisanSecret, setShowArtisanSecret] = useState(false);

  const SecretWord: React.FC<{children: React.ReactNode, onClick: () => void}> = ({ children, onClick }) => (
    <span onClick={onClick} className="border-b-2 border-dotted border-orange-400/70 cursor-pointer hover:text-orange-300 transition-colors">
      {children}
    </span>
  );

  const renderContent = () => {
    switch (stage) {
      case 'intro':
        return (
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="w-16 h-16 mx-auto text-orange-300/70">
              <ScrollIcon/>
            </div>
            <p className="font-bold text-orange-300 text-lg font-cinzel">Um Chamado Ancestral</p>
            <p className="text-orange-100/90 text-sm sm:text-base">
              Um pergaminho, <strong className="text-orange-300">selado com cera de dragão</strong>, chegou às tuas mãos. Ele fala de um <strong className="text-orange-300">conclave raro e festivo</strong>, o Arraieval, onde os reinos se unem para celebrar lendas, colheitas e forjar novas histórias.
            </p>
             <p className="text-orange-100/90 text-sm sm:text-base">
              Estás pronto para desvendar seus segredos no dia 20 de Junho?
            </p>
            <button
              onClick={() => setStage('choice')}
              className="w-full text-gray-900 bg-orange-500 font-bold py-3 px-4 rounded-lg hover:bg-orange-400 transition-all duration-300 animate-pulse-subtle"
            >
              Desdobrar o Pergaminho
            </button>
          </div>
        );

      case 'choice':
        return (
          <div className="text-center space-y-4 animate-fade-in-up">
            <p className="font-bold text-orange-300 font-cinzel text-lg">A Encruzilhada do Destino</p>
            <p className="text-orange-100/90 text-sm">
              Toda grande aventura começa com uma escolha. Qual caminho teu coração anseia trilhar nesta noite de festividades de Arraieval?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setStage('bardPath')}
                className="group flex-1 flex flex-col items-center p-4 rounded-lg bg-black/30 border border-white/20 hover:bg-purple-900/30 hover:border-orange-400/50 transition-all"
              >
                <div className="w-10 h-10 text-orange-400 mb-2 transition-transform group-hover:scale-110">
                  <LuteIcon />
                </div>
                <h3 className="font-bold font-cinzel text-orange-200">O Caminho do Bardo 🎶</h3>
                <p className="text-xs text-orange-100/70">Seguir as melodias que movem a fogueira.</p>
              </button>
              <button
                onClick={() => setStage('artisanPath')}
                className="group flex-1 flex flex-col items-center p-4 rounded-lg bg-black/30 border border-white/20 hover:bg-purple-900/30 hover:border-orange-400/50 transition-all"
              >
                <div className="w-10 h-10 text-orange-400 mb-2 transition-transform group-hover:scale-110">
                  <HammerIcon />
                </div>
                <h3 className="font-bold font-cinzel text-orange-200">A Trilha do Artesão 🔨</h3>
                <p className="text-xs text-orange-100/70">Descobrir os quitutes e tesouros locais.</p>
              </button>
            </div>
          </div>
        );

      case 'bardPath':
      case 'artisanPath':
        const isBard = stage === 'bardPath';
        return (
          <div className="text-left space-y-4 animate-fade-in-up">
            <h3 className="font-bold text-orange-300 font-cinzel text-center text-lg">{isBard ? "A Canção dos Reinos" : "A Forja da Irmandade"}</h3>
             <div className="p-3 bg-black/20 border-l-4 border-orange-500/50 text-orange-100/90 text-sm space-y-2">
              {isBard ? (
                <>
                  <p>
                    Escolheste bem. No Arraieval, a <strong className="text-orange-300">energia vibrante do folk</strong>, as <strong className="text-orange-300">tradições de fogueira</strong> e os ecos místicos da <SecretWord onClick={() => setShowBardSecret(!showBardSecret)}>música pagã</SecretWord> se unem. Bardos contam sagas ao redor do fogo. Prepara teu espírito para dançar a quadrilha medieval!
                  </p>
                  {showBardSecret && <p className="text-xs italic text-purple-300/80 animate-fade-in-up p-2 bg-purple-900/20 rounded">📜 <span className="font-bold">Lore Oculto:</span> Dizem que as harpas e flautas têm o poder de invocar espíritos das boas colheitas!</p>}
                </>
              ) : (
                 <>
                  <p>
                    Sábia escolha. O Arraieval é um grande mercado e banquete, onde ferreiros, <SecretWord onClick={() => setShowArtisanSecret(!showArtisanSecret)}>alquimistas</SecretWord> e artesãos expõem suas criações. Encontrarás <strong className="text-orange-300">comidas típicas e artefatos únicos</strong> que fortalecem o corpo e poções que alegram a alma.
                  </p>
                   {showArtisanSecret && <p className="text-xs italic text-purple-300/80 animate-fade-in-up p-2 bg-purple-900/20 rounded">📜 <span className="font-bold">Lore Oculto:</span> O quentão servido é feito com uma receita secreta, passada de geração em geração por anões eremitas!</p>}
                </>
              )}
            </div>
            <button
              onClick={() => setStage('conclusion')}
              className="w-full text-orange-200 border border-orange-400/50 rounded-lg py-2 text-sm hover:bg-orange-400/10 transition-colors mt-4"
            >
              Revelar o Coração do Conclave
            </button>
          </div>
        );

      case 'conclusion':
        return (
          <div className="text-center space-y-4 animate-fade-in-up">
            <h3 className="font-bold text-orange-300 font-cinzel text-lg">A União de Todas as Tribos</h3>
            <ThematicDivider />
            <p className="text-orange-100/90 text-sm">
              Independente do caminho, todos se encontram ao redor da grande fogueira. É onde a <strong className="text-orange-300">festa folclórica</strong> inspira a <strong className="text-orange-300">alegria do clã</strong>. Em meio às terras místicas dos Campos Gerais, o Arraieval une tradição junina, cultura folk e bravura.
            </p>
            <div className="font-bold text-base pt-2 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              🔥 Agora que conheces a lenda, junta-te à nossa irmandade no dia 20 de Junho! 🔥
            </div>
          </div>
        );
    }
  };

  return (
    <div className="text-orange-100/90 text-sm sm:text-base max-h-[60vh] overflow-y-auto overflow-x-hidden pr-2">
      {renderContent()}
    </div>
  );
};

export default WhatIsModalContent;