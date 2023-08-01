const HomeWrapper = ({ children }) => {
  return (
    <div className="max-w-[1200px] flex flex-col items-center justify-center mx-auto">
      {children}
    </div>
  );
};

export default HomeWrapper;
