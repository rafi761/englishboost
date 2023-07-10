import Image from "next/image"

const Read2 = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-24">
        <div>
            <div className="mx-auto flex justify-center mb-16">
                <Image 
                    src='/images/read-level2-2.png'
                    width={200}
                    height={200}
                    alt='Reading 1 Level 2'
                />
            </div>
            <div className="h-64 overflow-y-auto">
                <h1 className="text-2xl font-semibold">Title : Cybersecurity</h1>
                <h3>The Importance of Cybersecurity</h3>
                <p>
                   In our interconnected world, where technology has become an integral part of our daily lives, the importance of cybersecurity cannot be overstated. Here are some reasons why cybersecurity is crucial:
                </p>
                <p>1. Protection from Cyber Threats: Cyber threats, such as malware, viruses, and hacking attempts, can compromise our sensitive information, disrupt our systems, and cause significant financial and personal harm. Cybersecurity measures help safeguard our devices, networks, and data from these threats.</p>
                <p>2. Privacy and Data Protection: With the widespread use of social media, online shopping, and digital communication, our personal information is more vulnerable than ever. Cybersecurity ensures the protection of our privacy by implementing measures that secure our data and prevent unauthorized access or misuse.</p>
                <p>3. Business Continuity: Businesses rely heavily on technology for their operations, making them prime targets for cyber attacks. A successful attack can disrupt services, compromise customer data, and damage a companys reputation. Cybersecurity measures help ensure business continuity by safeguarding critical systems and sensitive information.</p>
                <p>4. Safeguarding Intellectual Property: Innovation and creativity are essential for progress and economic growth. Cybersecurity plays a vital role in protecting intellectual property, such as patents, trade secrets, and proprietary information, from theft or unauthorized access. This fosters a secure environment for businesses to thrive.</p>
                <p>5. National Security: Cybersecurity is crucial for protecting a countrys infrastructure, defense systems, and government networks from cyber threats. Malicious actors may attempt to disrupt critical services, steal classified information, or launch cyber attacks. Strong cybersecurity measures are essential to safeguard national security interests.</p>
                <h2 className="text-lg font-semibold mt-5">Questions :</h2>
                <p>1. What is cybersecurity?</p>
                <p>2. What are some common cyber threats?</p>
                <p>3. Why is privacy and data protection important in the digital age?</p>
                <p>4. How does cybersecurity contribute to business continuity?</p>
                <p>5. Why is cybersecurity essential for national security?</p>
            </div>
        </div>
    </div>
  )
}

export default Read2