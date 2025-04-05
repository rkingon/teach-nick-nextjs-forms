/** @type {import('prettier').Config} */
const config = {
    semi: false,
    tabWidth: 4,
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'es5',
    endOfLine: 'lf',
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
}

export default config
