// 1.ES6 Exports
// 1.1 export when initiation the variable.
export const PI = Math.PI
export function degreesToRadians(d) {
  return d * PI / 180;
}
// 1.2 export at last.
const anotherPI = Math.PI
export { anotherPI }
// 1.3 'export default'
export default {
  message: 'exported message'
}
