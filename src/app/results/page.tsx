import { Suspense } from 'react';
import ResultsPage from './ResultsPage';

export default function ResultsWrapper() {
  return (
    <Suspense fallback={<div className="text-white text-center p-10">Loading results...</div>}>
      <ResultsPage />
    </Suspense>
  );
}
