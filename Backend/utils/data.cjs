const quizzes = [
    {
        classLevel: "10",
        question: "You’re given a tricky puzzle or math problem. What’s your first reaction?",
        options: [
            { text: "Solve it step by step.", stream: "Science", skills: ["logic", "problem-solving"] },
            { text: "Apply it to real life.", stream: "Commerce", skills: ["practical", "analytical"] },
            { text: "Prefer to write/draw instead.", stream: "Arts", skills: ["creativity", "expression"] }
        ]
    },
    {
        classLevel: "10",
        question: "Which activity sounds the most fun?",
        options: [
            { text: "Designing a science experiment.", stream: "Science", skills: ["curiosity", "scientific thinking"] },
            { text: "Calculating profit/loss for a business idea.", stream: "Commerce", skills: ["financial literacy", "business sense"] },
            { text: "Writing a story, performing, or painting.", stream: "Arts", skills: ["storytelling", "artistic ability"] }
        ]
    },
    {
        classLevel: "10",
        question: "You’re shown a graph full of numbers. What do you do?",
        options: [
            { text: "Spot trends & patterns.", stream: "Science", skills: ["data-analysis"] },
            { text: "Use it for practical decisions.", stream: "Commerce", skills: ["decision-making"] },
            { text: "Think about a creative idea instead.", stream: "Arts", skills: ["imagination"] }
        ]
    },
    {
        classLevel: "10",
        question: "Which section do you click first online/newspaper?",
        options: [
            { text: "Science & Tech.", stream: "Science", skills: ["curiosity", "tech"] },
            { text: "Business & Finance.", stream: "Commerce", skills: ["finance", "economics"] },
            { text: "Arts & Culture.", stream: "Arts", skills: ["culture", "storytelling"] }
        ]
    },
    {
        classLevel: "10",
        question: "Imagine your school offers electives. You’d pick:",
        options: [
            { text: "Robotics/Biology.", stream: "Science", skills: ["innovation"] },
            { text: "Entrepreneurship/Accounting.", stream: "Commerce", skills: ["entrepreneurship"] },
            { text: "Theatre/Music/Creative Writing.", stream: "Arts", skills: ["performance", "writing"] }
        ]
    },
    {
        classLevel: "10",
        question: "Which YouTube video would you watch?",
        options: [
            { text: "How rockets/AI/medicine works.", stream: "Science", skills: ["STEM"] },
            { text: "How to start a business/invest.", stream: "Commerce", skills: ["business", "money"] },
            { text: "Film-making/Poetry/History docs.", stream: "Arts", skills: ["film", "literature"] }
        ]
    },
    {
        classLevel: "10",
        question: "During a group project, your role is:",
        options: [
            { text: "Research/analysis.", stream: "Science", skills: ["research", "analysis"] },
            { text: "Organizer/manager.", stream: "Commerce", skills: ["leadership"] },
            { text: "Designer/presenter.", stream: "Arts", skills: ["presentation", "design"] }
        ]
    },
    {
        classLevel: "10",
        question: "Your biggest strength is:",
        options: [
            { text: "Accuracy & logical thinking.", stream: "Science", skills: ["accuracy", "logic"] },
            { text: "Planning & leadership.", stream: "Commerce", skills: ["planning", "leadership"] },
            { text: "Creative storytelling.", stream: "Arts", skills: ["creativity", "storytelling"] }
        ]
    },
    {
        classLevel: "10",
        question: "Which describes you best?",
        options: [
            { text: "Logical & Curious.", stream: "Science", skills: ["logic", "curiosity"] },
            { text: "Practical & Ambitious.", stream: "Commerce", skills: ["practical", "ambition"] },
            { text: "Imaginative & Expressive.", stream: "Arts", skills: ["expression", "imagination"] }
        ]
    },
    {
        classLevel: "10",
        question: "If you had to choose an internship:",
        options: [
            { text: "Coding camp or research lab.", stream: "Science", skills: ["research", "tech"] },
            { text: "Finance or accounting internship.", stream: "Commerce", skills: ["finance", "numbers"] },
            { text: "Theatre/art workshop.", stream: "Arts", skills: ["art", "performance"] }
        ]
    },
    {
        classLevel: "10",
        question: "If India faces climate change, how do you help?",
        options: [
            { text: "Invent technology.", stream: "Science", skills: ["innovation"] },
            { text: "Build sustainable businesses.", stream: "Commerce", skills: ["sustainability", "entrepreneurship"] },
            { text: "Inspire through art/films/writing.", stream: "Arts", skills: ["activism", "creativity"] }
        ]
    },
    {
        classLevel: "10",
        question: "Which role model inspires you?",
        options: [
            { text: "Scientists, doctors, engineers.", stream: "Science", skills: ["STEM-rolemodel"] },
            { text: "Entrepreneurs, investors.", stream: "Commerce", skills: ["business-rolemodel"] },
            { text: "Writers, filmmakers, historians.", stream: "Arts", skills: ["art-rolemodel"] }
        ]
    }
];

module.exports = { data: quizzes };
