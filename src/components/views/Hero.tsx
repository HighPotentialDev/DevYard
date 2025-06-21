import Image from "next/image"

export default function Hero() {
    return(
        <div id="hero-section">
            <div className="hero-section-content">
                <section>
                    <h1>Master New Languages <span>With Confidence</span></h1>
                    <p>Transition between programming languages seamlessly with DevYard&apos;s side-by-side learning approach. Compare syntax, concepts, and best practices in real-time.</p>
                    <div className="ctas">
                        <button>Start Learning Now</button>
                        <button>Learn more</button>
                    </div>
                    <div className="bottom-line">
                        <div className="profiles">
                            <div className="profile"></div>
                            <div className="profile"></div>
                            <div className="profile"></div>
                        </div>
                        <h3>1000+ developers already learning</h3>
                    </div>
                </section>
                
                <section>
                    <Image layout="responsive" alt="" width={100} height={100} src="/assets/images/code.png" />
                </section>
            </div>

            <div className="hero-section-features">
                <div className="features-header">
                    <h1>Popular Language Transitions</h1>
                    <p>Choose your source and target languages to start your learning journey</p>
                </div>
                <div className="features-body">
                    {
                        languages.map((data, index) => {
                            return <Feature data={data} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function Feature({data}: {data: Language}) {
    return (
        <div className="feature">
            <section>
                <Image width={100} height={40} src={data.icon} alt="icon" />
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.subtitle}</p>
                </div>
            </section>
            <section>
                <p>{data.description}</p>
            </section>
            <section>
                <p>{data.learners} learners</p>
                <p>Start</p>
            </section>
        </div>
    )
}

interface Language {
    title: string,
    subtitle: string,
    icon: string,
    description: string,
    learners: string
}

const languages = [
    {
        title: "JavaScript - Python",
        subtitle: "Frontend to Backend",
        icon: "/assets/images/js-py.png",
        description: "Transition from client-side scripting to versatile backend development with Python.",
        learners: "1,000"
    },
    {
        title: "Python - Go",
        subtitle: "Scripting to System",
        icon: "/assets/images/py-go.png",
        description: "Move from Python’s simplicity to Go’s performance and concurrency features. ",
        learners: "3,200"
    },
    {
        title: "Java - JavaScript",
        subtitle: "Enterprise to Web",
        icon: "/assets/images/j-js.png",
        description: "Transition from Java’s strict typing to JavaScript dynamic web ecosystem.",
        learners: "9,000"
    },
]