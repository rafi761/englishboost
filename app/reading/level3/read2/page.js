import Image from "next/image"

const Read2 = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-24">
        <div>
            <div className="mx-auto flex justify-center mb-16">
                <Image 
                    src='/images/read-level3-2.png'
                    width={200}
                    height={200}
                    alt='Reading 2 Level 3'
                />
            </div>
            <div className="h-64 overflow-y-auto">
                <h1 className="text-2xl font-semibold">Title : Artificial Intelligence</h1>
                <h3>Applications of Artificial Intelligence</h3>
                <p>
                   Artificial intelligence has found numerous applications across various fields. Here are some notable areas where AI is making a significant impact:
                </p>
                <p>1. Healthcare: AI is transforming the healthcare industry by assisting in disease diagnosis, analyzing medical images, and predicting treatment outcomes. Machine learning algorithms can analyze vast amounts of medical data to provide accurate diagnoses and personalized treatment plans.</p>
                <p>2. Autonomous Vehicles: The development of self-driving cars is one of the most exciting applications of AI. AI-powered systems enable vehicles to perceive their environment, make decisions, and navigate without human intervention. Autonomous vehicles have the potential to enhance road safety and revolutionize transportation.</p>
                <p>3. Natural Language Processing: Natural language processing (NLP) focuses on enabling computers to understand and process human language. NLP powers virtual assistants, chatbots, and language translation services, making human-computer interaction more intuitive and efficient.</p>
                <p>4. Finance and Banking: AI algorithms are used in finance and banking to detect fraud, make investment predictions, and automate customer service. AI-powered chatbots can provide personalized financial advice and streamline banking operations.</p>
                <p>5. Smart Manufacturing: AI is transforming the manufacturing industry by enabling predictive maintenance, optimizing production processes, and enhancing product quality. Machine learning algorithms analyze sensor data to predict equipment failures and minimize downtime.</p>

                <p className="mt-4">
                   Ethical Considerations of Artificial Intelligence
                    While AI brings numerous benefits, it also raises ethical concerns that need to be addressed. Some of these considerations include:
                </p>
                <p>1. Bias and Fairness: AI algorithms can perpetuate biases present in the data they are trained on, leading to unfair outcomes. Ensuring fairness and addressing biases in AI systems is crucial to prevent discrimination and promote equitable decision-making.</p>
                <p>2. Privacy and Security: The widespread use of AI involves collecting and analyzing vast amounts of personal data. Safeguarding privacy and ensuring the security of sensitive information is essential to prevent data breaches and unauthorized access.</p>
                <p>3. Job Displacement: AI automation may lead to job displacement, as certain tasks become automated. It is crucial to explore measures to reskill and upskill the workforce to adapt to the changing job market.</p>
                <p>4. Accountability and Transparency: As AI systems become more autonomous, ensuring accountability and transparency in their decision-making processes is important. Understanding how AI arrives at its decisions is crucial for building trust and addressing potential biases or errors.</p>
            
                <h2 className="text-lg font-semibold mt-5">Questions :</h2>
                <p>1. What is artificial intelligence, and how does it differ from human intelligence?</p>
                <p>2. Provide examples of AI applications in healthcare and finance.</p>
                <p>3. How is natural language processing used in everyday life?</p>
                <p>4. What are some ethical considerations associated with artificial intelligence?</p>
                <p>5. How can bias in AI systems be</p>
            </div>
        </div>
    </div>
  )
}

export default Read2