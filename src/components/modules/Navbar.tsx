import Link from "next/link"

export default function Navbar() {
    return(
        <nav id="navbar">
            <div className="navbar-content">
                <section>
                    <h1>DevYard</h1>
                </section>
                <section>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/courses">Courses</Link></li>
                        <li><Link href="/features">Features</Link></li>
                    </ul>
                </section>
                <section>
                    <div className="buttons">
                        <button>Log in</button>
                        <button>Sign up</button>
                    </div>
                    <button className="menuBtn">
                        <svg width="2.2rem" height="2.2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                </section>
            </div>
        </nav>
    )
}