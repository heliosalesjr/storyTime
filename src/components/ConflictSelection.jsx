import PropTypes from 'prop-types';

const ConflictSelection = ({ onSelect }) => {
  const conflicts = ['fenômeno natural', 'outro animal', 'acidente'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const conflict = formData.get('conflict');
    onSelect({ conflict });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-dark-secondary p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        {/* TÍTULO - Agora com Jersey 15 */}
        <h1 className="text-4xl font-jersey text-slate-800 mb-6 text-center">
          What Happens Next?
        </h1>

        <div className="space-y-4">
          {/* SELEÇÃO */}
          <label className="block text-lg font-lato text-slate-800">
            Choose what happens next:
            <select
              name="conflict"
              required
              className="mt-1 block w-full p-2 border border-primary rounded-md bg-white text-slate-800"
            >
              {conflicts.map((conflict) => (
                <option key={conflict} value={conflict} className="font-lato">
                  {conflict}
                </option>
              ))}
            </select>
          </label>

          {/* BOTÃO */}
          <button
            type="submit"
            className="w-full bg-secondary text-white font-lato text-xl py-2 rounded-md hover:bg-secondary transition-colors"
          >
            Keep telling the story
          </button>
        </div>
      </form>
    </div>
  );
};

ConflictSelection.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default ConflictSelection;
