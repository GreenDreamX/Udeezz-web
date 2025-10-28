import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="container py-20 md:py-32">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-xl text-muted-foreground">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>

      <form className="max-w-xl mx-auto mt-12 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
          <input type="text" id="name" className="w-full p-3 bg-secondary rounded-md border" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
          <input type="email" id="email" className="w-full p-3 bg-secondary rounded-md border" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
          <textarea id="message" rows={5} className="w-full p-3 bg-secondary rounded-md border"></textarea>
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  );
}
