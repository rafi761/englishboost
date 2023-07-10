import Image from "next/image"

const Read1 = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-24">
        <div>
            <div className="mx-auto flex justify-center mb-16">
                <Image 
                    src='/images/read-level2-1.png'
                    width={200}
                    height={200}
                    alt='Reading 1 Level 2'
                />
            </div>
            <div className="h-64 overflow-y-auto">
                <h1 className="text-2xl font-semibold">Title : Environmental Conservation</h1>
                <h3>The Importance of Environmental Conservation</h3>
                <p>
                   Our environment plays a vital role in sustaining life on Earth. It provides us with clean air, water, food, and resources necessary for our survival. However, human activities have led to environmental degradation and a decline in biodiversity. Here are some reasons why environmental conservation is crucial:
                </p>
                <p>1. Biodiversity Preservation: Our planet is home to a wide variety of plant and animal species. Preserving biodiversity is essential for maintaining ecological balance and sustaining ecosystems. Every species has a role to play in the web of life, and the loss of even a single species can have far-reaching consequences.</p>
                <p>2. Climate Change Mitigation: Climate change, caused by human activities like deforestation and excessive greenhouse gas emissions, poses a significant threat to our planet. Environmental conservation aims to reduce carbon emissions, promote renewable energy sources, and adopt sustainable practices to mitigate the impacts of climate change.</p>
                <p>3. Resource Conservation: Natural resources like forests, water, and minerals are finite and must be used wisely. Environmental conservation focuses on sustainable management and responsible use of resources to ensure their availability for future generations.</p>
                <p>4. Pollution Prevention: Human activities generate various forms of pollution, such as air pollution, water pollution, and soil contamination. Environmental conservation involves adopting eco-friendly practices, reducing waste generation, and promoting recycling to prevent pollution and protect our ecosystems.</p>
                <p>5. Environmental Education and Awareness: Promoting environmental education and awareness is vital to inspire individuals to take action. By educating people about environmental issues and their consequences, we can encourage sustainable behaviors and empower communities to make a positive impact.</p>
                <h2 className="text-lg font-semibold mt-5">Questions :</h2>
                <p>1. What is environmental conservation?</p>
                <p>2. Why is preserving biodiversity important?</p>
                <p>3. How does environmental conservation contribute to mitigating climate change?</p>
                <p>4. What is the significance of resource conservation?</p>
                <p>5. Why is environmental education crucial in environmental conservation efforts?</p>
            </div>
        </div>
    </div>
  )
}

export default Read1