import { useState } from "react";

const articles = [
    {
        id: 1,
        title: "Exploring Rust: A Journey into Systems Programming",
        date: "Dec 2025",
        readTime: "3 min read",
        tags: ["Learning", "Rust", "Systems"],
        summary: "Why I started learning Rust: A look into memory safety, zero-cost abstractions, and the future of high-performance backends.",
        content: (
            <>
                <p style={{ marginBottom: '1rem' }}>
                    As a scalable systems architect primarily using <strong>Node.js</strong> and <strong>TypeScript</strong>, I've always been curious about what lies beneath the high-level abstractions. This curiosity led me to <strong>Rust</strong>.
                </p>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text)', margin: '1.5rem 0 0.5rem' }}>Why Rust?</h4>
                <p style={{ marginBottom: '1rem' }}>
                    I'm currently diving deep into "The Rust Programming Language" book to understand how low-level systems handle memory without a Garbage Collector. The concept of <strong>Efficiency without sacrificing Safety</strong> allows for building robust applications that are both fast and secure.
                </p>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text)', margin: '1.5rem 0 0.5rem' }}>What I'm Exploring</h4>
                <p style={{ marginBottom: '1rem' }}>
                    My focus is on understanding <strong>Ownership & Borrowing</strong>, concurrency models, and how <strong>WASM</strong> might shape the future of web apps. It's a challenging but rewarding shift in mindset from the JS ecosystem to systems programming.
                </p>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text)', margin: '1.5rem 0 0.5rem' }}>Goal</h4>
                <p>
                    The aim isn't to replace my current stack immediately but to broaden my engineering horizons. Understanding constraints at a system level makes me a better high-level architect today.
                </p>
            </>
        )
    }
];

export default function Blog() {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <section className="blog-sec fade-in-up" style={{ marginTop: '5rem', marginBottom: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Engineering Thoughts</h2>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className="glass-panel"
                        style={{
                            padding: '2rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onClick={() => setExpandedId(expandedId === article.id ? null : article.id)}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text)' }}>
                                    {article.title}
                                </h3>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', opacity: 0.6, marginBottom: '1rem' }}>
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {article.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.75rem',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        background: 'var(--accent)',
                                        color: 'var(--bg-dark)',
                                        fontWeight: 'bold'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p style={{
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            opacity: 0.8,
                            display: expandedId === article.id ? 'none' : 'block'
                        }}>
                            {article.summary}
                            <span style={{ color: 'var(--accent)', marginLeft: '0.5rem', fontWeight: 'bold' }}>Read more →</span>
                        </p>

                        <div style={{
                            maxHeight: expandedId === article.id ? '1000px' : '0',
                            opacity: expandedId === article.id ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            borderTop: expandedId === article.id ? '1px solid var(--border)' : 'none',
                            marginTop: expandedId === article.id ? '1.5rem' : '0',
                            paddingTop: expandedId === article.id ? '1.5rem' : '0',
                            lineHeight: '1.8'
                        }}>
                            {article.content}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
