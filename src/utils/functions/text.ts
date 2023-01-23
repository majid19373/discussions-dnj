export const validateTextComment = (str: string): string => {
    let newString: string = str
    // convert html tag to string
    newString = newString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

    const usernamePattern: RegExp = /@+(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,29}/g;
    const matches: IterableIterator<RegExpMatchArray> = str.matchAll(usernamePattern)
    // Placement of the username in the Anchor tag
    for (const match of matches) {
        newString = newString.replaceAll(match[0], `<a href="#" class="inline-block text-blue-600 bg-blue-100 hover:text-blue-800 hover:bg-blue-200 py-[1px] px-1 rounded">${match}</a>`)
    }
    return newString
}

export const avatarName = (avatar: string): string => {
    const splitFullName: string[] = avatar.split(" ")
    let newFullName = ''
    for(let i = 0; i < splitFullName.length; i++){
        newFullName += splitFullName[i].slice(0,1).toUpperCase()
        if(i >= 1){
            break
        }
    }
    return newFullName
}