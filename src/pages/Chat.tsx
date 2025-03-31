import { useState, useRef } from 'react';
import { Upload, Send, Brain } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    // Simulate file processing
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'I\'ve analyzed your EMG report. Based on the electrical signals, I recommend adjusting the stimulation parameters to 2.5mA for 20 minutes, 3 times daily. This should help improve muscle response.',
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
        content: 'I understand your question. Let me help you with that...',
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