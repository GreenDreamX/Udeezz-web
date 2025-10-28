export default function ProjectsPage() {
  return (
    <section className="container py-20 md:py-32">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-xl text-muted-foreground">Here are some of the projects I've worked on.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card Placeholder 1 */}
        <div className="bg-card p-6 rounded-lg border">
          <div className="w-full h-40 bg-secondary rounded-md mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
          <p className="text-muted-foreground mb-4">A brief description of the project goes here.</p>
          <div className="text-sm text-primary">View Project</div>
        </div>
        {/* Project Card Placeholder 2 */}
        <div className="bg-card p-6 rounded-lg border">
          <div className="w-full h-40 bg-secondary rounded-md mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Project Title 2</h3>
          <p className="text-muted-foreground mb-4">A brief description of the project goes here.</p>
          <div className="text-sm text-primary">View Project</div>
        </div>
        {/* Project Card Placeholder 3 */}
        <div className="bg-card p-6 rounded-lg border">
          <div className="w-full h-40 bg-secondary rounded-md mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Project Title 3</h3>
          <p className="text-muted-foreground mb-4">A brief description of the project goes here.</p>
          <div className="text-sm text-primary">View Project</div>
        </div>
      </div>
    </section>
  );
}
