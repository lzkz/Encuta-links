import AsyncStorage from '@react-native-async-storage/async-storage';


// Buscar os links salvos.
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;

}

// Salvar um link no storage.
export async function saveLink(key, newLink){
    let linksStoroge = await getLinksSave(key);

    ///se tiver alguns link salvo com esse mesmo ID / ou duplicado preciso ignorar.
    const hasLink = linksStoroge.some( link => link.id === newLink.id );

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA LISTA')
        return;
    }

    linksStoroge.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStoroge))
    console.log('ESSE LINK ')
}

// Deletar algum link especifico.
export async function deleteLink(Links, id){

    let myLinks = Links.filter( (item) => {
        return (item.id !== id)
    }) 

    await AsyncStorage.setItem('sujeitolinks', JSON.stringify(myLinks));

    console.log('LINK DELETADO DO STORAGE')

    return myLinks
}