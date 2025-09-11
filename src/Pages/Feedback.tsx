import FeedbackCards from "../Components/FeedbackCards";
import FeedbackMainCard from "../Components/FeedbackMainCard";

const Feedback = () => {
  return (
    <main className="px-40 flex flex-1 justify-center py-12">
      <div className="flex flex-col max-w-4xl flex-1 gap-8">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold tracking-tight leading-tight">
            Your Career Suggestions
          </h1>
          <p className="text-lg font-medium text-gray-400 mt-2">
            Based on your assessment results, here are some career paths you
            might excel in.
          </p>
        </div>
        <FeedbackMainCard />
        <div className="space-y-6">
          <h1 className="text-gray-300 text-2xl font-bold leading-tight tracking-[-0.015em] px-4">
            Other Suggested Careers
          </h1>
          <FeedbackCards />
        </div>
      </div>
    </main>
  );
};

export default Feedback;
