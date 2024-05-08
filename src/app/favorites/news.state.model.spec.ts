import { InitDataACtions, NewsDataModelInterface, initializenews, reducerNewsData } from './news-state.model'

const dataInit: NewsDataModelInterface = {
    id: 1,
    title: 'titulo',
    description: 'la descripción de la noticia',
    isFavSelect: false,
    nameReporter: 'name',
    date: '25/10/2024'
}
describe("Pruebas a New state model", function () {
    it("el array debe ser mayor a 0", function () {
        const prueba = initializenews()
        const action =  new InitDataACtions([dataInit])
        const newstate =  reducerNewsData(prueba, action)
        expect(newstate.lastsRead.length !== 0).toBeTrue()
    });

    it("debe tener el nombre del reportero de name", function () {
        const prueba = initializenews()
        const action =  new InitDataACtions([dataInit])
        const newstate =  reducerNewsData(prueba, action)
        expect(newstate.lastsRead[0].nameReporter === 'name').toBeTrue()
    });
});