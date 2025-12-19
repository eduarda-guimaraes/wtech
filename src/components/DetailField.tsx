interface DetailFieldProps {
  label: string;
  value: string;
  isLink?: boolean;
  isLongText?: boolean;
}

export function DetailField({ label, value, isLink, isLongText }: DetailFieldProps) {
  return (
    <div className="bg-[#F9F9F9] p-3 md:p-4 rounded-2xl border border-gray-50 flex-shrink-0">
      <label className="text-[10px] text-gray-400 uppercase font-black block mb-1 tracking-wider">
        {label}
      </label>
      {isLink ? (
        <a 
          href={value} 
          target="_blank" 
          rel="noreferrer" 
          className="text-xs text-blue-600 font-bold underline break-all hover:text-blue-800 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className={`text-xs text-gray-700 ${isLongText ? 'leading-relaxed italic' : 'font-bold'}`}>
          {value}
        </p>
      )}
    </div>
  );
}