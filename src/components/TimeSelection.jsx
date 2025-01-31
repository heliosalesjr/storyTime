import PropTypes from 'prop-types';

const TimeSelection = ({ onSelect }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const time = formData.get('time');
    onSelect({ time });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-dark-background p-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-secondary p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-kids text-primary dark:text-dark-primary mb-6 text-center">
          Night or Day?
        </h1>
        <div className="space-y-4">
          <label className="block text-lg font-kids text-text dark:text-dark-text">
            Night or Day?:
            <select
              name="time"
              required
              className="mt-1 block w-full p-2 border border-primary rounded-md bg-white dark:bg-dark-background dark:text-dark-text"
            >
              <option value="dia" className="font-kids">Day</option>
              <option value="noite" className="font-kids">Night</option>
            </select>
          </label>
          <button
            type="submit"
            className="w-full bg-primary dark:bg-dark-primary text-white font-kids text-xl py-2 rounded-md hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

TimeSelection.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default TimeSelection;