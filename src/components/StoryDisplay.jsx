import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

const StoryDisplay = ({ story }) => {
  const handleSave = () => {
    const blob = new Blob([story], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'historia.txt');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        {/* TÍTULO - Agora com Jersey 15 */}
        <h2 className="text-4xl font-jersey text-slate-800 mb-6 text-center">
          Your Story
        </h2>

        {/* HISTÓRIA */}
        <p className="text-lg font-lato text-slate-800 mb-6">
          {story}
        </p>

        {/* BOTÃO */}
        <button
          onClick={handleSave}
          className="w-full bg-primary text-white font-lato text-xl py-2 rounded-md hover:bg-secondary transition-colors"
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
