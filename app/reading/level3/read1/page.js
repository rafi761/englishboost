import Image from "next/image"

const Read1 = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-24">
        <div>
            <div className="mx-auto flex justify-center mb-16">
                <Image 
                    src='/images/read-level3-1.png'
                    width={200}
                    height={200}
                    alt='Reading 1 Level 3'
                />
            </div>
            <div className="h-64 overflow-y-auto">
                <h1 className="text-2xl font-semibold">Title : Sustainable Development</h1>
                <h3>The Principles of Sustainable Development</h3>
                <p>
                   Sustainable development is guided by several key principles that shape its approach to decision-making and planning. Here are some fundamental principles of sustainable development:
                </p>
                <p>1. Interdependence: Sustainable development recognizes the interconnections between social, economic, and environmental systems. It acknowledges that actions in one area can have impacts on others, and thus, a holistic approach is essential for long-term sustainability.</p>
                <p>2. Equity and Social Justice: Sustainable development aims to ensure that the benefits and opportunities of development are accessible to all members of society, regardless of their gender, age, or socioeconomic background. It seeks to reduce inequalities and promote social inclusion.</p>
                <p>3. Environmental Stewardship: Protecting and conserving the natural environment is a core principle of sustainable development. It emphasizes responsible resource use, pollution prevention, and the preservation of ecosystems to maintain the planets health and biodiversity.</p>
                <p>4. Long-Term Perspective: Sustainable development takes a long-term view, considering the potential impacts of decisions and actions on future generations. It aims to ensure that development practices today do not compromise the well-being and opportunities of future populations.</p>
                <p>5. Participation and Collaboration: Sustainable development encourages active participation and collaboration among stakeholders, including communities, businesses, governments, and civil society. It recognizes that diverse perspectives and collective action are vital for achieving sustainable outcomes.</p>

                <p className="mt-4">
                   The Importance of Sustainable Development Sustainable development is crucial for several reasons:
                </p>
                <p>1. Environmental Preservation: By promoting sustainable practices, we can protect and preserve the natural environment, ensuring the availability of clean air, water, and resources for future generations.</p>
                <p>2. Social Well-being: Sustainable development focuses on improving the quality of life for all individuals, ensuring access to basic services, such as education, healthcare, and housing, while promoting social inclusion and reducing inequalities.</p>
                <p>3. Economic Stability: Sustainable development promotes economic growth that is balanced with environmental and social considerations. It encourages innovation, responsible business practices, and the creation of green jobs, leading to long-term economic stability.</p>
                <p>4. Climate Change Mitigation: Sustainable development plays a crucial role in addressing climate change by promoting renewable energy, energy efficiency, and sustainable transportation, reducing greenhouse gas emissions, and building climate-resilient communities.</p>
                <p>5. Global Cooperation: Sustainable development requires global cooperation and partnerships to address transboundary issues such as biodiversity loss, climate change, and resource depletion. It emphasizes the importance of international collaboration for achieving sustainable outcomes.</p>
                <h2 className="text-lg font-semibold mt-5">Questions :</h2>
                <p>1. What are the key principles of sustainable development?</p>
                <p>2. Why is environmental preservation important in sustainable development?</p>
                <p>3. How does sustainable development promote social well-being?</p>
                <p>4. What is the long-term perspective in sustainable development?</p>
                <p>5. Why is global cooperation</p>
            </div>
        </div>
    </div>
  )
}

export default Read1