import { useState } from 'react';
import CharacterSelection from './components/CharacterSelection';
import TimeSelection from './components/TimeSelection';
import ConflictSelection from './components/ConflictSelection';
import StoryDisplay from './components/StoryDisplay';
import { generateStory } from './services/api';

const App = () => {
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({});
  const [time, setTime] = useState('');
  const [story, setStory] = useState('');

  const handleCharacterSelect = (data) => {
    setCharacter(data);
    setStep(2);
  };

  const handleTimeSelect = (data) => {
    setTime(data.time);
    setStep(3);
  };

  const handleConflictSelect = async (data) => {
    // Cria o prompt para a API
    const prompt = `Crie uma história para crianças onde o personagem é um ${character.animal} chamado ${character.name}. A história acontece durante a ${time}. O problema é ${data.conflict}. A história deve ser criativa e otimista.`;

    // Gera a história usando a API da Cohere
    const generatedStory = await generateStory(prompt);
    setStory(generatedStory);
    setStep(4);
  };

  return (
    <div>
      {step === 1 && <CharacterSelection onSelect={handleCharacterSelect} />}
      {step === 2 && <TimeSelection onSelect={handleTimeSelect} />}
      {step === 3 && <ConflictSelection onSelect={handleConflictSelect} />}
      {step === 4 && <StoryDisplay story={story} />}
    </div>
  );
};

export default App;