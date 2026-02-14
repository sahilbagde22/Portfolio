export const projects = [
    {
        title: "Aircraft Semantic Segmentation",
        description: "Built a custom U-Net architecture for pixel-wise aircraft segmentation using XML polygon annotations. Designed a complete preprocessing pipeline with mask generation, data augmentation, and training optimization for accurate boundary localization.",
        tech: ["Python", "TensorFlow", "U-Net", "OpenCV", "Pillow (PIL)", "XML Parsing (ElementTree)"],
        link: "https://github.com/sahilbagde22/semantic-segmentation",
        live: "#",
        span: "md:col-span-1",
        color: "system-green",
        image: "/projects/satellite.png"
    },
    {
        title: "Oil Spill Detection & Multi-Class Segmentation",
        description: "Built a multi-class semantic segmentation model using a ResNet-based architecture with Dice and Focal Loss optimization to accurately detect oil spill regions from satellite images, evaluated using precision, recall, and F1-score metrics.",
        tech: ["TensorFlow", "Keras", "ResNet50", "Segmentation Models", "OpenCV", "NumPy"],
        link: "https://github.com/sahilbagde22/oil-spill-detection",
        live: "#",
        span: "md:col-span-1",
        color: "blue-500",
        image: "/projects/oilspill.png"
    },
    {
        title: "Predictive Maintenance with Deep Reinforcement Learning",
        description: "Built a custom maintenance simulation environment and trained a PyTorch-based DQN agent with reward engineering, target networks, and experience replay to intelligently predict and prevent machine failures.",
        tech: ["PyTorch", "OpenAI Gym", "Deep Q-Network (DQN)", "Reinforcement Learning", "Python"],
        link: "https://github.com/sahilbagde22/Predictive-Maintenance-of-Industrial-Machine-using-RL",
        live: "#",
        span: "md:col-span-1",
        color: "core-red",
        image: "/projects/predict.png"
    },
    {
        title: "Tuberculosis Detection using Hybrid Deep Learning & XAI",
        description: "Built a hybrid DenseNet and Vision Transformer model for TB classification on chest X-ray images, achieving high accuracy and integrating Grad-CAM to provide visual explanations for medical decision support.",
        tech: ["Vision Transformer (ViT)", "DenseNet", "Grad-CAM", "PyTorch", "Medical AI", "Python"],
        link: "https://github.com/sahilbagde22/Tuberculosis-Detection-XAI",
        live: "#",
        span: "md:col-span-1",
        color: "purple-500",
        image: "/projects/tb.png"
    }
];
