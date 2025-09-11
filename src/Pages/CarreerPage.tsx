import CarreerCard from "../Components/CarreerCard";

const CarreerPage = () => {
  return (
    <main className="px-40 flex flex-1 justify-center py-10">
      <div className="flex flex-col max-w-5xl flex-1">
        <div className="flex flex-col gap-4 mb-12 text-center">
          <h1 className="text-5xl font-bold text-white leading-tight tracking-tighter">
            Browse Careers for Class 12
          </h1>
          <p className="text-gray-500 text-lg font-normal leading-normal max-w-2xl mx-auto">
            Explore a wide range of career paths tailored for Class 12 students.
            Find your passion and plan your future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CarreerCard />
        </div>
      </div>
    </main>
  );
};

export default CarreerPage;
