abstract class RecordDB {
  public save(): void {
    this.validate();
    this.beforeSave();
    // database query ....
  }
  public abstract validate(): void;
  public beforeSave(): void {}
}

class User extends RecordDB {
  public validate(): void {
    // logic
  }
  public beforeSave(): void {
    // logic
  }
}
const user: User = new User();
user.save();
