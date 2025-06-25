export default function GridTest() {
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size animate-grid-move opacity-40 z-0" />
      <div className="relative z-10 text-white p-10">
        <h1 className="text-4xl font-bold">Is the grid visible?</h1>
      </div>
    </div>
  );
}
