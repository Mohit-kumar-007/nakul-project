import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { analyzeEMGData } from './services/emgAnalysis';

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

// EMG Analysis endpoint
app.post('/api/analyze-emg', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const analysis = await analyzeEMGData(req.file.buffer, req.file.mimetype);
    res.json({ analysis });
  } catch (error) {
    console.error('Error analyzing EMG:', error);
    res.status(500).json({ error: 'Failed to analyze EMG data' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 