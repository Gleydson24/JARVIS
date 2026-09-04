import React from 'react';
import ArcReactor from './components/ArcReactor';
import ClockWidget from './components/ClockWidget';
import WeatherWidget from './components/WeatherWidget';
import AutomationWidget from './components/AutomationWidget';
import { Cpu, HardDrive } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-jarvis-bg text-white p-6 flex flex-col justify-between">
      
      {/* 1. CABEÇALHO ACADÊMICO / MARCA */}
      <header className="flex flex-col md:flex-row justify-between items-center pb-4 border-b border-jarvis-border">
        <div>
          <h1 className="text-2xl font-black tracking-widest text-jarvis-cyan flex items-center gap-2">
            J.A.R.V.I.S.
            <span className="text-xs px-2 py-0.5 rounded bg-jarvis-cyan/20 text-jarvis-cyan border border-jarvis-cyan/40">
              v1.0
            </span>
          </h1>
          <p className="text-xs text-gray-400">
            IFRN - CAMPUS CAICÓ | PROJETO INTEGRADOR 2026
          </p>
        </div>
        <div className="text-right text-xs text-gray-400 mt-2 md:mt-0">
          <p>SISTEMA INTELIGENTE DE AUTOMAÇÃO</p>
          <p className="text-jarvis-cyan font-mono">STATUS: ONLINE</p>
        </div>
      </header>

      {/* 2. CONTEÚDO PRINCIPAL (GRID 3 COLUNAS) */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center my-6">
        
        {/* COLUNA ESQUERDA */}
        <div className="flex flex-col gap-6">
          <ClockWidget />
          <WeatherWidget />
        </div>

        {/* COLUNA CENTRAL - REATOR HUD */}
        <div className="flex flex-col items-center justify-center">
          <ArcReactor statusText="Aguardando Comando" />
          <div className="text-center mt-2">
            <span className="text-xs text-gray-400">Desenvolvido por Gleydson & Athos</span>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="flex flex-col gap-6">
          
          {/* Status do Sistema (CPU/Memória) */}
          <div className="glass-panel p-5 rounded-2xl">
            <span className="text-xs font-bold text-jarvis-cyan tracking-wider uppercase mb-3 block">
              STATUS DO SISTEMA
            </span>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="flex items-center gap-1 text-gray-300"><Cpu className="w-3.5 h-3.5 text-jarvis-cyan" /> USO DE CPU</span>
                  <span className="text-jarvis-cyan font-mono">24%</span>
                </div>
                <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-jarvis-cyan h-full w-[24%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="flex items-center gap-1 text-gray-300"><HardDrive className="w-3.5 h-3.5 text-jarvis-cyan" /> MEMÓRIA RAM</span>
                  <span className="text-jarvis-cyan font-mono">5.8 GB / 16 GB</span>
                </div>
                <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-jarvis-blue h-full w-[36%]"></div>
                </div>
              </div>
            </div>
          </div>

          <AutomationWidget />

        </div>
      </main>

      {/* 3. RODAPÉ DE TRANSCRIÇÃO DA CONVERSA */}
      <footer className="glass-panel p-4 rounded-xl border border-jarvis-border">
        <div className="flex justify-between items-center">
          <span className="text-xs text-jarvis-cyan font-bold uppercase">HISTÓRICO / CHAT DE VOZ</span>
          <span className="text-[10px] text-gray-400">Web Speech API / ChatGPT API</span>
        </div>
        <div className="mt-2 text-sm text-gray-200 font-mono bg-black/40 p-2 rounded border border-white/5">
          <span className="text-jarvis-cyan font-bold">JARVIS: </span> 
          Aguardando seu amigo integrar o módulo de voz...
        </div>
      </footer>

    </div>
  );
}