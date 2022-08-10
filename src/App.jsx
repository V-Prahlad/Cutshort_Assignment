import './App.css';
import { useState, useEffect } from 'react';
import { questions } from './Questions';
import StepProgressBar from './component/StepProgressBar';
import MultiStepForm from './component/MultiStepForm';
import Header from './component/Header';

function App() {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});
  console.log(pagesAnswers);

  const nextButton = () => {
    if (index - 4) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      setSubmitted(true);
    }
  };

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };

  return (
    <div>
      <Header />
      <div className="progressbar">
        <StepProgressBar step={index} />
      </div>
      {/* {submitted ? (
        <div>
          <div style={{ marginTop: '325px' }}></div>
          <div className="button">
            <button onClick={handleStart}>Start Over</button>
          </div>
        </div>
      ) : ( */}
      <div>
        <div>
          <MultiStepForm
            list={questions}
            step={index}
            onPageUpdate={onPageAnswerUpdate}
            pagesAnswers={pagesAnswers}
          />
        </div>
        <div className="button">
          <button onClick={nextButton}>
            {index == totalPagesCount ? 'Launch Eden' : 'Create Workspace'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
