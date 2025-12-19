interface ErrorToastProps {
  onClose: () => void;
}

export function ErrorToast({ onClose }: ErrorToastProps) {
  return (
    <div className="absolute top-100 left-1/2 -translate-x-1/2 w-full max-w-[450px] z-50 animate-in fade-in slide-in-from-top-4 duration-300 font-montserrat">
      <div className="bg-[#FF8C32] text-white p-5 rounded-3xl flex items-center gap-4 relative shadow-2xl min-h-[90px]">
        
        <div className="absolute left-4 bottom-3 flex gap-1 opacity-20 pointer-events-none">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-4 h-4 bg-white rounded-full translate-y-[-8px]"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>

        <button 
          onClick={onClose} 
          className="absolute top-3 right-4 text-white/90 hover:text-white transition-colors"
        >
          <span className="text-xs">✕</span>
        </button>
        <div className="absolute -top-6 left-6 flex-shrink-0 bg-[#C2410C] w-14 h-14 rounded-full flex items-center justify-center border-[4px] border-[#FDFDFD] shadow-lg">
           <span className="text-2xl font-bold text-white leading-none">✕</span>
        </div>

        <div className="w-14"></div>

        <div className="flex flex-col justify-center">
          <strong className="text-2xl font-bold leading-tight">Ops!</strong>
          <span className="text-sm font-medium tracking-tight">
            Não conseguimos identificar sua conta.
          </span>
        </div>
      </div>
    </div>
  );
}