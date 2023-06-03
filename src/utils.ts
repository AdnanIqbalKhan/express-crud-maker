declare global {
    interface String {
        toFirstCapitalCase(): string;
    }
}

String.prototype.toFirstCapitalCase = function (): string {
    return this.charAt(0).toUpperCase() + this.slice(1);
};