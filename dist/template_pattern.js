"use strict";
class RecordDB {
    save() {
        this.validate();
        this.beforeSave();
        // database query ....
    }
    beforeSave() { }
}
class User extends RecordDB {
    validate() {
        // logic
    }
    beforeSave() {
        // logic
    }
}
const user = new User();
user.save();
