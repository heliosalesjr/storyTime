import PropTypes from 'prop-types';

const TimeSelection = ({ onSelect }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const time = formData.get('time');
    onSelect({ time });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-dark-secondary p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        {/* TÍTULO */}
        <h1 className="text-4xl font-jersey text-primary text-slate-800 mb-6 text-center">
          Night or Day?
        </h1>

        <div className="space-y-4">
          {/* SELEÇÃO */}
          <label className="block text-lg font-lato text-slate-800 dark:text-slate-200">
            Night or Day?:
            <select
              name="time"
              required
              className="mt-1 block w-full p-2 border border-primary rounded-md bg-white dark:bg-dark-secondary text-slate-800 dark:text-slate-200"
            >
              <option value="dia" className="font-lato">Day</option>
              <option value="noite" className="font-lato">Night</option>
            </select>
          </label>

          {/* BOTÃO */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-lato text-xl py-2 rounded-md hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
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
