import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="mt-6 text-xl text-center text-gray-600 dark:text-gray-300">
            A passionate developer building amazing web experiences
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <p>
              I'm a full-stack developer with a passion for creating beautiful and functional web applications.
              With expertise in modern web technologies, I strive to build solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Skill items will go here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            {/* Contact form will go here */}
          </div>
        </div>
      </section>
    </main>
  );
} 