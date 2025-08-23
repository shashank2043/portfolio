const SimpleCard = ({ children }) => {
  return (
    <div className="h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-gradient-to-r from-[#0d1224] to-[#0a0d37] text-gray-200 rounded-xl hover:border-[#16f2b3] hover:shadow-lg hover:shadow-[#16f2b3]/20 w-full">
      {children}
    </div>
  );
};

export default SimpleCard;
