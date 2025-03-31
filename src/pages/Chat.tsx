import { useState, useRef, useEffect } from 'react';
import { Upload, Send, Brain } from 'lucide-react';
import { analyzeEMGReport, getChatResponse } from '../services/api';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const healthcareResponses = {
  'pain': 'I understand you\'re experiencing pain. Could you please describe the intensity (1-10) and location of the pain? This will help me provide more specific guidance.',
  'exercise': 'For EMG-guided exercises, I recommend starting with gentle muscle contractions and gradually increasing intensity. Would you like specific exercise recommendations?',
  'recovery': 'Recovery time varies based on individual conditions. Based on your EMG readings, I suggest following the prescribed stimulation protocol and monitoring progress weekly.',
  'default': 'I\'m here to help with your healthcare questions. Could you please provide more details about your concern?'
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);
    
    // Add user message about file upload
    setMessages(prev => [...prev, {
      type: 'user',
      content: `Uploaded file: ${file.name}`,
      timestamp: new Date()
    }]);

    try {
      const analysis = await analyzeEMGReport(file);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: analysis,
        timestamp: new Date()
      }]);
    } catch (err) {
      setError('Failed to analyze EMG report. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setError(null);

    try {
      // Get chat history for context
      const chatHistory = messages.slice(-5).map(msg => 
        `${msg.type === 'user' ? 'User:' : 'Assistant:'} ${msg.content}`
      );

      const response = await getChatResponse(input, chatHistory);
      
      const botMessage: Message = {
        type: 'bot',
        content: response || 'I apologize, but I couldn\'t generate a response. Please try again.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsTyping(false);
    }
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
                className={`max-w-[80%] rounded-lg p-3 whitespace-pre-line ${
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
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                AI Assistant is typing...
              </div>
            </div>
          )}
          {error && (
            <div className="flex justify-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about EMG analysis, pain management, exercises, or recovery..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isTyping || isUploading}
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                title="Upload EMG Report"
                disabled={isTyping || isUploading}
              >
                <Upload className="h-5 w-5 text-gray-600" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".pdf,.jpg,.png"
                className="hidden"
                disabled={isTyping || isUploading}
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                title="Send Message"
                disabled={isTyping || isUploading}
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