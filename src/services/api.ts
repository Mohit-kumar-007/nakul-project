import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export const analyzeEMGReport = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/api/analyze-emg`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to analyze EMG report');
    }

    const data = await response.json();
    
    // Format the analysis results into a readable message
    return formatAnalysisResults(data.analysis);
  } catch (error) {
    console.error('Error analyzing EMG report:', error);
    throw error;
  }
};

export const getChatResponse = async (message: string, context: string[] = []) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an EMG healthcare assistant. Provide accurate, helpful responses about EMG analysis, pain management, exercises, and recovery. Keep responses concise and professional."
        },
        ...context.map(msg => ({
          role: msg.startsWith('User:') ? 'user' : 'assistant',
          content: msg.replace('User:', '').replace('Assistant:', '')
        })),
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error getting chat response:', error);
    throw error;
  }
};

function formatAnalysisResults(analysis: any): string {
  const { muscleActivity, fatigueLevel, recommendations, abnormalities } = analysis;
  
  let message = `EMG Analysis Results:\n\n`;
  message += `Muscle Activity Level: ${muscleActivity.toFixed(1)}%\n`;
  message += `Fatigue Level: ${fatigueLevel.toFixed(1)}%\n\n`;
  
  if (recommendations.length > 0) {
    message += `Recommendations:\n`;
    recommendations.forEach((rec: string) => message += `• ${rec}\n`);
    message += `\n`;
  }
  
  if (abnormalities.length > 0) {
    message += `Potential Issues:\n`;
    abnormalities.forEach((abnormality: string) => message += `• ${abnormality}\n`);
  }
  
  return message;
} 