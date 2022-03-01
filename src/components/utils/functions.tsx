function CreateIdTag(name: string): string {
    return (name.toLowerCase().replace(/[ \.\\]/g, '-'))
}
function RandomInt(low: number, high: number): number {
    const min: number = Math.ceil(low)
    const max: number = Math.floor(high)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
export { CreateIdTag, RandomInt }
