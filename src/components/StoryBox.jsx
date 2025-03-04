
import { useState } from 'react';
import CharacterSelection from "./CharacterSelection";
import TimeSelection from "./TimeSelection";
import ConflictSelection from "./ConflictSelection";
import { generateStory } from "./services/api";
import StoryDisplay from "./StoryDisplay";

const StoryBox = () => {
    
    const [step, setStep] = useState(1);
    const [character, setCharacter] = useState({});
    const [time, setTime] = useState("");
    const [story, setStory] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const handleCharacterSelect = (selectedCharacter) => {
        setCharacter(selectedCharacter);
        setStep(2);
    };

    const handleTimeSelect = (selectedTime) => {
        setTime(selectedTime);
        setStep(3);
    };

    const handleConflictSelect = (selectedConflict) => {
        setStory(`Once upon a time, ${character.name} faced ${selectedConflict} in ${selectedTime}.`);
        setStep(4);
    };

    return (
        <>
            {step === 1 && <CharacterSelection onSelect={handleCharacterSelect} />}
            {step === 2 && <TimeSelection onSelect={handleTimeSelect} />}
            {step === 3 && <ConflictSelection onSelect={handleConflictSelect} />}
            {step === 4 && <StoryDisplay story={story} />}
        </>
    );
};

export default StoryBox;
