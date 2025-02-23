import { useState } from "react";
import CharacterSelection from "./components/CharacterSelection";
import TimeSelection from "./components/TimeSelection";
import ConflictSelection from "./components/ConflictSelection";
import StoryDisplay from "./components/StoryDisplay";
import Navbar from "./components/Navbar"; // Importando o Navbar
import { generateStory } from "./services/api";
import "./index.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({});
  const [time, setTime] = useState("");
  const [story, setStory] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const handleCharacterSelect = (data) => {
    setCharacter(data);
    setStep(2);
  };

  const handleTimeSelect = (data) => {
    setTime(data.time);
    setStep(3);
  };

  const handleConflictSelect = async (data) => {
    const prompt = `Generate a short story for children where the character is a ${character.animal} and its name is ${character.name}. The story takes place during the ${time}. The conflict of the story is ${data.conflict}. break the story into 4 main sentences that shouldn't be longer than 200 characters each. The 1st sentence introduces the animal and its name, the second should evolve into its environment, the third should introduce the conflict, and the fourth should resolve the conflict, leaving a message for the children.`;
    const generatedStory = await generateStory(prompt);
    setStory(generatedStory);
    setStep(4);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Passando darkMode e toggleDarkMode para a Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {step === 1 && <CharacterSelection onSelect={handleCharacterSelect} />}
      {step === 2 && <TimeSelection onSelect={handleTimeSelect} />}
      {step === 3 && <ConflictSelection onSelect={handleConflictSelect} />}
      {step === 4 && <StoryDisplay story={story} />}
    </div>
  );
};

export default App;
