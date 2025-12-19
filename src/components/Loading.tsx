import loadingcircle from "../assets/loading-circle.png";

export function Loading() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <img 
          src={loadingcircle} 
          alt="Carregando" 
          className="animate-spin object-contain" 
        />
        
        <h1 className="font-bold text-[#303030]">
          Carregando...
        </h1>
      </div>
    </>
  );
}