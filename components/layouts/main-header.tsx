import { Button } from "@/components/ui/button";

export default function MainHeader() {
  return (
    <header>
      <nav>
        <div className="flex gap-2 bg-secondary">
          <Button variant={"default"} size={"default"}>
            Login
          </Button>
          <Button variant={"outline"} size={"default"}>
            Register
          </Button>
        </div>
      </nav>
    </header>
  );
}
