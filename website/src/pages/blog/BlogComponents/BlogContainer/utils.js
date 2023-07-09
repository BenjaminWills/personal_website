export function splitTagsToArray(tags){
    // Split the tags by commas
    const tagList = tags.map(
        tag => <li>{tag.name}</li>)
    return tagList
}