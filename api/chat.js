
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
    // CORS configuration
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this in production if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { messages } = req.body;

        if (!process.env.GOOGLE_GEMINI_API_KEY) {
            throw new Error('GOOGLE_GEMINI_API_KEY is not set');
        }

        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        // Format history for Gemini
        // Simple approach: combine last few messages or just send the prompt with context
        // For a simple portfolio chat, we can just send the latest query with some system instruction context
        const lastUserMessage = messages[messages.length - 1].text;

        const systemInstruction = `
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
            - **Winner:** "Optimized Odyssey" National Business Case Study (E-Summit IIITN).
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
        `;

        const prompt = `
            ${systemInstruction}
      
            User: ${lastUserMessage}
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return res.status(200).json({ text });

    } catch (error) {
        console.error("Error in chat API:", error);
        return res.status(500).json({ error: 'Failed to generate response' });
    }
}
