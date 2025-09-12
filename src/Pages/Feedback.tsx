import FeedbackCards from "../Components/FeedbackCards";
import FeedbackMainCard from "../Components/FeedbackMainCard";
import { useQuizStore } from "../store/quiz";

const Feedback = () => {
  const { loading, result } = useQuizStore();
  console.log("result", result);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-white text-2xl">
        No result found
      </div>
    );
  }

  const [mainCareer, ...otherCareer] = result.careers;

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
        <FeedbackMainCard
          Career={mainCareer}
          Stream={result.recommendedStream}
          Feedback={result.aiFeedback}
          Skills={result.topskills}
        />
        <div className="space-y-6">
          <h1 className="text-gray-300 text-2xl font-bold leading-tight tracking-[-0.015em] px-4">
            Other Suggested Careers
          </h1>
          <FeedbackCards Career={otherCareer} />
        </div>
      </div>
    </main>
  );
};

export default Feedback;
