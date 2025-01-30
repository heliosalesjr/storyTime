

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
    <form onSubmit={handleSubmit}>
      <label>
        Escolha o conflito:
        <select name="conflict" required>
          {conflicts.map((conflict) => (
            <option key={conflict} value={conflict}>
              {conflict}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Continuar História</button>
    </form>
  );
};

ConflictSelection.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default ConflictSelection;
