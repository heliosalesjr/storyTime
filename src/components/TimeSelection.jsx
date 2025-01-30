
import PropTypes from 'prop-types';

const TimeSelection = ({ onSelect }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const time = formData.get('time');
    onSelect({ time });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Escolha o período:
        <select name="time" required>
          <option value="dia">Dia</option>
          <option value="noite">Noite</option>
        </select>
      </label>
      <button type="submit">Próximo</button>
    </form>
  );
};

TimeSelection.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default TimeSelection;
