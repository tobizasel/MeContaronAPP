import axios from "axios";

// La función extractKeywords toma el texto como parámetro y devuelve lo que devuelve la API
const extractKeywords = async (text) => {
  const apiKey = "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";
  
  try {
    const response = await axios.post(
      "https://api.anthropic.com/v1/completions",
      {
        model: "claude-3-sonnet-20240229",
        prompt: `Por favor, analiza el siguiente texto y extrae las palabras clave más importantes:

"${text}"

Devuelve solo una lista de palabras clave, separadas por comas.`,
        max_tokens_to_sample: 300,
        temperature: 0.2,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
      }
    );

    // Devuelve el resultado de la API directamente
    return response.data.completion;
  } catch (error) {
    console.error("Error al extraer palabras clave:", error);
    return "Error al procesar la solicitud.";
  }
};

export default extractKeywords;
