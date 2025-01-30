

import PropTypes from 'prop-types';

const CharacterSelection = ({ onSelect }) => {
  const animals = ['leão', 'girafa', 'elefante', 'macaco', 'tigre'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const animal = formData.get('animal');
    const name = formData.get('name');
    onSelect({ animal, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Escolha um animal:
        <select name="animal" required>
          {animals.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
      <label>
        Nome do animal:
        <input type="text" name="name" required />
      </label>
      <button type="submit">Próximo</button>
    </form>
  );
};

CharacterSelection.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CharacterSelection;