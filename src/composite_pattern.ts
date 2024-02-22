interface Component {
  operation(): void;
}
// to avoid interface suggregation
interface CompositeComponent extends Component {
  add(comp: Component): void;
  remove(comp: Component): void;
}

class Leaf implements Component {
  operation(): void {
    console.log("Leaf operation");
  }
}

class Composite implements CompositeComponent {
  private children = new Set<Component>();
  add(comp: Component): void {
    this.children.add(comp);
  }
  remove(comp: Component): void {
    if (this.children.has(comp)) this.children.delete(comp);
  }
  operation(): void {
    this.children.forEach((child) => {
      child.operation();
    });
  }
}

const leaf1 = new Leaf();
const leaf2 = new Leaf();
const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);
composite.operation();
