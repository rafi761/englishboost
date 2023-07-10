import Image from "next/image"

const Read2 = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-24">
        <div>
            <div className="mx-auto flex justify-center mb-16">
                <Image 
                    src='/images/read-level1-2.png'
                    width={200}
                    height={200}
                    alt='Reading 2 Level 1'
                />
            </div>
            <div className="h-64 overflow-y-auto">
                <h1 className="text-2xl font-semibold">Title : My Hobbies</h1>
                <h3>My Favorite Hobby: Painting</h3>
                <p>
                    Hi, my name is Adam, and I want to share my favorite hobby with you. I love painting! Painting allows me to express my creativity and emotions through colors and brushstrokes. Heres a glimpse into my world of painting:
                    Whenever I have some free time, I set up my painting easel and gather my art supplies. I usually paint with acrylic paints on canvas. Before starting a new painting, I spend some time brainstorming ideas and planning the composition.
                    Once I have a clear vision in mind, I begin sketching the basic outlines on the canvas using a pencil. I enjoy capturing different subjects in my paintings, such as landscapes, portraits, and still life.
                    After sketching, I select the colors I want to use and start adding layers of paint. I love experimenting with different color combinations and techniques to bring my paintings to life. Sometimes, I use brushes, and other times, I use palette knives to create interesting textures.
                    Painting can be a therapeutic experience for me. As I immerse myself in the process, I feel a sense of peace and fulfillment. It allows me to express my thoughts and emotions in a unique way.
                    Once I finish a painting, I let it dry and then sign it in the corner. Sometimes, I frame my favorite pieces and display them in my room or give them as gifts to family and friends. It brings me joy to see others appreciate my artwork.
                </p>
                <h2 className="text-lg font-semibold mt-5">Questions :</h2>
                <p>1. What is Adams favorite hobby?</p>
                <p>2. What kind of paints does Adam use for his paintings?</p>
                <p>3. How does Adam feel when he is painting?</p>
                <p>4. What does Adam do after finishing a painting?</p>
                <p>5. How does Adam share his artwork with others?</p>
            </div>
        </div>
    </div>
  )
}

export default Read2