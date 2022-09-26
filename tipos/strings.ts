(() => {

    const batman: string = 'Batman'
    const linternaVerde: string = "Linterna's verde"
    const volcanNegro: string = `Héroe: Volcan Negro`

    console.log(` I'm ${ batman } `)
    console.log(batman.toUpperCase())
    
    console.log( batman[10]?.toUpperCase() || 'No está presente' )

})()