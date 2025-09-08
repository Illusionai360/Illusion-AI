
import {
    Code,
    Brain,
    BarChart3,
    MessageCircle,
    GraduationCap,
} from "lucide-react";


export const serviceData: Record<
    string,
    {
        id: number,
        title: string;
        description: string;
        icon: React.ElementType;
        features: string[];
        color: string;
    }
> = {
    AISolution: {
        id: 1,
        title: "AI Solution: AIOPS-IN-A-BOX",
        description:
            "Illusion AI – your intelligent automation partner. A complete AI operations suite with automation, AI agents, and scalable ecosystems.",
        icon: BarChart3,
        features: [
            "N8N Automation – Streamlined workflows & integrations",
            "AI Agents & Multi-agents – Intelligent assistants that collaborate",
            "MCP Servers – Model context protocol servers for scalable ecosystems",
            "Custom RAG Systems – Domain-specific knowledge retrieval",
            "Domain-specific Chatbots",
            "Machine Learning & Gen-AI Projects",
        ],
        color: "from-purple-500 to-pink-500",
    },

    WebSolution: {
        id: 2,
        title: "Web Solution",
        description:
            "Custom, responsive, high-performance websites and apps tailored for SMBs and enterprises.",
        icon: Code,
        features: [
            "Custom & Personalized Websites + Landing Pages",
            "Responsive Design with Optimized UI/UX",
            "Web Components & Projects for SMBs",
            "Contract-based Web Projects",
        ],
        color: "from-blue-500 to-cyan-500",
    },

    MindverseAI: {
        id: 3,
        title: "MINDVERSE AI",
        description:
            "Where consciousness meets computation — multi-domain chatbot ecosystems for science, philosophy, spirituality, and cosmic intelligence.",
        icon: Brain,
        features: [
            "Neurology, Psychology & Philosophy Applications",
            "Astrophysics & Cosmic Intelligence",
            "Spirituality-driven Cognitive AI",
            "Quantum AI Chatbot Ecosystems",
        ],
        color: "from-green-500 to-emerald-500",
    },

    AIConsultancy: {
        id: 4,
        title: "AI Consultancy",
        description:
            "Expert guidance, training, and technical support in AI/ML, Gen-AI, and agentic technologies.",
        icon: GraduationCap,
        features: [
            "Seminars & Webinars on Data Science, AI/ML & Gen-AI",
            "Agentic AI Education & Development",
            "Troubleshooting & Technical Support",
            "Customized Consultation Programs",
        ],
        color: "from-orange-500 to-red-500",
    },

    ConversationalAIChatbot: {
        id: 5,
        title: "Conversational AI Chatbot",
        description:
            "Multi-modal AI companions integrating voice, text, and image to assist, mentor, and befriend.",
        icon: MessageCircle,
        features: [
            "Personal AI Assistant & Companion",
            "Friendship + Mentorship AI",
            "Multi-modal Interactions (Voice, Text, Image)",
            "Advanced Conversational Intelligence",
        ],
        color: "from-indigo-500 to-blue-500",
    },
}