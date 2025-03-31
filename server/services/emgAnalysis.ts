import { Buffer } from 'buffer';
import * as tf from '@tensorflow/tfjs-node';

interface EMGAnalysis {
  muscleActivity: number;
  fatigueLevel: number;
  recommendations: string[];
  abnormalities: string[];
}

export async function analyzeEMGData(fileBuffer: Buffer, fileType: string): Promise<EMGAnalysis> {
  try {
    // Convert buffer to tensor for analysis
    const data = new Float32Array(fileBuffer);
    const tensor = tf.tensor1d(data);

    // Basic EMG signal processing
    const mean = tensor.mean().dataSync()[0];
    const std = tensor.std().dataSync()[0];
    
    // Calculate muscle activity level (0-100)
    const muscleActivity = Math.min(100, Math.max(0, (mean + std) * 50));

    // Calculate fatigue level (0-100)
    const fatigueLevel = Math.min(100, Math.max(0, (std / mean) * 100));

    // Generate recommendations based on analysis
    const recommendations = generateRecommendations(muscleActivity, fatigueLevel);
    
    // Check for abnormalities
    const abnormalities = detectAbnormalities(muscleActivity, fatigueLevel);

    return {
      muscleActivity,
      fatigueLevel,
      recommendations,
      abnormalities
    };
  } catch (error) {
    console.error('Error in EMG analysis:', error);
    throw new Error('Failed to analyze EMG data');
  }
}

function generateRecommendations(activity: number, fatigue: number): string[] {
  const recommendations: string[] = [];
  
  if (activity > 80) {
    recommendations.push('High muscle activity detected. Consider reducing intensity of activities.');
  }
  
  if (fatigue > 70) {
    recommendations.push('Significant muscle fatigue detected. Rest and recovery recommended.');
  }
  
  if (activity < 20) {
    recommendations.push('Low muscle activity detected. Consider gentle exercises to maintain muscle tone.');
  }
  
  return recommendations;
}

function detectAbnormalities(activity: number, fatigue: number): string[] {
  const abnormalities: string[] = [];
  
  if (activity > 90) {
    abnormalities.push('Extremely high muscle activity - possible muscle strain');
  }
  
  if (fatigue > 90) {
    abnormalities.push('Severe muscle fatigue - possible overexertion');
  }
  
  return abnormalities;
} 