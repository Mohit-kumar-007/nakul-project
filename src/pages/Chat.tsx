import { useState, useRef } from 'react';
import { Upload, Send, Brain } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const EMG_RESPONSES = [
  "Based on your EMG report, I recommend adjusting stimulation parameters to 2.5mA for 20 minutes, 3 times daily. This should help improve muscle response.",
  "Your EMG shows improved muscle activity. Let's increase the stimulation to 3.0mA for 25 minutes, 2 times daily.",
  "The EMG patterns indicate reduced muscle fatigue. I suggest maintaining current parameters: 2.0mA for 15 minutes, 4 times daily.",
  "Your latest EMG shows excellent progress. We can gradually reduce stimulation to 1.8mA for 20 minutes, 3 times daily.",
  "The EMG analysis suggests we should focus on specific muscle groups. Adjust to 2.2mA for 18 minutes, 3 times daily.",
  "Your EMG indicates good muscle recovery. Let's try 2.8mA for 22 minutes, 2 times daily.",
  "Based on the EMG patterns, I recommend alternating between 2.0mA and 2.5mA every other session.",
  "The EMG shows improved nerve conduction. Maintain current settings: 2.3mA for 20 minutes, 3 times daily.",
  "Your EMG indicates we should increase frequency. Try 2.7mA for 25 minutes, 2 times daily.",
  "The EMG analysis suggests optimal recovery at 2.4mA for 21 minutes, 3 times daily."
];

const HEALTHCARE_RESPONSES = [
  "Regular exercise is crucial for muscle recovery. Try gentle stretching exercises before stimulation sessions.",
  "For optimal results, maintain a balanced diet rich in protein and essential nutrients.",
  "Stay hydrated throughout the day, especially before and after stimulation sessions.",
  "Getting adequate sleep (7-9 hours) helps with muscle recovery and nerve regeneration.",
  "Avoid strenuous activities for at least 2 hours after stimulation sessions.",
  "Consider using ice packs after sessions if you experience any discomfort.",
  "Keep a daily log of your stimulation sessions and any changes in muscle response.",
  "Regular physical therapy sessions can complement your stimulation treatment.",
  "Stress management techniques like deep breathing can help with muscle relaxation.",
  "Make sure to warm up your muscles before starting stimulation sessions."
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getRandomResponse = (responses: string[]) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    // Simulate file processing
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: getRandomResponse(EMG_RESPONSES),
        timestamp: new Date()
      }]);
      setIsUploading(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        type: 'bot',
        content: getRandomResponse(HEALTHCARE_RESPONSES),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">EMG Care Assistant</h1>
          <div className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-white" />
            <span className="text-white">AI Assistant</span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isUploading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                Analyzing EMG report...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a healthcare question..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <Upload className="h-5 w-5 text-gray-600" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".pdf,.jpg,.png"
                className="hidden"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                <Send className="h-5 w-5 text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;