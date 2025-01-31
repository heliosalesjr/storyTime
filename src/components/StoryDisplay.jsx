import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

const StoryDisplay = ({ story }) => {
  const handleSave = () => {
    const blob = new Blob([story], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'historia.txt');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-dark-background p-4">
      <div className="bg-white dark:bg-dark-secondary p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-4xl font-kids text-primary dark:text-dark-primary mb-6 text-center">
          Your Story
        </h2>
        <p className="text-lg font-kids text-text dark:text-dark-text mb-6">
          {story}
        </p>
        <button
          onClick={handleSave}
          className="w-full bg-primary dark:bg-dark-primary text-white font-kids text-xl py-2 rounded-md hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
        >
          Save Story
        </button>
      </div>
    </div>
  );
};

StoryDisplay.propTypes = {
  story: PropTypes.string.isRequired,
};

export default StoryDisplay;