export const ComingSoon = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-green-800 text-white px-4">
      <div className="max-w-xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Coming Soon
        </h1>

        <p className="text-lg md:text-xl font-light text-white/90">
          We’re working hard to bring something amazing to you. Stay tuned!
        </p>

        <p className="text-sm text-white/60 mt-4">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
