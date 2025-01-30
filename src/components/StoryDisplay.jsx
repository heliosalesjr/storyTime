
import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

const StoryDisplay = ({ story }) => {
  const handleSave = () => {
    const blob = new Blob([story], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'historia.txt');
  };

  return (
    <div>
      <h2>Sua História:</h2>
      <p>{story}</p>
      <button onClick={handleSave}>Salvar História</button>
    </div>
  );
};
StoryDisplay.propTypes = {
  story: PropTypes.string.isRequired,
};


export default StoryDisplay;