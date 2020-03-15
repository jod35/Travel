suite('Global Tests',()=>{
    test('page has a valid title',()=>{
        AuthenticatorAssertionResponse(document.title && document.title.match(/\S/))
        && document.title.toUpperCase() != 'TODO';
    })
})