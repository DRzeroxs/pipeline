const helloWorld = require('./index');

test('returns a hello', () =>{
    expect(helloWorld()).toBe('Hellow, Miguel Grullon Reinoso here');
});