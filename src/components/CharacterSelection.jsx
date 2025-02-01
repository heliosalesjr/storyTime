import PropTypes from 'prop-types';

const CharacterSelection = ({ onSelect }) => {
  const animals = ['lion', 'giraffe', 'elephant', 'monkey', 'tiger'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const animal = formData.get('animal');
    const name = formData.get('name');
    onSelect({ animal, name });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-dark-background p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-dark-secondary p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        {/* TÍTULO */}
        <h1 className="text-4xl font-pixel text-primary dark:text-dark-primary mb-6 text-center">
          Choose Your Character
        </h1>

        <div className="space-y-4">
          {/* SELEÇÃO DE ANIMAL */}
          <label className="block text-lg font-sans  ">
            Escolha um animal:
            <select
              name="animal"
              required
              className="mt-1 block w-full p-2 border border-primary rounded-md bg-background dark:bg-dark-background text-text dark:text-dark-text"
            >
              {animals.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>

          {/* NOME DO ANIMAL */}
          <label className="block text-lg font-sans text-text dark:text-dark-text">
            Nome do animal:
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full p-2 border border-primary rounded-md bg-background dark:bg-dark-background text-text dark:text-dark-text"
            />
          </label>

          {/* BOTÃO */}
          <button
            type="submit"
            className="w-full bg-primary dark:bg-dark-primary text-white font-sans text-xl py-2 rounded-md hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
};

CharacterSelection.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CharacterSelection;
