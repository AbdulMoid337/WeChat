import React from "react";
import Image from "next/image";
import Link from "next/link";

const topics = [
    {
      text: "JavaScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      description: "JavaScript is a high-level, versatile programming language known for its use in web development.",
      slug: "javascript-new",
    },
    {
      text: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      description: "Python is celebrated for its simplicity, readability, and wide use in data science and AI.",
      slug: "python-new",
    },
    {
      text: "Java",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      description: "Java is known for its 'write once, run anywhere' philosophy and use in enterprise environments.",
      slug: "java-new",
    },
    {
      text: "C++",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      description: "C++ is used for system programming, offering low-level memory manipulation and performance.",
      slug: "c++-new",
    },
    {
      text: "Ruby",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      description: "Ruby is popular in web development, especially with the Ruby on Rails framework.",
      slug: "ruby-new",
    },
    {
      text: "Go",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
      description: "Go is designed for building simple, efficient, and scalable software, especially for cloud services.",
      slug: "go-new",
    },
    {
      text: "Swift",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
      description: "Swift is used for iOS, macOS, watchOS, and tvOS development, emphasizing safety and performance.",
      slug: "swift-new",
    },
    {
      text: "Rust",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
      description: "Rust focuses on safety, concurrency, and performance, preventing common programming errors.",
      slug: "rust-new",
    },
    {
      text: "Kotlin",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
      description: "Kotlin is modern, interoperable with Java, and the preferred language for Android development.",
      slug: "kotlin-new",
    },
    {
      text: "TypeScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript_logo_2020.svg",
      description: "TypeScript adds types to JavaScript, enhancing development for large-scale applications.",
      slug: "typescript-new",
    },
    {
      text: "PHP",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      description: "PHP is widely used for server-side scripting in web development, particularly in CMS like WordPress.",
      slug: "php-new",
    },
    {
      text: "C#",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      description: "C# is used for .NET applications, Windows development, and game development with Unity.",
      slug: "csharp-new",
    },
    {
      text: "Docker",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
      description: "Docker provides containerization for applications, ensuring consistency across different environments.",
      slug: "docker-new",
    },
    {
      text: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: "React is a library for building user interfaces, particularly for single-page applications.",
      slug: "react-new",
    },
    {
      text: "Node.js",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      description: "Node.js allows JavaScript to be used on the server, enabling scalable network applications.",
      slug: "nodejs-new",
    },
    {
      text: "Git",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      description: "Git is a distributed version control system for tracking changes in source code during software development.",
      slug: "git-new",
    },
    {
      text: "Kubernetes",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      description: "Kubernetes automates deployment, scaling, and operations of application containers.",
      slug: "kubernetes-new",
    },
    {
      text: "Webpack",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg",
      description: "Webpack is a module bundler for JavaScript applications, managing assets, styles, and scripts.",
      slug: "webpack-new",
    },
  ];
  

const Forums = () => {
  return (
    <>
      <div className="flex flex-col text-center mt-8">
        <h1 className="text-3xl font-bold mb-4">Discussion Forums</h1>
        <div className="flex flex-row flex-wrap gap-12 mt-4 justify-center">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="card glass-effect bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-4 border border-white/20 w-60 h-72"
            >
              <Image
                src={topic.image}
                alt={topic.text}
                width={40}
                height={40}
                className="rounded-md mx-auto"
              />
              <h3 className="text-xl font-semibold text-black mt-4">
                {topic.text}
              </h3>
              <p className="text-sm text-black mt-2">{topic.description}</p>
              <Link href={`/forum/${topic.slug}`}>
              <button className="mt-3 relative inline-block min-w-[130px] h-10 text-black font-bold cursor-pointer transition-all duration-300 ease-in-out bg-white border-2 border-white-600 rounded-md overflow-hidden group">
                <span className="relative z-10">Discuss now</span>
                <span className="absolute inset-0 bg-green-500 transition-all duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100 "></span>
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forums;
