module.exports = class ApplicationPolicy {

    constructor(user){
        this.user = user;
    }

    _isAdmin() {
        return this.user && this.user.role == 3;
    }

    _isPremium() {
        return this.user && this.user.role == 2;
    }

    new() {
        return this.user != null;
    }

    create() {
        return this.new();
    }

    show() {
        return true;
    }

    edit() {
        return this.new();
    }

    update() {
        return this.edit();
    }

    destroy() {
        return this._isAdmin();
    }
}