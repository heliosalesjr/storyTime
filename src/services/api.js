import axios from 'axios';

// A chave da API está no arquivo .env
const API_KEY = import.meta.env.VITE_COHERE_API_KEY;

// Função para gerar a história
export const generateStory = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.cohere.ai/v1/generate',
      {
        model: 'command', // Modelo da Cohere (pode ser 'command-xlarge' para versões mais avançadas)
        prompt: prompt,
        max_tokens: 500, // Ajuste conforme necessário
        temperature: 0.7, // Controla a criatividade (0.0 a 1.0)
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Retorna o texto gerado
    return response.data.generations[0].text;
  } catch (error) {
    console.error('Erro ao gerar a história:', error);
    return 'Erro ao gerar a história. Tente novamente.';
  }
};