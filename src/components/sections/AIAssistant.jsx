import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AIAssistant = ({ isOpen, onToggle }) => {
    // const [isOpen, setIsOpen] = useState(false); // Removed local state
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "Hello! I'm your AI guide here. Ask me about Sahil's experience or projects." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const lastMsg = messages[messages.length - 1];
        if (isLoading || lastMsg?.role === 'user') {
            scrollToBottom();
        }
    }, [messages, isLoading]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            // Priority 1: Try Serverless Backend (Production)
            // This works when deployed to Vercel or using `vercel dev`
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ messages: [...messages, userMsg] })
                });

                if (response.ok) {
                    const data = await response.json();
                    setMessages(prev => [...prev, { role: 'assistant', text: data.text }]);
                    return;
                }
            } catch (err) {
                // Ignore backend error for fallback
            }

            // Priority 2: Fallback to Client-Side (Local Dev only)
            const localKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;

            if (localKey) {
                const genAI = new GoogleGenerativeAI(localKey);
                const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

                const prompt = `
                    You are an AI assistant for Sahil Jagdish Bagade's portfolio website. Sahil is a Computer Science (AIML) student at IIIT Nagpur (2022-2026).

                    **🌟 Personal Bio (From Website):**
                    My name is Sahil Jagdish Bagade. I am deeply interested in AI/ML, web development, and software engineering. I enjoy building practical, end-to-end solutions and exploring new technologies. I’m also deeply curious about space and love learning anything fascinating about the universe 🪐.

                    **💼 Experience & Internships (Resume + Website):**
                    1. **Assistant Program Mentor @ InUnity** (Jan 2026 – Present)
                       - *Role:*
                         - Developed software-driven solutions by translating real-world problem statements using Design Thinking principles.
                         - Designed and implemented frontend interfaces and application logic using **React and Python**.
                         - Created user interface workflows and prototypes using FlutterFlow and Figma.
                         - Integrated hardware inputs (Arduino and sensors) with software components for functional system development.
                         - Built and tested prototypes through iterative development, ensuring deployment-ready technical solutions.
                    2. **Senior Coordinator (Content & Marketing) @ Tantrafiesta (IIITN Tech Fest)** (Aug 2024 – Oct 2024)
                       - Led content creation and anchoring teams for Central India's largest technical fest.
                 

                    **🚀 Projects (Portfolio & Resume):**
                    1. **Tuberculosis Detection:** Built with DenseNet + Vision Transformer (ViT) on Chest X-rays. 99% accuracy. Features Grad-CAM for explainability and a Gradio interface.
                    2. **Aircraft Semantic Segmentation:** Custom U-Net model using TensorFlow/Keras. Processed XML annotations for precise boundary localization.
                    3. **Predictive Maintenance:** Deep Reinforcement Learning project. Created a custom OpenAI Gym environment and trained a DQN agent to predict machine failures.
                    4. **Oil Spill Detection:** Semantic segmentation using ResNet50 with Dice & Focal Loss for satellite imagery.

                    **🎓 Education:**
                    - **B.Tech in CSE (AI & ML)** | IIIT Nagpur | 2022 – 2026
                    - **Schooling:** Deogiri Global Academy.
                    - **Key Coursework:** ML, DL, NLP, Computer Vision, DBMS, DSA, Statistics, Cloud Computing.

                    **🛠️ Technical Skills:**
                    - **Languages:** Python, C/C++, JavaScript, SQL.
                    - **AI/ML Frameworks:** TensorFlow, Keras, PyTorch, OpenCV, Scikit-learn, Transformers, LSTM, RL.
                    - **Web/Tools:** React, Next.js, Docker, Git, Power BI, MongoDB, MySQL, Figma, FlutterFlow.

                    **🏆 Achievements:**
                    - **Winner:** Optimized Odyssey National Business Case Study (E-Summit IIITN).
                    - **NVIDIA Certified:** Fundamentals of Deep Learning & Transformer-Based NLP Applications.

                    **📬 Contact:**
                    - Email: study27g@gmail.com
                    - LinkedIn: linkedin.com/in/sahilbagade
                    - GitHub: github.com/sahilbagde22

                    **Your Goal:**
                    - Represent Sahil authentically. Combine his professional technical side with his curiosity (space, learning).
                    - Answer questions using this combined knowledge base. 
                    - **CRITICAL:** Keep your responses SHORT and to the point (maximum 3-4 lines). Do not provide long, descriptive answers unless specifically asked.
                    - If asked about **internships**, explicitly mention the "Assistant Program Mentor @ InUnity" role.
                    - Be helpful, concise, and friendly.
                    
                    User: ${userMsg.text}
                `;

                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();

                setMessages(prev => [...prev, { role: 'assistant', text: text }]);
                return;
            }

            throw new Error('No connection to chat backend');

        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                text: "Sorry, I'm having trouble connecting to my brain right now. Please try again later."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="absolute bottom-16 right-0 w-[90vw] sm:w-[400px] md:w-[500px] bg-white/90 dark:bg-[#121212]/90 backdrop-blur-xl border border-core-red/20 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[60vh] max-h-[600px] min-h-[400px]"
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-zinc-200 dark:border-white/5 bg-core-red/5 flex justify-between items-center shrink-0">
                                <div className="flex items-center gap-2">
                                    <Bot className="text-core-red" size={20} />
                                    <h3 className="font-semibold text-zinc-900 dark:text-white font-mono">AI ASSISTANT</h3>
                                </div>
                                <button onClick={onToggle} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                                {messages.map((msg, idx) => (
                                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] p-3 rounded-xl text-sm font-mono ${msg.role === 'user'
                                            ? 'bg-core-red text-white rounded-tr-none'
                                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none border border-zinc-200 dark:border-white/5'
                                            }`}>
                                            <ReactMarkdown
                                                components={{
                                                    strong: ({ node, ...props }) => <span className="font-bold text-core-red" {...props} />,
                                                    ul: ({ node, ...props }) => <ul className="list-disc pl-4 space-y-1 my-2" {...props} />,
                                                    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                                    p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                                    h1: ({ node, ...props }) => <h1 className="text-lg font-bold my-2" {...props} />,
                                                    h2: ({ node, ...props }) => <h2 className="text-md font-bold my-2" {...props} />,
                                                    h3: ({ node, ...props }) => <h3 className="text-sm font-bold my-1" {...props} />
                                                }}
                                            >
                                                {msg.text}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl rounded-tl-none border border-zinc-200 dark:border-white/5">
                                            <Loader2 size={16} className="animate-spin text-zinc-500 dark:text-zinc-400" />
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-black/20">
                                <form onSubmit={handleSend} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask a question..."
                                        disabled={isLoading}
                                        className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl px-3 py-2 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-core-red focus:ring-1 focus:ring-core-red/50 font-mono placeholder:text-zinc-400 dark:placeholder:text-zinc-500 disabled:opacity-50"
                                    />
                                    <Button type="submit" variant="primary" className="px-3 py-2 rounded-xl" disabled={isLoading}>
                                        <Send size={16} />
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onToggle}
                    className="bg-core-red w-14 h-14 flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(255,77,77,0.4)] text-white hover:bg-red-500 transition-all border border-white/10"
                >
                    {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                </motion.button>
            </div>
        </>
    );
};

export default AIAssistant;
