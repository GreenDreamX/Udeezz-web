export default function AboutPage() {
  return (
    <section className="container py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-xl text-muted-foreground">
          This is where you can write a detailed description about yourself, your journey into tech, your passions, and your professional experience. Talk about what drives you and what you're looking for in your next role.
        </p>
        <p className="text-lg text-muted-foreground">
          You can also list your skills here. For example: JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, etc.
        </p>
      </div>
    </section>
  );
}
