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
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-primary text-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        {/* TÍTULO */}
        <h1 className="text-4xl text-accent mb-6 text-center">
          Choose Your Character
        </h1>

        <div className="space-y-4">
          {/* SELEÇÃO DE ANIMAL */}
          <label className="block text-lg font-lato">
            Escolha um animal:
            <select
              name="animal"
              required
              className="mt-1 block w-full p-2 border border-accent rounded-md bg-white text-black"
            >
              {animals.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>

          {/* NOME DO ANIMAL */}
          <label className="block text-lg font-lato">
            Nome do animal:
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full p-2 border border-accent rounded-md bg-white text-black"
            />
          </label>

          {/* BOTÃO */}
          <button
            type="submit"
            className="w-full bg-secondary text-white font-lato text-xl py-2 rounded-md hover:bg-accent transition-colors"
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
